/**
 * ============================================================================
 * SYSTEMALOGOS — Core Entry Point & View Router
 * File: /js/main.js
 * ============================================================================
 * Purpose:
 *   Main application entry point. Coordinates module initialization, handles
 *   view navigation router (.view section switching), touch gesture listeners,
 *   filter dropdown bindings, category drilling, and session persistence.
 * ============================================================================
 */

import { initAudio, setSpeechEnabled, setSpeechLang, cycleSpeechRate, speakSpanish } from './audio.js';
import { srsEngine } from './srs_engine.js';
import { achievements, loadStreakData, renderAchievementsGrid, loadAchievementsState } from './achievements.js';
import { initOnboardingFlow, triggerConfetti } from './onboarding.js';
import { checkLevelGating } from './roadmap.js';
import {
  loadFlashcardQueue,
  flipFlashcard,
  handleSRSGrade,
  fcQueue,
  fcIndex,
  setBlindAudioMode,
  isBlindAudioMode
} from './flashcard.js';
import { initScenarios, submitScenarioResponse } from './scenario.js';
import { initConjugations } from './conjugation.js';

let allCards = [];
let activeView = 'home-view';
let currentCategory = 'ALL';
let currentDifficulty = 'ALL';

const SESSION_KEY = 'systemalogos_session_v1';

async function init() {
  initAudio();
  loadAchievementsState();
  renderAchievementsGrid();

  loadStreakData(() => {
    checkLevelGating(allCards);
  });

  initScenarios();
  initConjugations();

  if (window.DEFAULT_DECK_DATA) {
    loadDeck(window.DEFAULT_DECK_DATA);
  } else {
    try {
      const response = await fetch('spanish_core_deck.json');
      if (response.ok) {
        const deckData = await response.json();
        loadDeck(deckData);
      }
    } catch (e) {
      console.warn("Could not fetch spanish_core_deck.json:", e);
    }
  }

  setupEventListeners();
  setupTouchSwiping();
  initOnboardingFlow(() => updateStreakUI());
  checkLevelGating(allCards);
  switchView(activeView);
}

function loadDeck(deckData) {
  allCards = [];
  if (deckData && deckData.categories) {
    deckData.categories.forEach(cat => {
      if (cat.cards) {
        cat.cards.forEach(c => {
          allCards.push({
            ...c,
            category: cat.name
          });
        });
      }
    });
  }

  populateFilterDropdowns(deckData.categories || []);
  filterAndLoadQueue();
  checkLevelGating(allCards);
}

function populateFilterDropdowns(categories) {
  const catSelect = document.getElementById('category-filter-select');
  if (catSelect) {
    catSelect.innerHTML = `<option value="ALL">All Categories (${allCards.length} words)</option>` +
      categories.map(c => `<option value="${c.name}">${c.name} (${c.cards ? c.cards.length : 0})</option>`).join('');
    catSelect.value = currentCategory;
  }
}

function filterAndLoadQueue() {
  let filtered = [...allCards];

  if (currentCategory !== 'ALL') {
    filtered = filtered.filter(c => c.category === currentCategory);
  }

  if (currentDifficulty !== 'ALL') {
    filtered = filtered.filter(c => {
      const cleanDiff = c.difficulty ? c.difficulty.replace(/^[🟢🟡🔵🔴]\s*/, '') : '';
      return cleanDiff.toLowerCase().includes(currentDifficulty.toLowerCase()) ||
             (c.difficulty && c.difficulty.toLowerCase().includes(currentDifficulty.toLowerCase()));
    });
  }

  loadFlashcardQueue(filtered);
}

function switchView(viewId) {
  activeView = viewId;
  const views = document.querySelectorAll('.view');
  const navBtns = document.querySelectorAll('.nav-btn');

  views.forEach(v => {
    if (v.id === viewId) v.classList.add('active');
    else v.classList.remove('active');
  });

  navBtns.forEach(btn => {
    if (btn.dataset.view === viewId) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  if (viewId === 'home-view') {
    checkLevelGating(allCards);
    renderAchievementsGrid();
  }
}

function setupEventListeners() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.dataset.view);
    });
  });

  const catSelect = document.getElementById('category-filter-select');
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      filterAndLoadQueue();
    });
  }

  const diffSelect = document.getElementById('difficulty-filter-select');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      currentDifficulty = e.target.value;
      filterAndLoadQueue();
    });
  }

  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        flipFlashcard();
      }
    });
  }

  const fcAudioBtn = document.getElementById('fc-audio-btn');
  if (fcAudioBtn) {
    fcAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (fcQueue[fcIndex]) {
        speakSpanish(fcQueue[fcIndex].spanish, 'female');
      }
    });
  }

  const srsFailBtn = document.getElementById('srs-fail-btn');
  const srsPassBtn = document.getElementById('srs-pass-btn');

  if (srsFailBtn) {
    srsFailBtn.addEventListener('click', () => {
      handleSRSGrade(0, updateStreakUI);
    });
  }

  if (srsPassBtn) {
    srsPassBtn.addEventListener('click', () => {
      handleSRSGrade(4, updateStreakUI);
    });
  }

  const scenarioSendBtn = document.getElementById('scenario-send-btn');
  const scenarioTypeInput = document.getElementById('scenario-type-input');

  if (scenarioSendBtn && scenarioTypeInput) {
    scenarioSendBtn.addEventListener('click', () => {
      const val = scenarioTypeInput.value.trim();
      if (val) {
        submitScenarioResponse(val);
        scenarioTypeInput.value = '';
      }
    });

    scenarioTypeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = scenarioTypeInput.value.trim();
        if (val) {
          submitScenarioResponse(val);
          scenarioTypeInput.value = '';
        }
      }
    });
  }

  const levelSelectBtns = document.querySelectorAll('.level-select-btn');
  levelSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentDifficulty = btn.dataset.level || 'ALL';
      if (diffSelect) diffSelect.value = currentDifficulty;
      filterAndLoadQueue();
      switchView('flashcard-view');
    });
  });

  const startDailyBtn = document.getElementById('start-daily-session-btn');
  if (startDailyBtn) {
    startDailyBtn.addEventListener('click', () => {
      switchView('flashcard-view');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (activeView === 'flashcard-view') {
      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowLeft') {
        handleSRSGrade(0, updateStreakUI);
      } else if (e.code === 'ArrowRight') {
        handleSRSGrade(4, updateStreakUI);
      }
    }
  });
}

function setupTouchSwiping() {
  const container = document.getElementById('flashcard-container');
  if (!container) return;

  let startX = 0;
  let startY = 0;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        handleSRSGrade(0, updateStreakUI);
      } else {
        handleSRSGrade(4, updateStreakUI);
      }
    }
  }, { passive: true });
}

function updateStreakUI() {
  checkLevelGating(allCards);
  renderAchievementsGrid();
}

window.addEventListener('DOMContentLoaded', init);
