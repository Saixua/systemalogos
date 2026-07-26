/**
 * Spaced Repetition System (SRS) SM-2 Algorithm & Persistence Layer
 */

class SRSEngine {
  constructor(storageKey = 'systemalogos_srs_spanish') {
    const activeLang = localStorage.getItem('systemalogos_active_language') || 'spanish';
    this.storageKey = `systemalogos_srs_${activeLang}`;
    this.userStates = this.loadStates();
  }

  setLanguageScope(langKey) {
    this.storageKey = `systemalogos_srs_${langKey || 'spanish'}`;
    this.userStates = this.loadStates();
  }

  loadStates() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn("LocalStorage read error, starting fresh:", e);
      return {};
    }
  }

  saveStates() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.userStates));
    } catch (e) {
      console.warn("LocalStorage save error:", e);
    }
  }

  getCardState(cardId) {
    if (!this.userStates[cardId]) {
      this.userStates[cardId] = {
        cardId: cardId,
        repetitions: 0,
        interval: 0, // in days (0 means learning/due now)
        easeFactor: 2.5,
        nextReview: Date.now(),
        lastReviewed: null,
        history: [],
        masteryScore: 0 // 0 to 100
      };
    }
    return this.userStates[cardId];
  }

  rateCard(cardId, grade) {
    const state = this.getCardState(cardId);
    const now = Date.now();

    let { repetitions, interval, easeFactor } = state;

    if (grade < 3) {
      repetitions = 0;
      interval = 0.001; // ~1.4 minutes
      easeFactor = Math.max(1.3, easeFactor - 0.2);
    } else {
      if (repetitions === 0) {
        interval = grade === 3 ? 0.5 : grade === 4 ? 1 : 3;
      } else if (repetitions === 1) {
        interval = grade === 3 ? 2 : grade === 4 ? 3 : 6;
      } else {
        const multiplier = grade === 3 ? 1.2 : grade === 4 ? easeFactor : easeFactor * 1.3;
        interval = Math.round(interval * multiplier);
      }

      repetitions += 1;
      easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
      easeFactor = Math.max(1.3, easeFactor);
    }

    const nextReview = now + Math.round(interval * 24 * 60 * 60 * 1000);
    const masteryScore = Math.min(100, Math.round((repetitions * 20) + (easeFactor * 10)));

    state.repetitions = repetitions;
    state.interval = interval;
    state.easeFactor = parseFloat(easeFactor.toFixed(2));
    state.nextReview = nextReview;
    state.lastReviewed = now;
    state.masteryScore = masteryScore;
    state.history.push({ timestamp: now, grade: grade });

    this.saveStates();
    return state;
  }

  getStudyQueue(allCards, selectedCategory = 'ALL', selectedDifficulty = 'ALL') {
    const now = Date.now();

    let filteredCards = allCards;
    if (selectedCategory !== 'ALL') {
      filteredCards = filteredCards.filter(c => c.category === selectedCategory);
    }
    if (selectedDifficulty !== 'ALL') {
      filteredCards = filteredCards.filter(c => c.difficulty === selectedDifficulty);
    }

    const queue = filteredCards.map(card => {
      const state = this.getCardState(card.id);
      const isDue = state.nextReview <= now || state.repetitions === 0;
      return { card, state, isDue };
    });

    const dueList = queue.filter(q => q.isDue).map(q => q.card);
    const futureList = queue.filter(q => !q.isDue).map(q => q.card);
    const shuffledDue = this.shuffleArray([...dueList]);

    return {
      dueCards: shuffledDue,
      futureCards: futureList,
      totalCount: filteredCards.length
    };
  }

  getOverallStats(allCards) {
    let totalLearned = 0;
    let totalMastered = 0;
    let totalDue = 0;
    const now = Date.now();

    allCards.forEach(card => {
      const state = this.userStates[card.id];
      if (state) {
        if (state.repetitions > 0) totalLearned++;
        if (state.masteryScore >= 80) totalMastered++;
        if (state.nextReview <= now) totalDue++;
      } else {
        totalDue++;
      }
    });

    return {
      totalCards: allCards.length,
      totalLearned,
      totalMastered,
      totalDue
    };
  }

  exportProgress() {
    return JSON.stringify(this.userStates, null, 2);
  }

  importProgress(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      if (typeof imported === 'object') {
        this.userStates = imported;
        this.saveStates();
        return true;
      }
    } catch (e) {
      console.error("Import error:", e);
    }
    return false;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

window.SRSEngine = SRSEngine;
