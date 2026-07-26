/**
 * ============================================================================
 * SYSTEMALOGOS — Flashcard Engine & Binary Swiping Module
 * File: /js/flashcard.js
 * ============================================================================
 * Purpose:
 *   Manages flashcard drilling queue, card flipping, touch gesture swiping
 *   (Swipe Left = Missed, Swipe Right = Got It), intra-session re-testing
 *   queueing (3-5 cards deeper on missed cards), and example sentence audio playback.
 * ============================================================================
 */

import { srsEngine } from './srs_engine.js';
import { speakSpanish, isSpeechEnabled } from './audio.js';
import { registerCardStudied, triggerConfetti } from './achievements.js';

export let fcQueue = [];
export let fcIndex = 0;
export let fcSessionStudied = 0;
export let blindAudioMode = false;

export function setBlindAudioMode(enabled) {
  blindAudioMode = enabled;
}

export function isBlindAudioMode() {
  return blindAudioMode;
}

export function loadFlashcardQueue(cards) {
  fcQueue = [...cards];
  fcIndex = 0;
  fcSessionStudied = 0;
  renderCurrentFlashcard();
}

export function flipFlashcard() {
  const flashcard = document.getElementById('flashcard');
  if (flashcard) flashcard.classList.toggle('flipped');
}

export function unflipFlashcard() {
  const flashcard = document.getElementById('flashcard');
  if (flashcard) flashcard.classList.remove('flipped');
}

export function renderCurrentFlashcard() {
  const fcFrontText = document.getElementById('fc-front-text');
  const fcBackText = document.getElementById('fc-back-text');
  const fcBackSpanishRef = document.getElementById('fc-back-spanish-ref');
  const fcCategoryTag = document.getElementById('fc-category-tag');
  const fcDiffTag = document.getElementById('fc-diff-tag');
  const fcBackCatTag = document.getElementById('fc-back-category-tag');
  const fcBackDiffTag = document.getElementById('fc-back-diff-tag');
  const fcDueCount = document.getElementById('fc-due-count');
  const fcSessionCount = document.getElementById('fc-session-count');
  const fcProgressFill = document.getElementById('fc-progress-fill');
  const fcFrontHint = document.getElementById('fc-front-hint');
  const exampleEsEl = document.getElementById('fc-example-es');
  const exampleEnEl = document.getElementById('fc-example-en');
  const exampleAudioBtn = document.getElementById('fc-example-audio-btn');

  unflipFlashcard();

  if (fcQueue.length === 0 || fcIndex >= fcQueue.length) {
    if (fcFrontText) fcFrontText.textContent = "🎉 Session Completed!";
    if (fcFrontHint) fcFrontHint.textContent = "Great job! All cards in this session have been reviewed.";
    if (fcBackText) fcBackText.textContent = "Session Finished";
    if (fcBackSpanishRef) fcBackSpanishRef.textContent = "Check back later for spaced reviews.";
    if (fcDueCount) fcDueCount.textContent = "0";
    if (fcProgressFill) fcProgressFill.style.width = "100%";
    return;
  }

  const currentCard = fcQueue[fcIndex];

  if (blindAudioMode) {
    if (fcFrontText) fcFrontText.innerHTML = `<span style="color: var(--accent-cyan); font-size: 1.3rem; cursor: pointer;"><i class="fa-solid fa-headphones"></i> <em>[ 🎧 Click to Listen & Reveal Spanish ]</em></span>`;
    if (fcFrontHint) fcFrontHint.innerHTML = `<i class="fa-solid fa-headphones"></i> Blind Listening Mode active — Listen first, then flip card!`;
    if (isSpeechEnabled()) {
      setTimeout(() => speakSpanish(currentCard.spanish, 'female'), 300);
    }
  } else {
    if (fcFrontText) fcFrontText.textContent = currentCard.spanish;
    if (fcFrontHint) fcFrontHint.innerHTML = `<i class="fa-solid fa-hand-pointer"></i> Click to flip • Swipe ← (Missed) | Swipe → (Got It!)`;
  }

  if (fcBackText) fcBackText.textContent = currentCard.english;
  if (fcBackSpanishRef) fcBackSpanishRef.textContent = `Spanish: ${currentCard.spanish}`;

  if (exampleEsEl) exampleEsEl.textContent = `"${currentCard.exampleEs || currentCard.spanish}"`;
  if (exampleEnEl) exampleEnEl.textContent = `"${currentCard.exampleEn || currentCard.english}"`;

  if (exampleAudioBtn) {
    exampleAudioBtn.onclick = (e) => {
      e.stopPropagation();
      if (isSpeechEnabled() && currentCard.exampleEs) {
        speakSpanish(currentCard.exampleEs, 'female');
      }
    };
  }

  if (fcCategoryTag) fcCategoryTag.textContent = currentCard.category || 'Vocabulary';
  if (fcDiffTag) updateDiffBadge(fcDiffTag, currentCard.difficulty);

  if (fcBackCatTag) fcBackCatTag.textContent = currentCard.category || 'Vocabulary';
  if (fcBackDiffTag) updateDiffBadge(fcBackDiffTag, currentCard.difficulty);

  if (fcDueCount) fcDueCount.textContent = fcQueue.length - fcIndex;
  if (fcSessionCount) fcSessionCount.textContent = fcSessionStudied;

  const progressPct = Math.round((fcIndex / fcQueue.length) * 100);
  if (fcProgressFill) fcProgressFill.style.width = `${progressPct}%`;
}

export function updateDiffBadge(badgeEl, difficulty) {
  if (!badgeEl) return;
  const cleanDiff = difficulty ? difficulty.replace(/^[🟢🟡🔵🔴]\s*/, '') : 'A1 Beginner';
  badgeEl.textContent = cleanDiff;
  const className = difficulty ? difficulty.replace(/\s+/g, '-') : 'A1-Beginner';
  badgeEl.className = `badge badge-diff ${className}`;
}

export function handleSRSGrade(grade, onUpdateUI) {
  if (fcQueue.length === 0 || fcIndex >= fcQueue.length) return;

  const currentCard = fcQueue[fcIndex];
  srsEngine.processReview(currentCard.id, grade);

  fcSessionStudied++;
  registerCardStudied(onUpdateUI, triggerConfetti);

  if (grade === 0) {
    const flashcard = document.getElementById('flashcard');
    if (flashcard && !flashcard.classList.contains('flipped')) {
      flashcard.classList.add('flipped');
    }

    setTimeout(() => {
      const insertOffset = Math.floor(Math.random() * 3) + 3; // 3 to 5 cards deeper
      const insertPos = Math.min(fcQueue.length, fcIndex + insertOffset);
      fcQueue.splice(insertPos, 0, currentCard);

      fcIndex++;
      renderCurrentFlashcard();
    }, 1300);
  } else {
    fcIndex++;
    renderCurrentFlashcard();
  }
}
