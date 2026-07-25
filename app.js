/**
 * Anti-Englishism Modular SRS & Flashcard Application Controller — LingoPulse
 */

document.addEventListener('DOMContentLoaded', () => {
  // Core SRS Engine Instance
  const srsEngine = new window.SRSEngine('spanish_srs_data');
  const SESSION_KEY = 'lingopulse_app_session_state';
  const STREAK_KEY = 'lingopulse_daily_streak_data';

  // Application State
  let currentDeck = null;
  let allCards = [];
  let currentCategory = 'ALL';
  let currentDifficulty = 'ALL';
  let includeRegionalisms = false;
  let activeView = 'flashcard-view';

  // Audio Settings & Speed Control
  let speechEnabled = true;
  let speechLang = 'es-MX';
  let speechRate = 1.0;
  let blindAudioMode = false;
  let availableVoices = [];

  // Speech Recognition (Voice Input) State
  let recognition = null;
  let isListening = false;

  // Daily Streak & Goal State
  let streakCount = 1;
  let todayStudiedCount = 0;
  let lastStudyDateStr = new Date().toISOString().slice(0, 10);
  const DAILY_GOAL_TARGET = 20;

  // Scenario State
  let allScenarios = window.CONVERSATIONAL_SCENARIOS || [];
  let currentScenarioIdx = 0;
  let currentScenario = null;
  let currentScenarioStepIdx = 0;

  // Conjugation State
  let allVerbs = window.CONJUGATION_VERBS || [];
  let currentVerbIdx = 0;
  let currentTense = 'presente';
  let conjDrillTotal = 0;
  let conjDrillCorrect = 0;

  // Flashcard Session State
  let fcQueue = [];
  let fcIndex = 0;
  let fcIsFlipped = false;
  let fcSessionStudied = 0;
  let isBlindRevealed = false;

  // Quiz Session State
  let quizCurrentCard = null;
  let quizOptions = [];
  let quizTotalAsked = 0;
  let quizCorrectCount = 0;

  // DOM Elements
  const navButtons = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');
  const categoryFilterSelect = document.getElementById('category-filter-select');
  const difficultyFilterSelect = document.getElementById('difficulty-filter-select');
  const regionalToggleCheckbox = document.getElementById('regional-toggle-checkbox');
  const accentFilterSelect = document.getElementById('accent-filter-select');
  const audioSpeedBtn = document.getElementById('audio-speed-btn');
  const speedValLabel = document.getElementById('speed-val-label');
  const blindAudioCheckbox = document.getElementById('blind-audio-checkbox');
  const streakCountVal = document.getElementById('streak-count-val');
  const fcDailyGoalCount = document.getElementById('fc-daily-goal-count');

  // Flashcard DOM
  const flashcard = document.getElementById('flashcard');
  const fcWrapper = document.getElementById('flashcard-container');
  const fcFrontText = document.getElementById('fc-front-text');
  const fcBackText = document.getElementById('fc-back-text');
  const fcBackSpanishRef = document.getElementById('fc-back-spanish-ref');
  const fcCategoryTag = document.getElementById('fc-category-tag');
  const fcDiffTag = document.getElementById('fc-diff-tag');
  const fcTypeTag = document.getElementById('fc-type-tag');
  const fcBackCatTag = document.getElementById('fc-back-category-tag');
  const fcBackDiffTag = document.getElementById('fc-back-diff-tag');
  const fcBackTypeTag = document.getElementById('fc-back-type-tag');
  const fcAudioBtn = document.getElementById('fc-audio-btn');
  const fcDueCount = document.getElementById('fc-due-count');
  const fcSessionCount = document.getElementById('fc-session-count');
  const fcProgressFill = document.getElementById('fc-progress-fill');
  const fcFrontHint = document.getElementById('fc-front-hint');
  const srsRatingButtons = document.querySelectorAll('.srs-btn');

  // Quiz DOM
  const quizTargetWord = document.getElementById('quiz-target-word');
  const quizCategoryTag = document.getElementById('quiz-category-tag');
  const quizDiffTag = document.getElementById('quiz-diff-tag');
  const quizAudioBtn = document.getElementById('quiz-audio-btn');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizScoreVal = document.getElementById('quiz-score-val');
  const quizAccuracyVal = document.getElementById('quiz-accuracy-val');
  const quizProgressFill = document.getElementById('quiz-progress-fill');

  // Scenario DOM
  const scenarioUnitSelect = document.getElementById('scenario-unit-select');
  const scenarioDesc = document.getElementById('scenario-desc');
  const scenarioStepBadge = document.getElementById('scenario-step-badge');
  const scenarioNpcSpeaker = document.getElementById('scenario-npc-speaker');
  const scenarioNpcLine = document.getElementById('scenario-npc-line');
  const scenarioNpcTranslation = document.getElementById('scenario-npc-translation');
  const scenarioUserTask = document.getElementById('scenario-user-task');
  const scenarioTypeInput = document.getElementById('scenario-type-input');
  const scenarioMicBtn = document.getElementById('scenario-mic-btn');
  const micLabelText = document.getElementById('mic-label-text');
  const scenarioSubmitBtn = document.getElementById('scenario-submit-btn');
  const scenarioStuckBtn = document.getElementById('scenario-stuck-btn');
  const scenarioTypingFeedback = document.getElementById('scenario-typing-feedback');
  const scenarioOptionsContainer = document.getElementById('scenario-options-container');
  const scenarioExplanationCard = document.getElementById('scenario-explanation-card');
  const scenarioAudioBtn = document.getElementById('scenario-audio-btn');
  const scenarioPrevBtn = document.getElementById('scenario-prev-btn');
  const scenarioNextBtn = document.getElementById('scenario-next-btn');

  // Conjugation DOM
  const conjVerbSelect = document.getElementById('conj-verb-select');
  const conjTenseSelect = document.getElementById('conj-tense-select');
  const conjInfinitiveTitle = document.getElementById('conj-infinitive-title');
  const conjEnglishDef = document.getElementById('conj-english-def');
  const conjTypeBadge = document.getElementById('conj-type-badge');
  const conjTableContainer = document.getElementById('conj-table-container');
  const conjDrillScore = document.getElementById('conj-drill-score');
  const conjDrillPrompt = document.getElementById('conj-drill-prompt');
  const conjDrillTense = document.getElementById('conj-drill-tense');
  const conjDrillOptionsContainer = document.getElementById('conj-drill-options-container');
  const conjDrillFeedback = document.getElementById('conj-drill-feedback');
  const conjNextDrillBtn = document.getElementById('conj-next-drill-btn');

  // Stats DOM
  const statTotalWords = document.getElementById('stat-total-words');
  const statRegionalWords = document.getElementById('stat-regional-words');
  const statMasteredWords = document.getElementById('stat-mastered-words');
  const statLearnedWords = document.getElementById('stat-learned-words');
  const statDueWords = document.getElementById('stat-due-words');
  const exportBtn = document.getElementById('export-srs-btn');
  const importBtn = document.getElementById('import-srs-btn');
  const importFileInput = document.getElementById('import-srs-file');

  // Modal DOM
  const uploadDeckNavBtn = document.getElementById('upload-deck-btn');
  const deckModal = document.getElementById('deck-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const customDeckInput = document.getElementById('custom-deck-file-input');
  const loadDefaultDeckBtn = document.getElementById('load-default-deck-btn');
  const audioToggleBtn = document.getElementById('audio-toggle-btn');

  // ------------------------------------------------------------------
  // DAILY STREAK & GOAL TRACKER
  // ------------------------------------------------------------------
  function loadStreakData() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const dataStr = localStorage.getItem(STREAK_KEY);
      if (dataStr) {
        const data = JSON.parse(dataStr);
        if (data.lastDate === today) {
          streakCount = data.streak || 1;
          todayStudiedCount = data.todayCount || 0;
        } else {
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (data.lastDate === yesterday) {
            streakCount = data.streak || 1;
          } else {
            streakCount = 1;
          }
          todayStudiedCount = 0;
        }
      }
      lastStudyDateStr = today;
      updateStreakUI();
    } catch (e) {
      console.warn("Could not load streak data:", e);
    }
  }

  function registerCardStudied() {
    todayStudiedCount++;
    const today = new Date().toISOString().slice(0, 10);
    try {
      localStorage.setItem(STREAK_KEY, JSON.stringify({
        lastDate: today,
        streak: streakCount,
        todayCount: todayStudiedCount
      }));
    } catch (e) {}
    updateStreakUI();
  }

  function updateStreakUI() {
    if (streakCountVal) streakCountVal.textContent = streakCount;
    if (fcDailyGoalCount) fcDailyGoalCount.textContent = `${todayStudiedCount} / ${DAILY_GOAL_TARGET}`;
  }

  // ------------------------------------------------------------------
  // SESSION PERSISTENCE
  // ------------------------------------------------------------------
  function saveSessionState() {
    try {
      const state = {
        activeView,
        currentCategory,
        currentDifficulty,
        includeRegionalisms,
        speechLang,
        speechRate,
        blindAudioMode,
        fcIndex,
        currentScenarioIdx,
        currentScenarioStepIdx,
        currentVerbIdx,
        currentTense
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save session state:", e);
    }
  }

  function loadSessionState() {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not load session state:", e);
    }
    return null;
  }

  // ------------------------------------------------------------------
  // VOICE INITIALIZATION & SPEECH RECOGNITION (VOICE INPUT)
  // ------------------------------------------------------------------
  function updateVoices() {
    if ('speechSynthesis' in window) {
      availableVoices = window.speechSynthesis.getVoices();
    }
  }
  updateVoices();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }

  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition API not supported in this browser.");
      return null;
    }
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = speechLang;
    return rec;
  }

  function toggleVoiceInput() {
    if (!recognition) {
      recognition = initSpeechRecognition();
    }

    if (!recognition) {
      alert("Voice Recognition is not supported in this browser. Please use Chrome, Edge, or Safari on desktop or mobile.");
      return;
    }

    if (isListening) {
      recognition.stop();
      isListening = false;
      micLabelText.textContent = "Speak";
      scenarioMicBtn.style.background = "rgba(234, 88, 12, 0.2)";
      return;
    }

    recognition.lang = speechLang;
    isListening = true;
    micLabelText.textContent = "Listening... 🔴";
    scenarioMicBtn.style.background = "rgba(239, 68, 68, 0.4)";
    scenarioTypingFeedback.style.color = "#fb923c";
    scenarioTypingFeedback.textContent = "🎙️ Speak your Spanish response now...";

    recognition.start();

    recognition.onresult = (event) => {
      isListening = false;
      micLabelText.textContent = "Speak";
      scenarioMicBtn.style.background = "rgba(234, 88, 12, 0.2)";

      const transcript = event.results[0][0].transcript;
      scenarioTypeInput.value = transcript;
      checkTypingAnswer();
    };

    recognition.onerror = (event) => {
      isListening = false;
      micLabelText.textContent = "Speak";
      scenarioMicBtn.style.background = "rgba(234, 88, 12, 0.2)";
      scenarioTypingFeedback.style.color = "#f87171";
      scenarioTypingFeedback.textContent = `⚠️ Voice error: ${event.error}. Try typing below.`;
    };

    recognition.onend = () => {
      isListening = false;
      micLabelText.textContent = "Speak";
      scenarioMicBtn.style.background = "rgba(234, 88, 12, 0.2)";
    };
  }

  // ------------------------------------------------------------------
  // 1. INITIALIZATION & DECK LOADING
  // ------------------------------------------------------------------
  async function init() {
    setupEventListeners();
    loadStreakData();

    const savedSession = loadSessionState();
    if (savedSession) {
      if (savedSession.currentCategory) currentCategory = savedSession.currentCategory;
      if (savedSession.currentDifficulty) currentDifficulty = savedSession.currentDifficulty;
      if (savedSession.includeRegionalisms !== undefined) includeRegionalisms = savedSession.includeRegionalisms;
      if (savedSession.speechLang) speechLang = savedSession.speechLang;
      if (savedSession.speechRate !== undefined) speechRate = savedSession.speechRate;
      if (savedSession.blindAudioMode !== undefined) blindAudioMode = savedSession.blindAudioMode;
      if (savedSession.fcIndex !== undefined) fcIndex = savedSession.fcIndex;
      if (savedSession.currentScenarioIdx !== undefined) currentScenarioIdx = savedSession.currentScenarioIdx;
      if (savedSession.currentScenarioStepIdx !== undefined) currentScenarioStepIdx = savedSession.currentScenarioStepIdx;
      if (savedSession.currentVerbIdx !== undefined) currentVerbIdx = savedSession.currentVerbIdx;
      if (savedSession.currentTense) currentTense = savedSession.currentTense;
      if (savedSession.activeView) activeView = savedSession.activeView;

      regionalToggleCheckbox.checked = includeRegionalisms;
      difficultyFilterSelect.value = currentDifficulty;
      if (accentFilterSelect) accentFilterSelect.value = speechLang;
      if (speedValLabel) speedValLabel.textContent = `${speechRate}x`;
      if (blindAudioCheckbox) blindAudioCheckbox.checked = blindAudioMode;
      if (conjTenseSelect) conjTenseSelect.value = currentTense;
    }

    initScenarios();
    initConjugations();

    if (window.DEFAULT_DECK_DATA) {
      loadDeck(window.DEFAULT_DECK_DATA);
    } else {
      try {
        const response = await fetch('spanish_core_deck.json');
        if (!response.ok) throw new Error("Could not fetch spanish_core_deck.json");
        const deckData = await response.json();
        loadDeck(deckData);
      } catch (err) {
        console.error("Failed loading default deck:", err);
      }
    }

    switchView(activeView);
  }

  function loadDeck(deckData) {
    currentDeck = deckData;
    allCards = [];

    if (deckData.categories) {
      deckData.categories.forEach(cat => {
        cat.cards.forEach(card => {
          allCards.push(card);
        });
      });
    }

    renderCategoryDropdown();
    resetStudySessions();
    updateStatsView();
  }

  function getFilteredCards() {
    let pool = allCards;
    if (!includeRegionalisms && currentCategory !== 'Regionalisms & Dialectal Variations') {
      pool = pool.filter(c => !c.isRegionalism);
    }
    return pool;
  }

  function renderCategoryDropdown() {
    if (categoryFilterSelect) {
      categoryFilterSelect.innerHTML = '<option value="ALL">All Universal Spanish</option>';
      if (currentDeck && currentDeck.categories) {
        currentDeck.categories.forEach(cat => {
          if (cat.isRegional && !includeRegionalisms) return;
          const opt = document.createElement('option');
          opt.value = cat.name;
          opt.textContent = `${cat.name} (${cat.cardCount} words)`;
          categoryFilterSelect.appendChild(opt);
        });
      }
      categoryFilterSelect.value = currentCategory;
    }
  }

  function selectCategory(categoryName, resetLevelFilter = false) {
    currentCategory = categoryName;

    if (resetLevelFilter) {
      currentDifficulty = 'ALL';
      difficultyFilterSelect.value = 'ALL';
    }

    if (categoryFilterSelect) {
      categoryFilterSelect.value = categoryName;
    }

    saveSessionState();
    resetStudySessions();
  }

  function resetStudySessions() {
    const activePool = getFilteredCards();

    const queueData = srsEngine.getStudyQueue(activePool, currentCategory, currentDifficulty);

    if (queueData.dueCards && queueData.dueCards.length > 0) {
      fcQueue = queueData.dueCards;
    } else {
      let categoryCards = activePool;
      if (currentCategory !== 'ALL') {
        categoryCards = categoryCards.filter(c => c.category === currentCategory);
      }
      if (currentDifficulty !== 'ALL') {
        categoryCards = categoryCards.filter(c => c.difficulty === currentDifficulty);
      }

      if (categoryCards.length === 0 && currentCategory !== 'ALL') {
        categoryCards = activePool.filter(c => c.category === currentCategory);
      }

      fcQueue = srsEngine.shuffleArray([...categoryCards]);
    }

    fcIndex = 0;
    fcSessionStudied = 0;
    fcIsFlipped = false;

    renderCurrentFlashcard();
    renderNextQuizQuestion();
    updateStatsView();
  }

  // ------------------------------------------------------------------
  // 2. CONJUGATION TRAINER LOGIC
  // ------------------------------------------------------------------
  function initConjugations() {
    conjVerbSelect.innerHTML = '';

    const categories = [
      { name: "🟢 3 MAIN REGULAR TYPES — -AR VERBS", match: "Regular -AR" },
      { name: "🟡 3 MAIN REGULAR TYPES — -ER VERBS", match: "Regular -ER" },
      { name: "🔵 3 MAIN REGULAR TYPES — -IR VERBS", match: "Regular -IR" },
      { name: "🔴 ODD CASES & IRREGULAR VERBS", match: "Irregular / Odd Cases" }
    ];

    categories.forEach(cat => {
      const group = document.createElement('optgroup');
      group.label = cat.name;

      allVerbs.forEach((v, idx) => {
        if (v.category === cat.match) {
          const opt = document.createElement('option');
          opt.value = idx;
          opt.textContent = `${v.infinitive.toUpperCase()} (${v.english})`;
          group.appendChild(opt);
        }
      });

      if (group.children.length > 0) {
        conjVerbSelect.appendChild(group);
      }
    });

    if (allVerbs.length > 0) {
      if (currentVerbIdx >= allVerbs.length) currentVerbIdx = 0;
      conjVerbSelect.value = currentVerbIdx;
      renderConjugationTable();
      renderNextConjugationDrill(currentVerbIdx);
    }

    conjVerbSelect.addEventListener('change', (e) => {
      currentVerbIdx = parseInt(e.target.value, 10);
      saveSessionState();
      renderConjugationTable();
      renderNextConjugationDrill(currentVerbIdx);
    });

    conjTenseSelect.addEventListener('change', (e) => {
      currentTense = e.target.value;
      saveSessionState();
      renderConjugationTable();
      renderNextConjugationDrill(currentVerbIdx);
    });

    conjNextDrillBtn.addEventListener('click', () => {
      renderNextConjugationDrill(currentVerbIdx);
    });
  }

  function renderConjugationTable() {
    const verb = allVerbs[currentVerbIdx];
    if (!verb) return;

    conjVerbSelect.value = currentVerbIdx;
    conjInfinitiveTitle.textContent = verb.infinitive.charAt(0).toUpperCase() + verb.infinitive.slice(1);
    conjEnglishDef.textContent = verb.english;
    conjTypeBadge.textContent = `${verb.category} • ${verb.type}`;

    conjTableContainer.innerHTML = '';
    const matrix = verb.conjugations[currentTense] || verb.conjugations['presente'];

    const pronounLabels = {
      "yo": "Yo (I)",
      "tú": "Tú (You info)",
      "él/ella/usted": "Él / Ella / Usted (He/She/You form)",
      "nosotros": "Nosotros (We)",
      "vosotros": "Vosotros (You all ES)",
      "ellos/ellas/ustedes": "Ellos / Ellas / Ustedes (They/You all)"
    };

    Object.keys(matrix).forEach(pronounKey => {
      const entry = matrix[pronounKey];
      const esWord = typeof entry === 'string' ? entry : entry.es;
      const enMeaning = typeof entry === 'string' ? '' : entry.en;

      const row = document.createElement('div');
      row.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 12px;";

      row.innerHTML = `
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; display: block;">${pronounLabels[pronounKey]}</span>
          <strong style="font-size: 1.1rem; color: var(--accent-primary);">${esWord}</strong>
          ${enMeaning ? `<span style="font-size: 0.83rem; color: var(--text-muted); margin-left: 0.6rem; font-style: italic;">— "${enMeaning}"</span>` : ''}
        </div>
        <button class="audio-btn" style="width: 32px; height: 32px; font-size: 0.85rem;" title="Listen">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      `;

      row.querySelector('.audio-btn').addEventListener('click', () => {
        if (speechEnabled) speakSpanish(esWord, 'female');
      });

      conjTableContainer.appendChild(row);
    });
  }

  function getConjugatedString(entry) {
    return typeof entry === 'string' ? entry : entry.es;
  }

  function renderNextConjugationDrill(overrideVerbIdx = null) {
    if (allVerbs.length === 0) return;

    conjDrillFeedback.style.display = 'none';
    conjNextDrillBtn.style.display = 'none';

    if (overrideVerbIdx !== null && overrideVerbIdx !== undefined) {
      currentVerbIdx = overrideVerbIdx;
    } else {
      currentVerbIdx = Math.floor(Math.random() * allVerbs.length);
    }

    renderConjugationTable();

    const verb = allVerbs[currentVerbIdx];
    const currentMatrix = verb.conjugations[currentTense] || verb.conjugations['presente'];
    const altTenseKey = currentTense === 'presente' ? 'pretérito' : 'presente';
    const altMatrix = verb.conjugations[altTenseKey] || {};

    const pronouns = Object.keys(currentMatrix);
    const targetPronounKey = pronouns[Math.floor(Math.random() * pronouns.length)];
    const targetEntry = currentMatrix[targetPronounKey];
    const targetAnswer = getConjugatedString(targetEntry);
    const targetMeaning = typeof targetEntry === 'string' ? '' : targetEntry.en;

    const pronounDisplay = {
      "yo": "Yo",
      "tú": "Tú",
      "él/ella/usted": "Él / Ella / Usted",
      "nosotros": "Nosotros",
      "vosotros": "Vosotros",
      "ellos/ellas/ustedes": "Ellos / Ellas / Ustedes"
    }[targetPronounKey];

    conjDrillPrompt.textContent = `${verb.infinitive.toUpperCase()} (${pronounDisplay})`;
    conjDrillTense.textContent = `Type: ${verb.category} • Tense: ${currentTense.charAt(0).toUpperCase() + currentTense.slice(1)}`;

    const sameVerbForms = [];
    Object.values(currentMatrix).forEach(f => {
      const s = getConjugatedString(f);
      if (s !== targetAnswer) sameVerbForms.push(s);
    });
    if (altMatrix) {
      Object.values(altMatrix).forEach(f => {
        const s = getConjugatedString(f);
        if (s !== targetAnswer) sameVerbForms.push(s);
      });
    }

    srsEngine.shuffleArray(sameVerbForms);
    const distractors = [];
    const distractorSet = new Set();

    for (let f of sameVerbForms) {
      if (!distractorSet.has(f)) {
        distractorSet.add(f);
        distractors.push(f);
      }
      if (distractors.length === 3) break;
    }

    const options = [targetAnswer, ...distractors];
    srsEngine.shuffleArray(options);

    conjDrillOptionsContainer.innerHTML = '';
    const optionKeys = ['A', 'B', 'C', 'D'];

    options.forEach((optText, idx) => {
      const card = document.createElement('div');
      card.className = 'option-card';
      card.innerHTML = `
        <div class="option-key">${optionKeys[idx]}</div>
        <div class="option-text">${optText}</div>
      `;

      card.addEventListener('click', () => {
        conjDrillTotal++;
        const isCorrect = optText === targetAnswer;

        if (isCorrect) {
          conjDrillCorrect++;
          card.classList.add('correct');
          if (speechEnabled) speakSpanish(targetAnswer, 'male');

          conjDrillFeedback.style.display = 'block';
          conjDrillFeedback.style.borderColor = 'rgba(52, 211, 153, 0.4)';
          conjDrillFeedback.style.color = '#34d399';
          conjDrillFeedback.innerHTML = `<strong>✓ Correct!</strong> '${targetAnswer}' = "${targetMeaning}" (${pronounDisplay} form of <em>${verb.infinitive}</em> in ${currentTense}).`;
        } else {
          card.classList.add('incorrect');
          conjDrillFeedback.style.display = 'block';
          conjDrillFeedback.style.borderColor = 'rgba(248, 113, 113, 0.4)';
          conjDrillFeedback.style.color = '#f87171';
          conjDrillFeedback.innerHTML = `<strong>⚠️ Incorrect.</strong> The correct form for ${pronounDisplay} is <strong>${targetAnswer}</strong> ("${targetMeaning}").`;

          document.querySelectorAll('#conj-drill-options-container .option-card').forEach(c => {
            if (c.querySelector('.option-text').textContent === targetAnswer) {
              c.classList.add('correct');
            }
          });
        }

        conjDrillScore.textContent = `Score: ${conjDrillCorrect} / ${conjDrillTotal}`;
        document.querySelectorAll('#conj-drill-options-container .option-card').forEach(c => c.style.pointerEvents = 'none');
        conjNextDrillBtn.style.display = 'flex';
      });

      conjDrillOptionsContainer.appendChild(card);
    });
  }

  // ------------------------------------------------------------------
  // 3. SCENARIO SIMULATOR LOGIC
  // ------------------------------------------------------------------
  function initScenarios() {
    scenarioUnitSelect.innerHTML = '';
    allScenarios.forEach((sc, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = sc.title;
      scenarioUnitSelect.appendChild(opt);
    });

    if (allScenarios.length > 0) {
      if (currentScenarioIdx >= allScenarios.length) currentScenarioIdx = 0;
      scenarioUnitSelect.value = currentScenarioIdx;
      loadScenario(currentScenarioIdx, false);
    }

    scenarioUnitSelect.addEventListener('change', (e) => {
      const idx = parseInt(e.target.value, 10);
      loadScenario(idx, true);
    });
  }

  function loadScenario(idx, resetStep = true) {
    currentScenarioIdx = idx;
    currentScenario = allScenarios[idx];
    if (resetStep) currentScenarioStepIdx = 0;
    scenarioUnitSelect.value = idx;
    scenarioDesc.textContent = currentScenario.description;
    saveSessionState();
    renderScenarioStep();
  }

  function loadNextScenarioUnit() {
    if (currentScenarioIdx < allScenarios.length - 1) {
      loadScenario(currentScenarioIdx + 1, true);
    } else {
      loadScenario(0, true);
    }
  }

  function getSpeakerGender(speakerName) {
    const s = (speakerName || '').toLowerCase();
    if (s.includes('woman') || s.includes('señorita') || s.includes('senorita') || s.includes('chica') || s.includes('mujer') || s.includes('lady')) {
      return 'female';
    }
    return 'male';
  }

  function renderScenarioStep() {
    const isFinished = !currentScenario || !currentScenario.steps[currentScenarioStepIdx];

    if (isFinished) {
      const nextUnitTitle = (currentScenarioIdx < allScenarios.length - 1) 
        ? allScenarios[currentScenarioIdx + 1].title 
        : allScenarios[0].title;

      scenarioStepBadge.textContent = "Completed 🎉";
      scenarioNpcSpeaker.textContent = "Scenario Finished";
      scenarioNpcLine.textContent = "¡Excelente trabajo!";
      scenarioNpcTranslation.textContent = "You completed all conversational turns in this unit.";

      scenarioUserTask.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; margin-top: 0.5rem;">
          <span style="font-size: 0.95rem; color: var(--text-primary);">Ready for the next lesson in the series?</span>
          <button class="primary-btn" id="scenario-next-unit-btn" style="background: linear-gradient(135deg, var(--srs-easy), #059669); font-size: 1.05rem; padding: 0.9rem 1.8rem;">
            <i class="fa-solid fa-circle-play"></i> Start ${nextUnitTitle}
          </button>
        </div>
      `;

      document.getElementById('scenario-next-unit-btn').addEventListener('click', loadNextScenarioUnit);

      document.getElementById('scenario-typing-container').style.display = 'none';
      scenarioOptionsContainer.style.display = 'none';
      scenarioExplanationCard.style.display = 'none';
      return;
    }

    document.getElementById('scenario-typing-container').style.display = 'flex';
    scenarioOptionsContainer.style.display = 'none';
    scenarioExplanationCard.style.display = 'none';

    const stepData = currentScenario.steps[currentScenarioStepIdx];
    scenarioStepBadge.textContent = `Step ${stepData.step} of ${currentScenario.steps.length}`;
    scenarioNpcSpeaker.textContent = stepData.npcSpeaker;
    scenarioNpcLine.textContent = stepData.npcLine;
    scenarioNpcTranslation.textContent = stepData.npcTranslation;
    scenarioUserTask.textContent = stepData.userTask;

    scenarioTypeInput.value = '';
    scenarioTypingFeedback.textContent = '';

    const npcGender = getSpeakerGender(stepData.npcSpeaker);

    if (speechEnabled && activeView === 'scenario-view' && stepData.npcSpeaker !== 'Scenario Setting') {
      speakSpanish(stepData.npcLine, npcGender);
    }

    saveSessionState();
  }

  function normalizeStr(str) {
    if (!str) return '';
    let clean = str.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿"']/g, "")
      .replace(/\s+/g, " ")
      .trim();

    clean = clean.replace(/^(yo|tu|usted|el|ella)\s+/, "");
    return clean;
  }

  function advanceToNextScenarioStep() {
    currentScenarioStepIdx++;
    saveSessionState();
    renderScenarioStep();
  }

  function checkTypingAnswer() {
    if (!currentScenario) return;
    const stepData = currentScenario.steps[currentScenarioStepIdx];
    const userVal = normalizeStr(scenarioTypeInput.value);

    if (!userVal) return;

    const targetVal = normalizeStr(stepData.expectedResponse);
    const varMatches = stepData.acceptableVariations ? stepData.acceptableVariations.some(v => normalizeStr(v) === userVal) : false;

    if (userVal === targetVal || varMatches) {
      scenarioTypingFeedback.style.color = '#34d399';
      scenarioTypingFeedback.textContent = "✓ Perfect!";

      if (speechEnabled) {
        speakSpanish(scenarioTypeInput.value.trim() || stepData.expectedResponse, 'male', () => {
          setTimeout(advanceToNextScenarioStep, 300);
        });
      } else {
        setTimeout(advanceToNextScenarioStep, 1000);
      }
    } else {
      scenarioTypingFeedback.style.color = '#f87171';
      scenarioTypingFeedback.textContent = "Not quite. Showing 4 choices below...";
      showScenarioOptions();
    }
  }

  function showScenarioOptions() {
    if (!currentScenario) return;
    const stepData = currentScenario.steps[currentScenarioStepIdx];
    scenarioOptionsContainer.style.display = 'grid';
    scenarioOptionsContainer.innerHTML = '';

    const optionKeys = ['A', 'B', 'C', 'D'];
    stepData.options.forEach((opt, idx) => {
      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      optCard.innerHTML = `
        <div class="option-key">${optionKeys[idx]}</div>
        <div class="option-text">${opt.text}</div>
      `;

      optCard.addEventListener('click', () => {
        if (opt.isCorrect) {
          optCard.classList.add('correct');
          scenarioExplanationCard.style.display = 'block';
          scenarioExplanationCard.innerHTML = `<strong>✓ Correct Native Logic:</strong> ${stepData.expectedResponse}`;

          if (speechEnabled) {
            speakSpanish(opt.text, 'male', () => {
              setTimeout(advanceToNextScenarioStep, 300);
            });
          } else {
            setTimeout(advanceToNextScenarioStep, 1200);
          }
        } else {
          optCard.classList.add('incorrect');
          scenarioExplanationCard.style.display = 'block';
          scenarioExplanationCard.innerHTML = `<strong>⚠️ Trap Explanation:</strong> ${opt.reason}`;
        }
      });

      scenarioOptionsContainer.appendChild(optCard);
    });
  }

  // ------------------------------------------------------------------
  // 4. FLASHCARD ENGINE (WITH BLIND AUDIO MODE)
  // ------------------------------------------------------------------
  function updateDiffBadge(element, difficulty) {
    element.textContent = difficulty || 'A1 Beginner';
    element.className = 'badge badge-diff';
    if (difficulty === 'A2 Elementary') element.classList.add('A2-Elementary');
    if (difficulty === 'B1 Intermediate') element.classList.add('B1-Intermediate');
  }

  function renderCurrentFlashcard() {
    flashcard.classList.remove('flipped');
    fcIsFlipped = false;
    isBlindRevealed = false;

    if (fcQueue.length === 0 || fcIndex >= fcQueue.length) {
      fcFrontText.textContent = "¡Buen trabajo! 🎉";
      fcCategoryTag.textContent = currentCategory === 'ALL' ? 'Completed' : currentCategory;
      updateDiffBadge(fcDiffTag, "Finished");
      fcTypeTag.textContent = "Session Finished";
      fcBackText.textContent = `All cards in '${currentCategory}' have been reviewed!`;
      fcBackSpanishRef.textContent = "Switch categories or check back later for spaced reviews.";
      fcDueCount.textContent = "0";
      fcProgressFill.style.width = "100%";
      return;
    }

    const currentCard = fcQueue[fcIndex];

    if (blindAudioMode) {
      fcFrontText.innerHTML = `<span style="color: var(--accent-cyan); font-size: 1.3rem; cursor: pointer;"><i class="fa-solid fa-headphones"></i> <em>[ 🎧 Click to Listen & Reveal Spanish ]</em></span>`;
      fcFrontHint.innerHTML = `<i class="fa-solid fa-headphones"></i> Blind Listening Mode active — Listen first, then flip card!`;
      
      if (speechEnabled && activeView === 'flashcard-view') {
        setTimeout(() => speakSpanish(currentCard.spanish, 'female'), 300);
      }
    } else {
      fcFrontText.textContent = currentCard.spanish;
      fcFrontHint.innerHTML = `<i class="fa-solid fa-hand-pointer"></i> Click card or press <kbd>Space</kbd> to flip`;
    }

    fcBackText.textContent = currentCard.english;
    fcBackSpanishRef.textContent = `Spanish: ${currentCard.spanish}`;

    fcCategoryTag.textContent = currentCard.category || 'Vocabulary';
    updateDiffBadge(fcDiffTag, currentCard.difficulty);
    fcTypeTag.textContent = currentCard.isRegionalism ? `Regional (${currentCard.region})` : (currentCard.type || 'Universal');

    fcBackCatTag.textContent = currentCard.category || 'Vocabulary';
    updateDiffBadge(fcBackDiffTag, currentCard.difficulty);
    fcBackTypeTag.textContent = currentCard.isRegionalism ? `Regional (${currentCard.region})` : 'Universal';

    fcDueCount.textContent = fcQueue.length - fcIndex;
    fcSessionCount.textContent = fcSessionStudied;

    const progressPct = Math.round((fcIndex / fcQueue.length) * 100);
    fcProgressFill.style.width = `${progressPct}%`;
  }

  function flipFlashcard() {
    if (fcQueue.length === 0 || fcIndex >= fcQueue.length) return;

    if (blindAudioMode && !isBlindRevealed && !fcIsFlipped) {
      isBlindRevealed = true;
      fcFrontText.textContent = fcQueue[fcIndex].spanish;
      return;
    }

    fcIsFlipped = !fcIsFlipped;
    flashcard.classList.toggle('flipped', fcIsFlipped);

    if (fcIsFlipped && speechEnabled && activeView === 'flashcard-view') {
      speakSpanish(fcQueue[fcIndex].spanish, 'female');
    }
  }

  function rateCurrentCard(grade) {
    if (fcQueue.length === 0 || fcIndex >= fcQueue.length) return;

    const card = fcQueue[fcIndex];
    srsEngine.rateCard(card.id, grade);

    registerCardStudied();
    fcSessionStudied++;
    fcIndex++;

    if (!flashcard.classList.contains('flipped')) {
      renderCurrentFlashcard();
    } else {
      flashcard.classList.remove('flipped');
      setTimeout(() => {
        renderCurrentFlashcard();
      }, 250);
    }

    saveSessionState();
    updateStatsView();
  }

  // ------------------------------------------------------------------
  // 5. 4-CHOICE MULTIPLE CHOICE QUIZ ENGINE
  // ------------------------------------------------------------------
  function renderNextQuizQuestion() {
    let candidatePool = getFilteredCards();

    if (currentCategory !== 'ALL') {
      candidatePool = candidatePool.filter(c => c.category === currentCategory);
    }
    if (currentDifficulty !== 'ALL') {
      candidatePool = candidatePool.filter(c => c.difficulty === currentDifficulty);
    }

    if (candidatePool.length < 4) {
      quizTargetWord.textContent = "Not enough cards in this filter for a 4-choice quiz.";
      quizOptionsContainer.innerHTML = '';
      return;
    }

    const targetIdx = Math.floor(Math.random() * candidatePool.length);
    quizCurrentCard = candidatePool[targetIdx];

    const distractors = [];
    const poolCopy = [...candidatePool].filter(c => c.id !== quizCurrentCard.id);
    srsEngine.shuffleArray(poolCopy);

    for (let i = 0; i < 3 && i < poolCopy.length; i++) {
      distractors.push(poolCopy[i]);
    }

    const all4Options = [quizCurrentCard, ...distractors];
    srsEngine.shuffleArray(all4Options);
    quizOptions = all4Options;

    quizTargetWord.textContent = quizCurrentCard.spanish;
    quizCategoryTag.textContent = quizCurrentCard.category || 'Quiz';
    updateDiffBadge(quizDiffTag, quizCurrentCard.difficulty);

    quizOptionsContainer.innerHTML = '';
    const optionKeys = ['A', 'B', 'C', 'D'];

    all4Options.forEach((opt, idx) => {
      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      optCard.dataset.index = idx;
      optCard.dataset.cardId = opt.id;

      optCard.innerHTML = `
        <div class="option-key">${optionKeys[idx]}</div>
        <div class="option-text">${opt.english}</div>
      `;

      optCard.addEventListener('click', () => handleQuizSelection(opt, optCard));
      quizOptionsContainer.appendChild(optCard);
    });

    if (speechEnabled && activeView === 'quiz-view') {
      speakSpanish(quizCurrentCard.spanish, 'female');
    }
  }

  function handleQuizSelection(selectedOption, optElement) {
    if (!quizCurrentCard) return;

    quizTotalAsked++;
    const isCorrect = selectedOption.id === quizCurrentCard.id;

    if (isCorrect) {
      quizCorrectCount++;
      optElement.classList.add('correct');
      srsEngine.rateCard(quizCurrentCard.id, 4);
    } else {
      optElement.classList.add('incorrect');
      srsEngine.rateCard(quizCurrentCard.id, 0);
      
      document.querySelectorAll('.option-card').forEach(c => {
        if (c.dataset.cardId === quizCurrentCard.id) {
          c.classList.add('correct');
        }
      });
    }

    registerCardStudied();

    quizScoreVal.textContent = `${quizCorrectCount} / ${quizTotalAsked}`;
    const pct = Math.round((quizCorrectCount / quizTotalAsked) * 100);
    quizAccuracyVal.textContent = `${pct}%`;
    quizProgressFill.style.width = `${pct}%`;

    document.querySelectorAll('.option-card').forEach(c => c.style.pointerEvents = 'none');
    setTimeout(() => {
      renderNextQuizQuestion();
    }, 1200);
  }

  // ------------------------------------------------------------------
  // 6. STATS & PROGRESS
  // ------------------------------------------------------------------
  function updateStatsView() {
    const stats = srsEngine.getOverallStats(allCards);
    if (currentDeck) {
      statTotalWords.textContent = currentDeck.deckInfo.universalCount || stats.totalCards;
      statRegionalWords.textContent = currentDeck.deckInfo.regionalCount || 0;
    } else {
      statTotalWords.textContent = stats.totalCards;
    }
    statLearnedWords.textContent = stats.totalLearned;
    statMasteredWords.textContent = stats.totalMastered;
    statDueWords.textContent = stats.totalDue;
  }

  // ------------------------------------------------------------------
  // 7. AUDIO SPEECH SYNTHESIZER (WITH SPEED RATE CONTROL)
  // ------------------------------------------------------------------
  function speakSpanish(text, gender = 'female', onEndCallback = null) {
    if (!('speechSynthesis' in window)) {
      if (onEndCallback) onEndCallback();
      return;
    }

    window.speechSynthesis.cancel();
    updateVoices();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLang;
    utterance.rate = speechRate * 0.88;

    if (gender === 'female') {
      utterance.pitch = 1.35;
    } else {
      utterance.pitch = 0.75;
    }

    const spanishVoices = availableVoices.filter(v => v.lang.startsWith('es') || v.lang.includes('ES') || v.lang.includes('MX'));

    if (spanishVoices.length > 0) {
      let matchedVoice = null;
      if (gender === 'female') {
        matchedVoice = spanishVoices.find(v => {
          const n = v.name.toLowerCase();
          return n.includes('sabina') || n.includes('helena') || n.includes('monica') || n.includes('paulina') || n.includes('laura') || n.includes('hilda') || n.includes('female');
        });
      } else {
        matchedVoice = spanishVoices.find(v => {
          const n = v.name.toLowerCase();
          return n.includes('raul') || n.includes('raúl') || n.includes('jorge') || n.includes('pablo') || n.includes('miguel') || n.includes('male');
        });
      }

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      } else {
        utterance.voice = spanishVoices[gender === 'female' ? 0 : Math.min(1, spanishVoices.length - 1)];
      }
    }

    if (onEndCallback) {
      let hasExecuted = false;
      let fallbackTimer = null;

      const triggerCallbackOnce = () => {
        if (!hasExecuted) {
          hasExecuted = true;
          if (fallbackTimer) clearTimeout(fallbackTimer);
          onEndCallback();
        }
      };

      utterance.onend = triggerCallbackOnce;
      fallbackTimer = setTimeout(triggerCallbackOnce, 4000);
    }

    window.speechSynthesis.speak(utterance);
  }

  // ------------------------------------------------------------------
  // 8. EVENT LISTENERS & NAVIGATION
  // ------------------------------------------------------------------
  function setupEventListeners() {
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const viewId = btn.dataset.view;
        switchView(viewId);
      });
    });

    if (categoryFilterSelect) {
      categoryFilterSelect.addEventListener('change', (e) => {
        selectCategory(e.target.value, false);
      });
    }

    difficultyFilterSelect.addEventListener('change', (e) => {
      currentDifficulty = e.target.value;
      saveSessionState();
      resetStudySessions();
    });

    regionalToggleCheckbox.addEventListener('change', (e) => {
      includeRegionalisms = e.target.checked;
      saveSessionState();
      renderCategoryDropdown();
      resetStudySessions();
    });

    if (accentFilterSelect) {
      accentFilterSelect.addEventListener('change', (e) => {
        speechLang = e.target.value;
        saveSessionState();
      });
    }

    audioSpeedBtn.addEventListener('click', () => {
      if (speechRate === 1.0) {
        speechRate = 0.75;
      } else {
        speechRate = 1.0;
      }
      speedValLabel.textContent = `${speechRate}x`;
      saveSessionState();
    });

    blindAudioCheckbox.addEventListener('change', (e) => {
      blindAudioMode = e.target.checked;
      saveSessionState();
      renderCurrentFlashcard();
    });

    // Scenario Controls & Voice Input
    scenarioMicBtn.addEventListener('click', toggleVoiceInput);

    if (scenarioPrevBtn) {
      scenarioPrevBtn.addEventListener('click', () => {
        if (currentScenarioStepIdx > 0) {
          currentScenarioStepIdx--;
          saveSessionState();
          renderScenarioStep();
        }
      });
    }

    if (scenarioNextBtn) {
      scenarioNextBtn.addEventListener('click', () => {
        if (currentScenario && currentScenarioStepIdx < currentScenario.steps.length - 1) {
          currentScenarioStepIdx++;
          saveSessionState();
          renderScenarioStep();
        }
      });
    }

    scenarioSubmitBtn.addEventListener('click', checkTypingAnswer);
    scenarioTypeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkTypingAnswer();
    });
    scenarioStuckBtn.addEventListener('click', showScenarioOptions);
    scenarioAudioBtn.addEventListener('click', () => {
      if (currentScenario && currentScenario.steps[currentScenarioStepIdx]) {
        const stepData = currentScenario.steps[currentScenarioStepIdx];
        if (stepData.npcSpeaker !== 'Scenario Setting') {
          const npcGender = getSpeakerGender(stepData.npcSpeaker);
          speakSpanish(stepData.npcLine, npcGender);
        }
      }
    });

    fcWrapper.addEventListener('click', (e) => {
      if (e.target.closest('#fc-audio-btn')) return;
      flipFlashcard();
    });

    fcAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (fcQueue[fcIndex]) speakSpanish(fcQueue[fcIndex].spanish, 'female');
    });

    quizAudioBtn.addEventListener('click', () => {
      if (quizCurrentCard) speakSpanish(quizCurrentCard.spanish, 'female');
    });

    srsRatingButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const grade = parseInt(btn.dataset.grade, 10);
        rateCurrentCard(grade);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (activeView === 'flashcard-view') {
        if (e.code === 'Space') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === '1') {
          rateCurrentCard(0);
        } else if (e.key === '2') {
          rateCurrentCard(3);
        } else if (e.key === '3') {
          rateCurrentCard(4);
        } else if (e.key === '4') {
          rateCurrentCard(5);
        }
      } else if (activeView === 'quiz-view') {
        const keyMap = { '1': 0, 'a': 0, '2': 1, 'b': 1, '3': 2, 'c': 2, '4': 3, 'd': 3 };
        const keyLower = e.key.toLowerCase();
        if (keyMap.hasOwnProperty(keyLower)) {
          const optIdx = keyMap[keyLower];
          const cards = document.querySelectorAll('.option-card');
          if (cards[optIdx] && quizOptions[optIdx]) {
            handleQuizSelection(quizOptions[optIdx], cards[optIdx]);
          }
        }
      }
    });

    audioToggleBtn.addEventListener('click', () => {
      speechEnabled = !speechEnabled;
      audioToggleBtn.style.color = speechEnabled ? 'var(--accent-primary)' : 'var(--text-muted)';
      alert(`Audio Speech Pronunciation ${speechEnabled ? 'Enabled' : 'Disabled'}.`);
    });

    uploadDeckNavBtn.addEventListener('click', () => deckModal.classList.add('active'));
    closeModalBtn.addEventListener('click', () => deckModal.classList.remove('active'));

    customDeckInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const customDeck = JSON.parse(event.target.result);
          if (!customDeck.deckInfo || !customDeck.categories) {
            throw new Error("Invalid deck schema. Missing deckInfo or categories.");
          }
          loadDeck(customDeck);
          deckModal.classList.remove('active');
          alert(`Successfully loaded custom deck: ${customDeck.deckInfo.title}`);
        } catch (err) {
          alert(`Error reading JSON deck: ${err.message}`);
        }
      };
      reader.readAsText(file);
    });

    loadDefaultDeckBtn.addEventListener('click', async () => {
      if (window.DEFAULT_DECK_DATA) {
        loadDeck(window.DEFAULT_DECK_DATA);
        deckModal.classList.remove('active');
      } else {
        try {
          const response = await fetch('spanish_core_deck.json');
          const deckData = await response.json();
          loadDeck(deckData);
          deckModal.classList.remove('active');
        } catch (e) {
          console.error(e);
        }
      }
    });

    exportBtn.addEventListener('click', () => {
      const dataStr = srsEngine.exportProgress();
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lingopulse_srs_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    importBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (ev) => {
        const success = srsEngine.importProgress(ev.target.result);
        if (success) {
          alert("SRS Progress successfully imported!");
          resetStudySessions();
        } else {
          alert("Invalid backup file format.");
        }
      };
      reader.readAsText(file);
    });
  }

  function switchView(viewId) {
    activeView = viewId;
    navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
    views.forEach(v => v.classList.toggle('active', v.id === viewId));
    saveSessionState();
  }

  init();
});
