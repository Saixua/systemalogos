/**
 * ============================================================================
 * SYSTEMALOGOS — SRS Calculation & Persistence Engine Module
 * File: /js/srs_engine.js
 * ============================================================================
 * Purpose:
 *   Bridge module exposing the SM-2 Spaced Repetition calculation engine,
 *   retrieving card mastery states, updating recall intervals, and syncing
 *   with localStorage persistence.
 * ============================================================================
 */

export const srsEngine = window.SRSEngine || {
  getCardState: () => ({ repetitions: 0, interval: 0, easeFactor: 2.5, dueDate: null }),
  processReview: (cardId, grade) => ({ repetitions: 1, interval: 1, easeFactor: 2.5, dueDate: new Date().toISOString() }),
  getAllCardStates: () => ({})
};

export function getCardMasteryState(cardId) {
  const state = srsEngine.getCardState(cardId);
  if (!state || state.repetitions === 0) return 'unstudied';
  if (state.repetitions === 1 && state.interval <= 1) return 'attempted';
  if (state.interval >= 7 || state.repetitions >= 3) return 'mastered';
  if (state.interval >= 3 || state.repetitions >= 2) return 'proficient';
  return 'familiar';
}
