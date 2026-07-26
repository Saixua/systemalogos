/**
 * ============================================================================
 * SYSTEMALOGOS — Multi-Tier Achievements & Streak Module
 * File: /js/achievements.js
 * ============================================================================
 * Purpose:
 *   Tracks daily learning streaks, calculates 4-tier scaling achievements
 *   (Bronze 🥉, Silver 🥈, Gold 🥇, Platinum 💎), updates progress badges,
 *   and renders the achievements grid.
 * ============================================================================
 */

(function(window) {
  const STREAK_KEY = 'systemalogos_streak_data_v1';
  const ACHIEVEMENTS_KEY = 'systemalogos_achievements_v1';

  let streakCount = 1;
  let todayStudiedCount = 0;
  let DAILY_GOAL_TARGET = parseInt(localStorage.getItem('systemalogos_daily_goal_target'), 10) || 20;

  const achievements = {
    flashcard_scholar: {
      id: 'flashcard_scholar',
      name: 'Flashcard Scholar',
      icon: 'fa-layer-group',
      current: 0,
      tiers: [
        { name: 'Bronze', threshold: 50, badge: '🥉 Bronze', color: '#cd7f32' },
        { name: 'Silver', threshold: 250, badge: '🥈 Silver', color: '#c0c0c0' },
        { name: 'Gold', threshold: 1000, badge: '🥇 Gold', color: '#ffd700' },
        { name: 'Platinum', threshold: 3000, badge: '💎 Platinum', color: '#38bdf8' }
      ]
    },
    streak_warrior: {
      id: 'streak_warrior',
      name: 'Streak Warrior',
      icon: 'fa-fire-flame-curved',
      current: 1,
      tiers: [
        { name: 'Bronze', threshold: 3, badge: '🥉 3 Days', color: '#cd7f32' },
        { name: 'Silver', threshold: 7, badge: '🥈 7 Days', color: '#c0c0c0' },
        { name: 'Gold', threshold: 30, badge: '🥇 30 Days', color: '#ffd700' },
        { name: 'Platinum', threshold: 100, badge: '💎 100 Days', color: '#38bdf8' }
      ]
    },
    vocab_master: {
      id: 'vocab_master',
      name: 'Vocabulary Master',
      icon: 'fa-crown',
      current: 0,
      tiers: [
        { name: 'Bronze', threshold: 20, badge: '🥉 20 Words', color: '#cd7f32' },
        { name: 'Silver', threshold: 100, badge: '🥈 100 Words', color: '#c0c0c0' },
        { name: 'Gold', threshold: 500, badge: '🥇 500 Words', color: '#ffd700' },
        { name: 'Platinum', threshold: 2000, badge: '💎 2,000 Words', color: '#38bdf8' }
      ]
    },
    scenario_pro: {
      id: 'scenario_pro',
      name: 'Scenario Pro',
      icon: 'fa-comments',
      current: 0,
      tiers: [
        { name: 'Bronze', threshold: 1, badge: '🥉 1 Scenario', color: '#cd7f32' },
        { name: 'Silver', threshold: 5, badge: '🥈 5 Scenarios', color: '#c0c0c0' },
        { name: 'Gold', threshold: 15, badge: '🥇 15 Scenarios', color: '#ffd700' },
        { name: 'Platinum', threshold: 30, badge: '💎 30 Scenarios', color: '#38bdf8' }
      ]
    }
  };

  function setDailyGoalTarget(goal) {
    DAILY_GOAL_TARGET = goal;
    localStorage.setItem('systemalogos_daily_goal_target', goal);
  }

  function loadStreakData(onUpdateUI) {
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
      if (onUpdateUI) onUpdateUI();
    } catch (e) {
      console.warn("Could not load streak data:", e);
    }
  }

  function registerCardStudied(onUpdateUI, onTriggerConfetti) {
    todayStudiedCount++;
    updateAchievementProgress('flashcard_scholar', 1);

    const today = new Date().toISOString().slice(0, 10);
    try {
      localStorage.setItem(STREAK_KEY, JSON.stringify({
        lastDate: today,
        streak: streakCount,
        todayCount: todayStudiedCount
      }));
    } catch (e) {}

    if (todayStudiedCount === DAILY_GOAL_TARGET && onTriggerConfetti) {
      onTriggerConfetti();
    }

    if (onUpdateUI) onUpdateUI();
  }

  function updateAchievementProgress(id, increment = 1) {
    if (achievements[id]) {
      achievements[id].current += increment;
      saveAchievementsState();
      renderAchievementsGrid();
    }
  }

  function saveAchievementsState() {
    try {
      const stateObj = {};
      Object.keys(achievements).forEach(k => {
        stateObj[k] = achievements[k].current;
      });
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(stateObj));
    } catch (e) {}
  }

  function loadAchievementsState() {
    try {
      const saved = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(k => {
          if (achievements[k]) {
            achievements[k].current = parsed[k];
          }
        });
      }
    } catch (e) {}
  }

  function renderAchievementsGrid() {
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    if (window.SRSModule && typeof window.SRSModule.getAllCardStates === 'function') {
      const states = window.SRSModule.getAllCardStates();
      let masteredCount = 0;
      Object.values(states).forEach(st => {
        if (st && (st.interval >= 7 || st.repetitions >= 3)) {
          masteredCount++;
        }
      });
      achievements.vocab_master.current = masteredCount;
    }

    container.innerHTML = Object.values(achievements).map(ach => {
      let currentTier = ach.tiers[0];
      let nextTier = ach.tiers[1];

      for (let i = ach.tiers.length - 1; i >= 0; i--) {
        if (ach.current >= ach.tiers[i].threshold) {
          currentTier = ach.tiers[i];
          nextTier = ach.tiers[i + 1] || null;
          break;
        }
      }

      const prevThreshold = (currentTier === ach.tiers[0] && ach.current < currentTier.threshold) ? 0 : currentTier.threshold;
      const targetThreshold = nextTier ? nextTier.threshold : currentTier.threshold;
      const progressPct = Math.min(100, Math.round(((ach.current - prevThreshold) / (targetThreshold - prevThreshold || 1)) * 100));

      return `
        <div class="achievement-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 18px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(99, 102, 241, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; color: var(--accent-primary);">
                <i class="fa-solid ${ach.icon}"></i>
              </div>
              <div>
                <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin: 0;">${ach.name}</h4>
                <span class="badge" style="background: rgba(255,255,255,0.06); color: ${currentTier.color}; border: 1px solid ${currentTier.color}40; margin-top: 0.3rem; display: inline-block;">
                  ${currentTier.badge}
                </span>
              </div>
            </div>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-secondary);">${ach.current} / ${targetThreshold}</span>
          </div>
          <div>
            <div style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; height: 8px; overflow: hidden; width: 100%;">
              <div style="background: linear-gradient(90deg, var(--accent-primary), var(--accent-cyan)); width: ${progressPct}%; height: 100%; transition: width 0.3s ease;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
              <span>Next: ${nextTier ? nextTier.badge : 'Max Tier 🏆'}</span>
              <span>${progressPct}%</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.AchievementsModule = {
    get streakCount() { return streakCount; },
    get todayStudiedCount() { return todayStudiedCount; },
    get DAILY_GOAL_TARGET() { return DAILY_GOAL_TARGET; },
    setDailyGoalTarget,
    loadStreakData,
    registerCardStudied,
    updateAchievementProgress,
    loadAchievementsState,
    renderAchievementsGrid
  };
})(window);
