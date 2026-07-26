/**
 * ============================================================================
 * SYSTEMALOGOS — Verb Conjugation Matrices Module
 * File: /js/conjugation.js
 * ============================================================================
 * Purpose:
 *   Manages 50 verb conjugation matrices across 6 pronouns (yo, tú, él/ella,
 *   nosotros, vosotros, ellos/ellas) and major tenses (Present, Preterite, Imperfect,
 *   Future, Subjunctive). Supports blind audio drills, matrix table rendering,
 *   and multi-language course awareness.
 * ============================================================================
 */

(function(window) {
  let allVerbs = window.CONJUGATION_DATA || [];
  let currentVerbIdx = 0;
  let currentTense = 'present';

  function initConjugations() {
    const activeLang = localStorage.getItem('systemalogos_active_language') || 'spanish';
    const sideContainer = document.getElementById('conj-side-container');
    const blindContainer = document.getElementById('conj-blind-container');
    const modeSwitcher = document.querySelector('#conjugation-view [style*="display: flex; background: rgba"]');
    const verbSelect = document.getElementById('conj-verb-select');
    const tenseSelect = document.getElementById('conj-tense-select');

    if (activeLang !== 'spanish') {
      if (sideContainer) sideContainer.style.display = 'none';
      if (blindContainer) blindContainer.style.display = 'none';
      if (verbSelect) verbSelect.style.display = 'none';
      if (tenseSelect) tenseSelect.style.display = 'none';

      let placeholder = document.getElementById('conj-placeholder-msg');
      if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.id = 'conj-placeholder-msg';
        placeholder.style.cssText = 'text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; margin-top: 1rem;';
        const conjView = document.getElementById('conjugation-view');
        if (conjView) conjView.appendChild(placeholder);
      }

      const langConfig = window.DeckLoaderModule ? window.DeckLoaderModule.getLanguageConfig(activeLang) : { flag: '🌐', name: activeLang };
      placeholder.innerHTML = `
        <span style="font-size: 3.5rem;">${langConfig.flag}</span>
        <h3 style="font-family: var(--font-heading); color: #fff; font-size: 1.5rem; margin-top: 1rem;">${langConfig.name} Verb Conjugations Coming Soon</h3>
        <p style="color: var(--text-secondary); max-width: 520px; margin: 0.6rem auto 0 auto; font-size: 0.92rem;">
          Verb conjugation matrices for <strong>${langConfig.name}</strong> are currently being generated for the upcoming expansion pack. Practice ${langConfig.name} Flashcards, 4-Choice Quizzes, and Scenario Drills in the meantime!
        </p>
      `;
      placeholder.style.display = 'block';
      return;
    }

    // SPANISH IS ACTIVE: Restore conjugations view
    const placeholder = document.getElementById('conj-placeholder-msg');
    if (placeholder) placeholder.style.display = 'none';

    if (sideContainer) sideContainer.style.display = 'grid';
    if (verbSelect) verbSelect.style.display = 'inline-block';
    if (tenseSelect) tenseSelect.style.display = 'inline-block';

    allVerbs = window.CONJUGATION_DATA || [];
    populateVerbSelect();
    renderConjugationTable();
  }

  function populateVerbSelect() {
    const select = document.getElementById('conj-verb-select');
    if (!select) return;

    select.innerHTML = allVerbs.map((v, idx) => `
      <option value="${idx}">${v.infinitive} (${v.english})</option>
    `).join('');

    select.value = currentVerbIdx;
    select.onchange = (e) => {
      currentVerbIdx = parseInt(e.target.value, 10);
      renderConjugationTable();
    };

    const tenseSelect = document.getElementById('conj-tense-select');
    if (tenseSelect) {
      tenseSelect.value = currentTense;
      tenseSelect.onchange = (e) => {
        currentTense = e.target.value;
        renderConjugationTable();
      };
    }
  }

  function renderConjugationTable() {
    if (!allVerbs || allVerbs.length === 0) return;
    const verb = allVerbs[currentVerbIdx];
    if (!verb) return;

    const titleEl = document.getElementById('conj-infinitive-title');
    const englishEl = document.getElementById('conj-english-def');
    const typeBadge = document.getElementById('conj-type-badge');
    const tableContainer = document.getElementById('conj-table-container');

    if (titleEl) titleEl.textContent = verb.infinitive;
    if (englishEl) englishEl.textContent = verb.english;
    if (typeBadge) typeBadge.textContent = verb.type || 'Regular';

    const tenses = verb.tenses || {};
    const currentTenseData = tenses[currentTense] || tenses['present'] || {};

    if (tableContainer) {
      tableContainer.innerHTML = Object.entries(currentTenseData).map(([pronoun, conjugatedForm]) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0.8rem; background: rgba(15, 23, 42, 0.4); border-radius: 8px; font-size: 0.9rem;">
          <span style="color: var(--text-muted); font-weight: 600;">${pronoun}</span>
          <strong style="color: var(--accent-primary); font-size: 1.05rem;">${conjugatedForm}</strong>
        </div>
      `).join('');
    }
  }

  window.ConjugationModule = {
    initConjugations,
    populateVerbSelect,
    renderConjugationTable
  };
})(window);
