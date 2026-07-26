/**
 * ============================================================================
 * SYSTEMALOGOS — Conversational Scenarios & Speech Input Module
 * File: /js/scenario.js
 * ============================================================================
 * Purpose:
 *   Manages real-world conversational scenarios across languages (Spanish 🇪🇸,
 *   French 🇫🇷, German 🇩🇪), turn-taking dialogues, NPC speaker audio synthesis,
 *   user speech recognition / text grading, and scenario progress tracking.
 * ============================================================================
 */

(function(window) {
  let allScenarios = window.CONVERSATIONAL_SCENARIOS || [];
  let currentScenarioIdx = 0;
  let currentScenarioStepIdx = 0;

  function initScenarios() {
    const activeLang = localStorage.getItem('systemalogos_active_language') || 'spanish';
    loadScenariosForLanguage(activeLang);
  }

  async function loadScenariosForLanguage(langKey) {
    try {
      const resp = await fetch(`scenarios/${langKey || 'spanish'}_scenarios.json`);
      if (resp.ok) {
        allScenarios = await resp.json();
      } else if (window.CONVERSATIONAL_SCENARIOS) {
        allScenarios = window.CONVERSATIONAL_SCENARIOS;
      }
    } catch (e) {
      console.warn(`Could not load scenarios/${langKey}_scenarios.json:`, e);
      allScenarios = window.CONVERSATIONAL_SCENARIOS || [];
    }
    currentScenarioIdx = 0;
    currentScenarioStepIdx = 0;
    populateScenarioSelect();
    renderCurrentScenarioStep();
  }

  function populateScenarioSelect() {
    const select = document.getElementById('scenario-unit-select');
    if (!select) return;

    if (!allScenarios || allScenarios.length === 0) {
      select.innerHTML = '<option value="">No scenarios available for this course</option>';
      return;
    }

    select.innerHTML = allScenarios.map((sc, idx) => {
      // Extract clean unit label: strip "Level X Language — " prefix if present
      let label = sc.title || `Scenario ${idx + 1}`;
      label = label.replace(/^Level\s+\d+\s+\w+\s*[-—–]\s*/i, '');
      return `<option value="${idx}">${label}</option>`;
    }).join('');

    select.value = currentScenarioIdx;
    select.onchange = (e) => {
      currentScenarioIdx = parseInt(e.target.value, 10);
      currentScenarioStepIdx = 0;
      renderCurrentScenarioStep();
    };
  }

  function renderCurrentScenarioStep() {
    if (!allScenarios || allScenarios.length === 0) return;
    const currentScenario = allScenarios[currentScenarioIdx];
    if (!currentScenario || !currentScenario.steps) return;

    const step = currentScenario.steps[currentScenarioStepIdx];

    const descEl = document.getElementById('scenario-desc');
    const stepBadge = document.getElementById('scenario-step-badge');
    const npcSpeaker = document.getElementById('scenario-npc-speaker');
    const npcLine = document.getElementById('scenario-npc-line');
    const npcTranslation = document.getElementById('scenario-npc-translation');
    const userTask = document.getElementById('scenario-user-task');
    const typeInput = document.getElementById('scenario-type-input');
    const optionsContainer = document.getElementById('scenario-options-container');
    const feedbackEl = document.getElementById('scenario-feedback-box');

    const spanishText = step.npcLine || step.npcSpanish || '';
    const translationText = step.npcTranslation || step.npcEnglish || '';
    const taskText = step.userTask || step.userGoal || '';

    if (descEl) descEl.textContent = currentScenario.description || '';
    if (stepBadge) stepBadge.textContent = `Step ${currentScenarioStepIdx + 1} of ${currentScenario.steps.length}`;
    if (npcSpeaker) npcSpeaker.textContent = step.npcSpeaker || 'Scenario Setting';

    // Handle bracketed narrative text (scene-setting) vs actual dialogue
    if (npcLine) {
      const isBracketed = spanishText.startsWith('[');
      if (isBracketed) {
        // Strip brackets, display as italic scene description
        const cleanText = spanishText.replace(/^\[|\]$/g, '');
        npcLine.innerHTML = `<em style="font-size: 0.95rem; color: var(--text-muted); font-weight: 400; font-style: italic;">${cleanText}</em>`;
      } else {
        npcLine.textContent = `"${spanishText}"`;
      }
    }
    if (npcTranslation) npcTranslation.textContent = `"${translationText}"`;
    if (userTask) userTask.textContent = taskText;

    // Update placeholder and clear input for active language
    const activeLang = localStorage.getItem('systemalogos_active_language') || 'spanish';
    const langNames = { spanish: 'Spanish', french: 'French', german: 'German' };
    const langName = langNames[activeLang] || 'the target language';
    if (typeInput) {
      typeInput.value = '';
      typeInput.placeholder = `Type or speak response in ${langName}...`;
    }

    // Hide 4-choice options and feedback on new step
    if (optionsContainer) optionsContainer.style.display = 'none';
    if (feedbackEl) feedbackEl.style.display = 'none';

    // Only auto-speak when Scenario Drills view is actually visible on screen
    const scenarioView = document.getElementById('scenario-view');
    const isVisible = scenarioView && scenarioView.classList.contains('active');
    if (isVisible && window.AudioModule && window.AudioModule.isSpeechEnabled() && spanishText && !spanishText.startsWith('[')) {
      setTimeout(() => window.AudioModule.speakSpanish(spanishText, 'female'), 200);
    }
  }

  function showFourChoices() {
    if (!allScenarios || allScenarios.length === 0) return;
    const currentScenario = allScenarios[currentScenarioIdx];
    if (!currentScenario || !currentScenario.steps) return;

    const step = currentScenario.steps[currentScenarioStepIdx];
    const correctAnswer = step.expectedResponse || '';
    const optionsContainer = document.getElementById('scenario-options-container');
    if (!optionsContainer) return;

    let allOptions = [];

    // Use built-in options from data if available (Spanish scenarios have these)
    if (step.options && step.options.length >= 4) {
      allOptions = step.options.map(o => o.text);
    } else {
      // Generate options dynamically for languages without built-in options
      const wrongAnswers = [];
      for (let i = 0; i < allScenarios.length && wrongAnswers.length < 3; i++) {
        if (i === currentScenarioIdx) continue;
        const otherScenario = allScenarios[i];
        if (otherScenario && otherScenario.steps && otherScenario.steps.length > 0) {
          const otherStep = otherScenario.steps[0];
          const otherResp = otherStep.expectedResponse || '';
          if (otherResp && otherResp !== correctAnswer && !wrongAnswers.includes(otherResp)) {
            wrongAnswers.push(otherResp);
          }
        }
      }
      while (wrongAnswers.length < 3) wrongAnswers.push('...');

      allOptions = [correctAnswer, ...wrongAnswers];
    }

    // Shuffle
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    optionsContainer.style.display = 'grid';
    optionsContainer.innerHTML = allOptions.map(opt => `
      <button class="primary-btn quiz-option-btn" style="padding: 1rem; font-size: 0.95rem; text-align: center; background: var(--bg-card); border: 1px solid var(--border-color); color: #fff; cursor: pointer; border-radius: 14px;"
        onclick="(function(btn){
          var correct = ${JSON.stringify(correctAnswer)};
          if(btn.textContent.trim() === correct.trim()){
            btn.style.background='rgba(52,211,153,0.25)'; btn.style.borderColor='#34d399'; btn.style.color='#34d399';
            setTimeout(function(){ if(window.ScenarioModule) window.ScenarioModule.submitScenarioResponse(correct); }, 800);
          } else {
            btn.style.background='rgba(239,68,68,0.2)'; btn.style.borderColor='#f87171'; btn.style.color='#f87171';
          }
        })(this)"
      >${opt}</button>
    `).join('');
  }

  function submitScenarioResponse(userText) {
    if (!allScenarios || allScenarios.length === 0) return;
    const currentScenario = allScenarios[currentScenarioIdx];
    const step = currentScenario.steps[currentScenarioStepIdx];

    const acceptableList = [
      step.expectedResponse,
      ...(step.acceptableVariations || []),
      ...(step.acceptableResponses || [])
    ].filter(Boolean);

    const cleanInput = userText.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿"']/g, "");
    const isMatch = acceptableList.some(resp => {
      const cleanResp = resp.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿"']/g, "");
      return cleanInput === cleanResp || cleanInput.includes(cleanResp);
    });

    const feedbackEl = document.getElementById('scenario-feedback-box');
    if (feedbackEl) {
      if (isMatch) {
        feedbackEl.style.display = 'block';
        feedbackEl.style.background = 'rgba(52, 211, 153, 0.15)';
        feedbackEl.style.borderColor = '#34d399';
        feedbackEl.style.color = '#34d399';
        feedbackEl.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Excellent!</strong> Your response was understood perfectly.`;

        setTimeout(() => {
          feedbackEl.style.display = 'none';
          if (currentScenarioStepIdx < currentScenario.steps.length - 1) {
            currentScenarioStepIdx++;
            renderCurrentScenarioStep();
          } else {
            if (window.AchievementsModule) {
              window.AchievementsModule.updateAchievementProgress('scenario_pro', 1);
            }
            alert(`🎉 Scenario Completed: You mastered '${currentScenario.title}'!`);
            currentScenarioIdx = (currentScenarioIdx + 1) % allScenarios.length;
            currentScenarioStepIdx = 0;
            populateScenarioSelect();
            renderCurrentScenarioStep();
          }
        }, 1500);
      } else {
        const hint = acceptableList.length > 0 ? acceptableList[0] : '';
        feedbackEl.style.display = 'block';
        feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
        feedbackEl.style.borderColor = '#f87171';
        feedbackEl.style.color = '#f87171';
        feedbackEl.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Try again!</strong> Expected response like: <em>"${hint}"</em>`;
      }
    }
  }

  window.ScenarioModule = {
    initScenarios,
    loadScenariosForLanguage,
    populateScenarioSelect,
    renderCurrentScenarioStep,
    submitScenarioResponse,
    showFourChoices
  };
})(window);

