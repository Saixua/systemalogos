/**
 * ============================================================================
 * SYSTEMALOGOS — First-Time Authentic Onboarding & Pacing Module
 * File: /js/onboarding.js
 * ============================================================================
 * Purpose:
 *   Manages the first-time welcoming overlay (#onboarding-modal), authentic SLA
 *   goal pacing selection (10/20/30 words per day), real-world practice advice,
 *   header slider button trigger, and celebratory canvas confetti explosions.
 * ============================================================================
 */

import { setDailyGoalTarget } from './achievements.js';

export function triggerConfetti() {
  try {
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  } catch (e) {}
}

export function initOnboardingFlow(onUpdateStreakUI) {
  const onboardingModal = document.getElementById('onboarding-modal');
  if (!onboardingModal) return;

  const hasCompletedOnboarding = localStorage.getItem('systemalogos_onboarding_completed');
  if (!hasCompletedOnboarding) {
    onboardingModal.classList.add('active');
    onboardingModal.style.display = 'flex';
  } else {
    onboardingModal.style.display = 'none';
  }

  const pacingCards = document.querySelectorAll('.pacing-option-card');

  pacingCards.forEach(card => {
    card.addEventListener('click', () => {
      pacingCards.forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'var(--border-color)';
        const icon = c.querySelector('.fa-circle-check');
        if (icon) {
          icon.style.color = 'var(--text-muted)';
          icon.style.opacity = '0.3';
        }
      });

      card.classList.add('active');
      card.style.borderColor = 'var(--accent-primary)';
      const icon = card.querySelector('.fa-circle-check');
      if (icon) {
        icon.style.color = 'var(--accent-primary)';
        icon.style.opacity = '1';
      }

      const newGoal = parseInt(card.dataset.goal, 10);
      if (newGoal) {
        setDailyGoalTarget(newGoal);
        if (onUpdateStreakUI) onUpdateStreakUI();
      }
    });
  });

  const next1Btn = document.getElementById('onboarding-next-1');
  const slide1 = document.getElementById('onboarding-slide-1');
  const slide2 = document.getElementById('onboarding-slide-2');
  const finishBtn = document.getElementById('onboarding-finish-btn');

  if (next1Btn) {
    next1Btn.addEventListener('click', () => {
      if (slide1) slide1.style.display = 'none';
      if (slide2) slide2.style.display = 'flex';
    });
  }

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      localStorage.setItem('systemalogos_onboarding_completed', 'true');
      onboardingModal.classList.remove('active');
      onboardingModal.style.display = 'none';
      triggerConfetti();
    });
  }

  const openOnboardingBtn = document.getElementById('open-onboarding-btn');
  if (openOnboardingBtn) {
    openOnboardingBtn.addEventListener('click', () => {
      if (slide1) slide1.style.display = 'flex';
      if (slide2) slide2.style.display = 'none';
      onboardingModal.classList.add('active');
      onboardingModal.style.display = 'flex';
    });
  }
}
