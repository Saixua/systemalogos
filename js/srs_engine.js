/**
 * ============================================================================
 * SYSTEMALOGOS — SRS Calculation & Persistence Engine Module
 * File: /js/srs_engine.js
 * ============================================================================
 * Purpose:
 *   Bridge module exposing the SM-2 Spaced Repetition calculation engine,
 *   retrieving card mastery states, updating recall intervals, isolating SRS
 *   progress databases per language course, and syncing with localStorage.
 * ============================================================================
 */

(function(window) {
  let srsEngine = null;

  function getEngine() {
    if (!srsEngine) {
      if (window.srsEngine && typeof window.srsEngine.getCardState === 'function') {
        srsEngine = window.srsEngine;
      } else if (typeof window.SRSEngine === 'function') {
        srsEngine = new window.SRSEngine();
        window.srsEngine = srsEngine;
      } else {
        srsEngine = {
          getCardState: () => ({ repetitions: 0, interval: 0, easeFactor: 2.5, dueDate: null }),
          rateCard: (cardId, grade) => ({ repetitions: 1, interval: 1, easeFactor: 2.5, dueDate: new Date().toISOString() }),
          processReview: (cardId, grade) => ({ repetitions: 1, interval: 1, easeFactor: 2.5, dueDate: new Date().toISOString() }),
          setLanguageScope: () => {},
          userStates: {}
        };
      }
    }
    return srsEngine;
  }

  function setLanguageScope(langKey) {
    const engine = getEngine();
    if (typeof engine.setLanguageScope === 'function') {
      engine.setLanguageScope(langKey);
    }
  }

  function getCardState(cardId) {
    const engine = getEngine();
    return engine.getCardState(cardId);
  }

  function processReview(cardId, grade) {
    const engine = getEngine();
    if (typeof engine.rateCard === 'function') {
      return engine.rateCard(cardId, grade);
    }
    return engine.getCardState(cardId);
  }

  function getAllCardStates() {
    const engine = getEngine();
    return engine.userStates || {};
  }

  function getCardMasteryState(cardId) {
    const state = getCardState(cardId);
    if (!state || state.repetitions === 0) return 'unstudied';
    if (state.repetitions === 1 && state.interval <= 1) return 'attempted';
    if (state.interval >= 7 || state.repetitions >= 3) return 'mastered';
    if (state.interval >= 3 || state.repetitions >= 2) return 'proficient';
    return 'familiar';
  }

  window.SRSModule = {
    get srsEngine() { return getEngine(); },
    setLanguageScope,
    getCardState,
    processReview,
    getAllCardStates,
    getCardMasteryState
  };
})(window);
