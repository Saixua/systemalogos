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
      const diffLabel = sc.difficulty ? ` (${sc.difficulty})` : '';
      return `<option value="${idx}">Scenario ${idx + 1}: ${sc.title}${diffLabel}</option>`;
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

    const spanishText = step.npcLine || step.npcSpanish || '';
    const translationText = step.npcTranslation || step.npcEnglish || '';
    const taskText = step.userTask || step.userGoal || '';

    if (descEl) descEl.textContent = currentScenario.description || '';
    if (stepBadge) stepBadge.textContent = `Step ${currentScenarioStepIdx + 1} of ${currentScenario.steps.length}`;
    if (npcSpeaker) npcSpeaker.textContent = step.npcSpeaker || 'Scenario Setting';
    if (npcLine) npcLine.textContent = `"${spanishText}"`;
    if (npcTranslation) npcTranslation.textContent = `"${translationText}"`;
    if (userTask) userTask.textContent = taskText;

    if (window.AudioModule && window.AudioModule.isSpeechEnabled() && spanishText && !spanishText.startsWith('[')) {
      setTimeout(() => window.AudioModule.speakSpanish(spanishText, 'female'), 200);
    }
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
    submitScenarioResponse
  };
})(window);
