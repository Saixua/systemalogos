/**
 * ============================================================================
 * SYSTEMALOGOS — Visual Roadmap & 80% Level Progression Gating Module
 * File: /js/roadmap.js
 * ============================================================================
 * Purpose:
 *   Calculates Level 1 SRS recall mastery scores, enforces Duolingo-style
 *   80% level gating (locking Level 2 until Level 1 reaches 80%), and updates
 *   the visual progress roadmap grid on the Home dashboard.
 * ============================================================================
 */

import { srsEngine } from './srs_engine.js';

export function checkLevelGating(allCards) {
  if (!allCards || allCards.length === 0) return;
  const quarter = Math.max(1, Math.floor(allCards.length / 4));
  const lvl1Cards = allCards.slice(0, quarter);

  let masteredCount = 0;
  lvl1Cards.forEach(c => {
    const state = srsEngine.getCardState(c.id);
    if (state && (state.interval >= 7 || state.repetitions >= 3)) {
      masteredCount++;
    }
  });

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
}
