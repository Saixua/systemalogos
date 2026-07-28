/**
 * ============================================================================
 * SYSTEMALOGOS — Async Deck Loader & Course Manager Module
 * File: /js/deck_loader.js
 * ============================================================================
 * Purpose:
 *   Manages multi-language course switching (Spanish 🇪🇸, French 🇫🇷, German 🇩🇪),
 *   asynchronously lazy-loads active JSON deck files under /decks/, isolates SRS
 *   progress databases per language, updates TTS accents dropdown, and dispatches
 *   dynamic 'languageChanged' events.
 * ============================================================================
 */

(function(window) {
  let activeLanguage = localStorage.getItem('systemalogos_active_language') || 'spanish';

  const LANGUAGE_CONFIGS = {
    spanish: {
      name: 'Spanish',
      flag: '🇪🇸',
      deckFile: 'decks/spanish_core_deck.json',
      fallbackDeckFile: 'spanish_core_deck.json',
      scenarioFile: 'scenarios/spanish_scenarios.json',
      fallbackScenarioFile: 'scenarios_data.js',
      ttsLang: 'es-MX',
      pillClass: 'A1-Beginner'
    },
    french: {
      name: 'French',
      flag: '🇫🇷',
      deckFile: 'decks/french_core_deck.json',
      fallbackDeckFile: 'french_core_deck.json',
      scenarioFile: 'scenarios/french_scenarios.json',
      ttsLang: 'fr-FR',
      pillClass: 'B1-Intermediate'
    },
    german: {
      name: 'German',
      flag: '🇩🇪',
      deckFile: 'decks/german_core_deck.json',
      fallbackDeckFile: 'german_core_deck.json',
      scenarioFile: 'scenarios/german_scenarios.json',
      ttsLang: 'de-DE',
      pillClass: 'A2-Elementary'
    }
  };

  function getActiveLanguage() {
    return activeLanguage;
  }

  function getLanguageConfig(langKey) {
    return LANGUAGE_CONFIGS[langKey || activeLanguage] || LANGUAGE_CONFIGS.spanish;
  }

  async function loadLanguageCourse(langKey, onComplete) {
    if (!LANGUAGE_CONFIGS[langKey]) langKey = 'spanish';
    activeLanguage = langKey;
    localStorage.setItem('systemalogos_active_language', langKey);

    const config = LANGUAGE_CONFIGS[langKey];
    updateCoursePillUI(config);

    // Re-scope SRS Engine database for this language
    if (window.SRSModule && window.SRSModule.srsEngine) {
      window.SRSModule.srsEngine.setLanguageScope(langKey);
    }

    // Set Audio TTS accent
    if (window.AudioModule) {
      window.AudioModule.setTargetLanguage(config.ttsLang);
    }

    try {
      let resp = await fetch(config.deckFile);
      if (!resp.ok && config.fallbackDeckFile) {
        resp = await fetch(config.fallbackDeckFile);
      }
      if (!resp.ok) throw new Error(`HTTP error ${resp.status}`);
      const deckData = await resp.json();

      if (window.MainModule) {
        window.MainModule.loadDeck(deckData);
      }

      // Load Scenarios for active language
      if (window.ScenarioModule && window.ScenarioModule.loadScenariosForLanguage) {
        await window.ScenarioModule.loadScenariosForLanguage(langKey);
      }

      // Dispatch dynamic custom event to refresh all active UI views instantaneously
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { langKey, config, deckData }
      }));

      if (typeof onComplete === 'function') onComplete(deckData);
    } catch (e) {
      console.error(`Could not load deck file ${config.deckFile}:`, e);
      alert("Failed to load language deck. Please check server.");
    }
  }

  function updateCoursePillUI(config) {
    const pill = document.getElementById('active-course-pill');
    const select = document.getElementById('language-course-select');
    const conjTitle = document.getElementById('conj-main-title');
    const progressTitle = document.getElementById('progress-main-title');
    const accentSelect = document.getElementById('accent-filter-select') || document.getElementById('accent-select');

    if (pill) {
      pill.innerHTML = `${config.flag} ${config.name} Course`;
    }
    if (select) {
      select.value = activeLanguage;
    }
    if (conjTitle) {
      conjTitle.textContent = `${config.name} Verb Conjugation Trainer`;
    }
    if (progressTitle) {
      progressTitle.textContent = `${config.flag} ${config.name} Course Mastery & SRS Progress Map`;
    }

    if (accentSelect) {
      const accents = {
        spanish: [
          { val: 'es-MX', label: '🇲🇽 Latin America (Neutral)' },
          { val: 'es-ES', label: '🇪🇸 Spain (Castellano)' }
        ],
        french: [
          { val: 'fr-FR', label: '🇫🇷 France (Standard)' },
          { val: 'fr-CA', label: '🇨🇦 Canada (Québécois)' }
        ],
        german: [
          { val: 'de-DE', label: '🇩🇪 Germany (Standard)' },
          { val: 'de-AT', label: '🇦🇹 Austria (Österreich)' }
        ]
      };
      const list = accents[activeLanguage] || accents.spanish;
      accentSelect.innerHTML = list.map(a => `<option value="${a.val}">${a.label}</option>`).join('');
      accentSelect.value = config.ttsLang;
    }
  }

  window.DeckLoaderModule = {
    getActiveLanguage,
    getLanguageConfig,
    loadLanguageCourse,
    updateCoursePillUI
  };
})(window);
