/**
 * ============================================================================
 * SYSTEMALOGOS — 3-Slide Authentic Onboarding & Course Selector Module
 * File: /js/onboarding.js
 * ============================================================================
 * Purpose:
 *   Manages the 3-slide welcoming overlay (#onboarding-modal):
 *   - Slide 1: Target Language Selection (Spanish 🇪🇸, French 🇫🇷, German 🇩🇪)
 *   - Slide 2: SLA Goal Pacing (10, 20, 30 words/day)
 *   - Slide 3: Real-World Fluency & Audio Method Guidance
 * ============================================================================
 */

(function(window) {
  function triggerConfetti() {
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

  function openOnboardingModal() {
    const onboardingModal = document.getElementById('onboarding-modal');
    const slide1 = document.getElementById('onboarding-slide-1');
    const slide2 = document.getElementById('onboarding-slide-2');
    const slide3 = document.getElementById('onboarding-slide-3');
    if (onboardingModal) {
      if (slide1) slide1.style.display = 'flex';
      if (slide2) slide2.style.display = 'none';
      if (slide3) slide3.style.display = 'none';
      onboardingModal.classList.add('active');
      onboardingModal.style.setProperty('display', 'flex', 'important');
    }
  }

  function initOnboardingFlow(onUpdateStreakUI) {
    const onboardingModal = document.getElementById('onboarding-modal');
    if (!onboardingModal) return;

    const hasCompletedOnboarding = localStorage.getItem('systemalogos_onboarding_completed');
    if (!hasCompletedOnboarding) {
      openOnboardingModal();
    } else {
      onboardingModal.style.setProperty('display', 'none', 'important');
    }

    // SLIDE 1: Target Language Card Selection
    const langCards = document.querySelectorAll('.lang-option-card');
    langCards.forEach(card => {
      card.addEventListener('click', () => {
        langCards.forEach(c => {
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

        const selectedLang = card.dataset.lang;
        if (selectedLang && window.DeckLoaderModule) {
          window.DeckLoaderModule.loadLanguageCourse(selectedLang);
        }
      });
    });

    // SLIDE 2: Pacing Cards Selection
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
        if (newGoal && window.AchievementsModule) {
          window.AchievementsModule.setDailyGoalTarget(newGoal);
          if (onUpdateStreakUI) onUpdateStreakUI();
        }
      });
    });

    // SLIDE NAVIGATION BUTTONS
    const next1Btn = document.getElementById('onboarding-next-1');
    const next2Btn = document.getElementById('onboarding-next-2');
    const finishBtn = document.getElementById('onboarding-finish-btn');

    const slide1 = document.getElementById('onboarding-slide-1');
    const slide2 = document.getElementById('onboarding-slide-2');
    const slide3 = document.getElementById('onboarding-slide-3');

    if (next1Btn) {
      next1Btn.addEventListener('click', () => {
        if (slide1) slide1.style.display = 'none';
        if (slide2) slide2.style.display = 'flex';
        if (slide3) slide3.style.display = 'none';
      });
    }

    if (next2Btn) {
      next2Btn.addEventListener('click', () => {
        if (slide1) slide1.style.display = 'none';
        if (slide2) slide2.style.display = 'none';
        if (slide3) slide3.style.display = 'flex';
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        localStorage.setItem('systemalogos_onboarding_completed', 'true');
        onboardingModal.classList.remove('active');
        onboardingModal.style.setProperty('display', 'none', 'important');
        triggerConfetti();
      });
    }

    const openOnboardingBtn = document.getElementById('open-onboarding-btn');
    if (openOnboardingBtn) {
      openOnboardingBtn.addEventListener('click', () => {
        openOnboardingModal();
      });
    }
  }

  window.OnboardingModule = {
    triggerConfetti,
    openOnboardingModal,
    initOnboardingFlow
  };
})(window);
