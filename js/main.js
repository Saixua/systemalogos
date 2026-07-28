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

(function(window) {
  let allCards = [];
  let activeView = 'home-view';
  let currentCategory = 'ALL';
  let currentDifficulty = 'ALL';

  async function init() {
    if (window.AudioModule) window.AudioModule.initAudio();
    if (window.AchievementsModule) {
      window.AchievementsModule.loadAchievementsState();
      window.AchievementsModule.renderAchievementsGrid();
      window.AchievementsModule.loadStreakData(() => {
        updateStreakUI();
      });
    }

    if (window.ScenarioModule) window.ScenarioModule.initScenarios();
    if (window.ConjugationModule) window.ConjugationModule.initConjugations();

    setupEventListeners();
    setupTouchSwiping();

    const activeLang = localStorage.getItem('systemalogos_active_language') || 'spanish';
    if (window.DeckLoaderModule) {
      window.DeckLoaderModule.loadLanguageCourse(activeLang, () => {
        if (window.OnboardingModule) {
          window.OnboardingModule.initOnboardingFlow(() => updateStreakUI());
        }
      });
    } else if (window.DEFAULT_DECK_DATA) {
      loadDeck(window.DEFAULT_DECK_DATA);
    }

    if (window.RoadmapModule) window.RoadmapModule.renderTree();
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
    if (window.RoadmapModule) window.RoadmapModule.renderTree();
  }

  function populateFilterDropdowns(categories) {
    const catSelect = document.getElementById('category-filter-select');
    if (catSelect) {
      const validCats = categories.filter(c => c.cards && c.cards.length > 0 && !c.name.includes('PR/Caribbean') && !c.name.match(/^[🟢🟡🔵🔴]\s*A[12]|B[12]/));
      catSelect.innerHTML = `<option value="ALL">All Categories (${allCards.length} words)</option>` +
        validCats.map(c => `<option value="${c.name}">${c.name} (${c.cards.length})</option>`).join('');
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

    if (window.FlashcardModule) {
      window.FlashcardModule.loadFlashcardQueue(filtered);
    }
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

    const filterBar = document.getElementById('global-filter-bar');
    if (filterBar) {
      if (viewId === 'flashcard-view' || viewId === 'quiz-view') {
        filterBar.style.display = 'flex';
      } else {
        filterBar.style.display = 'none';
      }
    }

    if (viewId === 'home-view' || viewId === 'stats-view' || viewId === 'progress-view') {
      if (window.RoadmapModule) window.RoadmapModule.checkLevelGating(allCards);
      if (window.AchievementsModule) window.AchievementsModule.renderAchievementsGrid();
    }
  }

  window.addEventListener('languageChanged', (e) => {
    currentCategory = 'ALL';
    currentDifficulty = 'ALL';
    const catSelect = document.getElementById('category-filter-select');
    if (catSelect) catSelect.value = 'ALL';

    filterAndLoadQueue();

    if (window.RoadmapModule) window.RoadmapModule.checkLevelGating(allCards);
    if (window.ScenarioModule) window.ScenarioModule.renderCurrentScenarioStep();
    if (window.ConjugationModule) window.ConjugationModule.initConjugations();
    if (window.AchievementsModule) window.AchievementsModule.renderAchievementsGrid();
    switchView(activeView);
  });

  function setupEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (mobileMenuBtn && navbarMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
      });
    }

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchView(btn.dataset.view);
        if (navbarMenu && navbarMenu.classList.contains('open')) {
          navbarMenu.classList.remove('open');
        }
      });
    });

    // Custom Flag Select Logic
    const flagSelectTrigger = document.getElementById('flag-select-trigger');
    const flagSelectOptions = document.getElementById('flag-select-options');
    const currentFlagIcon = document.getElementById('current-flag-icon');
    const currentFlagText = document.getElementById('current-flag-text');

    if (flagSelectTrigger && flagSelectOptions) {
      flagSelectTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        flagSelectOptions.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#custom-flag-select')) {
          flagSelectOptions.classList.remove('open');
        }
      });

      const flagOptions = document.querySelectorAll('.flag-option');
      flagOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          const val = opt.dataset.value;
          const flagUrl = opt.dataset.flag;
          const abbr = opt.dataset.abbr;
          
          if (currentFlagIcon) currentFlagIcon.src = flagUrl;
          if (currentFlagText) currentFlagText.textContent = abbr;
          
          flagSelectOptions.classList.remove('open');
          
          if(window.DeckLoaderModule) {
            window.DeckLoaderModule.loadLanguageCourse(val);
          }
        });
      });
    }

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

    const accentSelect = document.getElementById('accent-filter-select');
    if (accentSelect) {
      accentSelect.addEventListener('change', (e) => {
        if (window.AudioModule) {
          window.AudioModule.setTargetLanguage(e.target.value);
        }
      });
    }

    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
      flashcard.addEventListener('click', (e) => {
        if (!e.target.closest('button') && window.FlashcardModule) {
          window.FlashcardModule.flipFlashcard();
        }
      });
    }

    const fcAudioBtn = document.getElementById('fc-audio-btn');
    if (fcAudioBtn) {
      fcAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.FlashcardModule && window.AudioModule) {
          const queue = window.FlashcardModule.fcQueue;
          const idx = window.FlashcardModule.fcIndex;
          if (queue[idx]) {
            window.AudioModule.speakSpanish(queue[idx].spanish, 'female');
          }
        }
      });
    }

    const srsFailBtn = document.getElementById('srs-fail-btn');
    const srsPassBtn = document.getElementById('srs-pass-btn');

    if (srsFailBtn) {
      srsFailBtn.addEventListener('click', () => {
        if (window.FlashcardModule) window.FlashcardModule.handleSRSGrade(0, updateStreakUI);
      });
    }

    if (srsPassBtn) {
      srsPassBtn.addEventListener('click', () => {
        if (window.FlashcardModule) window.FlashcardModule.handleSRSGrade(4, updateStreakUI);
      });
    }

    const scenarioSendBtn = document.getElementById('scenario-submit-btn') || document.getElementById('scenario-send-btn');
    const scenarioTypeInput = document.getElementById('scenario-type-input');

    if (scenarioSendBtn && scenarioTypeInput) {
      scenarioSendBtn.addEventListener('click', () => {
        const val = scenarioTypeInput.value.trim();
        if (val && window.ScenarioModule) {
          window.ScenarioModule.submitScenarioResponse(val);
          scenarioTypeInput.value = '';
        }
      });

      scenarioTypeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = scenarioTypeInput.value.trim();
          if (val && window.ScenarioModule) {
            window.ScenarioModule.submitScenarioResponse(val);
            scenarioTypeInput.value = '';
          }
        }
      });
    }

    // "I'm stuck (Show 4 Choices)" button
    const stuckBtn = document.getElementById('scenario-stuck-btn');
    if (stuckBtn) {
      stuckBtn.addEventListener('click', () => {
        if (window.ScenarioModule && window.ScenarioModule.showFourChoices) {
          window.ScenarioModule.showFourChoices();
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
      if (activeView === 'flashcard-view' && window.FlashcardModule) {
        if (e.code === 'Space') {
          e.preventDefault();
          window.FlashcardModule.flipFlashcard();
        } else if (e.code === 'ArrowLeft') {
          window.FlashcardModule.handleSRSGrade(0, updateStreakUI);
        } else if (e.code === 'ArrowRight') {
          window.FlashcardModule.handleSRSGrade(4, updateStreakUI);
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
        if (window.FlashcardModule) {
          if (diffX < 0) {
            window.FlashcardModule.handleSRSGrade(0, updateStreakUI);
          } else {
            window.FlashcardModule.handleSRSGrade(4, updateStreakUI);
          }
        }
      }
    }, { passive: true });
  }

  function updateStreakUI() {
    if (window.RoadmapModule) window.RoadmapModule.renderTree();
    if (window.AchievementsModule) {
      window.AchievementsModule.renderAchievementsGrid();
      
      // Update header streak counter
      const valEl = document.getElementById('streak-count-val');
      if (valEl) {
        valEl.textContent = window.AchievementsModule.streakCount;
      }
      
      // Update home page daily goal progress bar
      const studied = window.AchievementsModule.todayStudiedCount;
      const target = window.AchievementsModule.DAILY_GOAL_TARGET;
      const pct = Math.min(100, Math.round((studied / (target || 1)) * 100));
      
      const pctEl = document.getElementById('home-goal-pct');
      const barEl = document.getElementById('home-goal-bar');
      if (pctEl) pctEl.textContent = `${pct}%`;
      if (barEl) barEl.style.width = `${pct}%`;
    }
  }

  function refreshCurrentView() {
    switchView(activeView);
  }

  window.addEventListener('DOMContentLoaded', init);

  window.MainModule = {
    init,
    switchView,
    refreshCurrentView,
    loadDeck,
    filterAndLoadQueue,
    getAllCards: () => allCards
  };
})(window);
