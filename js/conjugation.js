/**
 * ============================================================================
 * SYSTEMALOGOS — Verb Conjugation Matrices Module
 * File: /js/conjugation.js
 * ============================================================================
 * Purpose:
 *   Manages 50 verb conjugation matrices across 6 pronouns (yo, tú, él/ella,
 *   nosotros, vosotros, ellos/ellas) and major tenses (Present, Preterite, Imperfect,
 *   Future, Subjunctive). Supports blind audio drills and matrix table rendering.
 * ============================================================================
 */

import { speakSpanish, isSpeechEnabled } from './audio.js';

export let allVerbs = window.CONJUGATION_DATA || [];
export let currentVerbIdx = 0;
export let currentTense = 'present';

export function initConjugations() {
  allVerbs = window.CONJUGATION_DATA || [];
  populateVerbSelect();
  renderConjugationTable();
}

export function populateVerbSelect() {
  const select = document.getElementById('conj-verb-select');
  if (!select) return;

  select.innerHTML = allVerbs.map((v, idx) => `
    <option value="${idx}">${v.infinitive} (${v.english})</option>
  `).join('');

  select.value = currentVerbIdx;
  select.onchange = (e) => {
    currentVerbIdx = parseInt(e.target.value, 10);
    renderConjugationTable();
  };

  const tenseSelect = document.getElementById('conj-tense-select');
  if (tenseSelect) {
    tenseSelect.value = currentTense;
    tenseSelect.onchange = (e) => {
      currentTense = e.target.value;
      renderConjugationTable();
    };
  }
}

export function renderConjugationTable() {
  if (!allVerbs || allVerbs.length === 0) return;
  const verb = allVerbs[currentVerbIdx];
  if (!verb || !verb.tenses) return;

  const tData = verb.tenses[currentTense];
  if (!tData) return;

  const tableBody = document.getElementById('conj-table-body');
  const infTitle = document.getElementById('conj-infinitive-title');
  const infTrans = document.getElementById('conj-infinitive-trans');

  if (infTitle) infTitle.textContent = `${verb.infinitive} (${verb.type || 'verb'})`;
  if (infTrans) infTrans.textContent = `English: "${verb.english}"`;

  if (tableBody) {
    const pronouns = [
      { key: 'yo', label: 'Yo (I)' },
      { key: 'tu', label: 'Tú (You)' },
      { key: 'el_ella', label: 'Él/Ella/Ud (He/She)' },
      { key: 'nosotros', label: 'Nosotros (We)' },
      { key: 'vosotros', label: 'Vosotros (You all)' },
      { key: 'ellos_ellas', label: 'Ellos/Ellas/Uds (They)' }
    ];

    tableBody.innerHTML = pronouns.map(p => {
      const conjugated = tData[p.key] || '-';
      return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 0.85rem 1rem; font-weight: 600; color: var(--text-secondary);">${p.label}</td>
          <td style="padding: 0.85rem 1rem; font-weight: 700; color: var(--accent-cyan); font-size: 1.1rem;">${conjugated}</td>
          <td style="padding: 0.85rem 1rem; text-align: right;">
            <button class="audio-btn conj-audio-item" data-text="${conjugated}" style="width: 32px; height: 32px; font-size: 0.85rem;" title="Listen">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.conj-audio-item').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const text = btn.dataset.text;
        if (text && isSpeechEnabled()) {
          speakSpanish(text, 'female');
        }
      };
    });
  }
}
