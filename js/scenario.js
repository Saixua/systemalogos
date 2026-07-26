/**
 * ============================================================================
 * SYSTEMALOGOS — Conversational Scenarios & Speech Input Module
 * File: /js/scenario.js
 * ============================================================================
 * Purpose:
 *   Manages 30 real-world conversational scenarios, turn-taking dialogues,
 *   NPC speaker audio synthesis, user speech recognition / text grading,
 *   anti-literal trap guidance, and scenario progress tracking.
 * ============================================================================
 */

import { speakSpanish, isSpeechEnabled } from './audio.js';
import { updateAchievementProgress } from './achievements.js';

export let allScenarios = window.CONVERSATIONAL_SCENARIOS || [];
export let currentScenarioIdx = 0;
export let currentScenarioStepIdx = 0;

export function initScenarios() {
  allScenarios = window.CONVERSATIONAL_SCENARIOS || [];
  populateScenarioSelect();
  renderCurrentScenarioStep();
}

export function populateScenarioSelect() {
  const select = document.getElementById('scenario-unit-select');
  if (!select) return;

  select.innerHTML = allScenarios.map((sc, idx) => `
    <option value="${idx}">Scenario ${idx + 1}: ${sc.title} (${sc.difficulty})</option>
  `).join('');

  select.value = currentScenarioIdx;
  select.onchange = (e) => {
    currentScenarioIdx = parseInt(e.target.value, 10);
    currentScenarioStepIdx = 0;
    renderCurrentScenarioStep();
  };
}

export function renderCurrentScenarioStep() {
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

  if (descEl) descEl.textContent = currentScenario.description;
  if (stepBadge) stepBadge.textContent = `Step ${currentScenarioStepIdx + 1} of ${currentScenario.steps.length}`;
  if (npcSpeaker) npcSpeaker.textContent = step.npcSpeaker || 'Local Speaker';
  if (npcLine) npcLine.textContent = `"${step.npcSpanish}"`;
  if (npcTranslation) npcTranslation.textContent = `"${step.npcEnglish}"`;
  if (userTask) userTask.textContent = step.userGoal;

  if (isSpeechEnabled() && step.npcSpanish) {
    setTimeout(() => speakSpanish(step.npcSpanish, 'female'), 200);
  }
}

export function submitScenarioResponse(userText) {
  if (!allScenarios || allScenarios.length === 0) return;
  const currentScenario = allScenarios[currentScenarioIdx];
  const step = currentScenario.steps[currentScenarioStepIdx];

  const cleanInput = userText.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
  const isMatch = step.acceptableResponses.some(resp => {
    const cleanResp = resp.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
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
          updateAchievementProgress('scenario_pro', 1);
          alert(`🎉 Scenario Completed: You mastered '${currentScenario.title}'!`);
          currentScenarioIdx = (currentScenarioIdx + 1) % allScenarios.length;
          currentScenarioStepIdx = 0;
          populateScenarioSelect();
          renderCurrentScenarioStep();
        }
      }, 1500);
    } else {
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
      feedbackEl.style.borderColor = '#f87171';
      feedbackEl.style.color = '#f87171';
      feedbackEl.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Try again!</strong> Expected response like: <em>"${step.acceptableResponses[0]}"</em>`;
    }
  }
}
