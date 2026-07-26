/**
 * ============================================================================
 * SYSTEMALOGOS — Visual Roadmap & Khan Academy Progress Map Module
 * File: /js/roadmap.js
 * ============================================================================
 * Purpose:
 *   Renders the Khan Academy-style visual unit roadmap grid, unit mastery nodes
 *   (Not Started, Attempted, Familiar, Proficient, Mastered), stat counters
 *   (Total Vocabulary, Learned, Mastered, Overall Mastery %), level gating,
 *   and unit drilling click handlers.
 * ============================================================================
 */

(function(window) {
  function checkLevelGating(allCards) {
    if (!allCards || allCards.length === 0) return;
    const quarter = Math.max(1, Math.floor(allCards.length / 4));
    const lvl1Cards = allCards.slice(0, quarter);

    const srsEngine = window.SRSModule ? window.SRSModule.srsEngine : null;
    let masteredCount = 0;
    if (srsEngine) {
      lvl1Cards.forEach(c => {
        const state = srsEngine.getCardState(c.id);
        if (state && (state.interval >= 7 || state.repetitions >= 3)) {
          masteredCount++;
        }
      });
    }

    const lvl1Pct = Math.min(100, Math.round((masteredCount / lvl1Cards.length) * 100));

    const badge2 = document.getElementById('level-badge-2');
    const icon2 = document.getElementById('level-icon-2');
    const btn2 = document.getElementById('level-btn-2');
    const bar2 = document.getElementById('level-progress-bar-2');

    if (bar2) bar2.style.width = `${lvl1Pct}%`;

    if (lvl1Pct >= 80) {
      if (badge2) {
        badge2.textContent = "🟡 Level 2 • Active 🎉";
        badge2.className = "badge badge-diff A2-Elementary";
      }
      if (icon2) {
        icon2.className = "fa-solid fa-unlock-keyhole";
        icon2.style.color = "#fb923c";
      }
      if (btn2) {
        btn2.disabled = false;
        btn2.style.opacity = "1";
        btn2.style.pointerEvents = "auto";
        btn2.style.background = "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))";
      }
    } else {
      if (badge2) {
        badge2.textContent = `🔒 Level 2 • Locked (${lvl1Pct}% / 80%)`;
        badge2.className = "badge badge-cat";
      }
      if (icon2) {
        icon2.className = "fa-solid fa-lock";
        icon2.style.color = "var(--text-muted)";
      }
      if (btn2) {
        btn2.disabled = true;
        btn2.style.opacity = "0.45";
        btn2.style.pointerEvents = "none";
        btn2.style.background = "var(--bg-secondary)";
      }
    }

    updateMasteryStats(allCards);
    renderMasteryMap(allCards);
  }

  function updateMasteryStats(allCards) {
    if (!allCards) return;
    const statTotal = document.getElementById('stat-total-words');
    const statLearned = document.getElementById('stat-learned-words');
    const statMastered = document.getElementById('stat-mastered-words');
    const courseMasteryPct = document.getElementById('overall-mastery-pct') || document.getElementById('course-mastery-pct');

    const srsEngine = window.SRSModule ? window.SRSModule.srsEngine : null;
    let learned = 0;
    let mastered = 0;

    if (srsEngine) {
      allCards.forEach(c => {
        const st = srsEngine.getCardState(c.id);
        if (st && st.repetitions > 0) learned++;
        if (st && (st.interval >= 7 || st.repetitions >= 3)) mastered++;
      });
    }

    if (statTotal) statTotal.textContent = allCards.length;
    if (statLearned) statLearned.textContent = learned;
    if (statMastered) statMastered.textContent = mastered;

    const overallPct = allCards.length > 0 ? Math.round((mastered / allCards.length) * 100) : 0;
    if (courseMasteryPct) courseMasteryPct.textContent = `${overallPct}%`;
  }

  function renderMasteryMap(allCards) {
    const container = document.getElementById('unit-mastery-roadmap-container') || document.getElementById('mastery-map-container');
    if (!container || !allCards || allCards.length === 0) return;

    const levels = [
      { name: 'Level 1: Survival Foundation', diffKey: 'A1 Beginner', color: '#34d399' },
      { name: 'Level 2: Everyday Fluency', diffKey: 'A2 Elementary', color: '#fb923c' },
      { name: 'Level 3: Storyteller & Past', diffKey: 'B1 Intermediate', color: '#38bdf8' },
      { name: 'Level 4: Advanced Mastery', diffKey: 'B2 Upper Intermediate', color: '#a855f7' }
    ];

    const cardsPerLevel = Math.max(1, Math.floor(allCards.length / 4));

    container.innerHTML = levels.map((lvl, lvlIdx) => {
      const startIdx = lvlIdx * cardsPerLevel;
      const endIdx = lvlIdx === 3 ? allCards.length : (lvlIdx + 1) * cardsPerLevel;
      const levelCards = allCards.slice(startIdx, endIdx);

      const chunkSize = 15;
      const totalUnits = Math.ceil(levelCards.length / chunkSize);

      let unitsHtml = '';
      for (let u = 0; u < totalUnits; u++) {
        const unitCards = levelCards.slice(u * chunkSize, (u + 1) * chunkSize);

        const nodesHtml = unitCards.map((card, cIdx) => {
          const mState = window.SRSModule ? window.SRSModule.getCardMasteryState(card.id) : 'unstudied';
          
          let nodeBg = 'rgba(255,255,255,0.06)';
          let nodeBorder = 'rgba(255,255,255,0.15)';
          let iconHtml = `${cIdx + 1}`;

          if (mState === 'attempted') {
            nodeBg = 'rgba(148, 163, 184, 0.45)';
            nodeBorder = 'rgba(148, 163, 184, 0.8)';
          } else if (mState === 'familiar') {
            nodeBg = 'rgba(251, 146, 60, 0.25)';
            nodeBorder = '#fb923c';
            iconHtml = '<i class="fa-solid fa-check" style="color: #fb923c; font-size: 0.75rem;"></i>';
          } else if (mState === 'proficient') {
            nodeBg = 'rgba(56, 189, 248, 0.25)';
            nodeBorder = '#38bdf8';
            iconHtml = '<i class="fa-solid fa-check-double" style="color: #38bdf8; font-size: 0.75rem;"></i>';
          } else if (mState === 'mastered') {
            nodeBg = 'rgba(168, 85, 247, 0.3)';
            nodeBorder = '#a855f7';
            iconHtml = '<i class="fa-solid fa-crown" style="color: #a855f7; font-size: 0.75rem;"></i>';
          }

          return `
            <div class="map-node node-${mState}" data-card-id="${card.id}" data-card-spanish="${card.spanish}" title="${card.spanish} (${card.english}) — Status: ${mState.toUpperCase()}" style="width: 38px; height: 38px; border-radius: 50%; background: ${nodeBg}; border: 1.5px solid ${nodeBorder}; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; cursor: pointer; transition: all 0.2s ease;">
              ${iconHtml}
            </div>
          `;
        }).join('');

        unitsHtml += `
          <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: 16px; padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: #fff; font-size: 0.95rem; cursor: pointer;" class="unit-title-btn" data-lvl="${lvlIdx}" data-unit="${u}"><u>Unit ${u + 1}</u> (${unitCards.length} Words)</strong>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Click node to drill unit</span>
            </div>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
              ${nodesHtml}
            </div>
          </div>
        `;
      }

      return `
        <div style="margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: ${lvl.color};"></div>
            <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: #fff; margin: 0;">${lvl.name}</h3>
            <span class="badge" style="background: rgba(255,255,255,0.06); color: ${lvl.color}; border: 1px solid ${lvl.color}40;">${levelCards.length} Words</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${unitsHtml}
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to nodes and unit titles
    container.querySelectorAll('.map-node, .unit-title-btn').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const cardId = elem.dataset.cardId;
        let targetUnitCards = [];

        if (cardId) {
          const foundCard = allCards.find(c => c.id === cardId);
          if (foundCard) {
            const foundIdx = allCards.indexOf(foundCard);
            const unitStart = Math.floor(foundIdx / 15) * 15;
            targetUnitCards = allCards.slice(unitStart, unitStart + 15);
          }
        } else if (elem.dataset.lvl !== undefined && elem.dataset.unit !== undefined) {
          const lvlIdx = parseInt(elem.dataset.lvl, 10);
          const uIdx = parseInt(elem.dataset.unit, 10);
          const startIdx = lvlIdx * cardsPerLevel + uIdx * 15;
          targetUnitCards = allCards.slice(startIdx, startIdx + 15);
        }

        if (targetUnitCards.length > 0 && window.FlashcardModule && window.MainModule) {
          window.FlashcardModule.loadFlashcardQueue(targetUnitCards);
          window.MainModule.switchView('flashcard-view');
        }
      });
    });
  }

  window.RoadmapModule = {
    checkLevelGating,
    updateMasteryStats,
    renderMasteryMap
  };
})(window);
