/**
 * ============================================================================
 * SYSTEMALOGOS — Audio & Speech Synthesis Module
 * File: /js/audio.js
 * ============================================================================
 * Purpose:
 *   Handles Web Speech Synthesis (TTS) voice audio playback, accent selection
 *   (e.g., es-ES, es-MX, es-US), speed rate adjustment, and Web Audio sound FX.
 * ============================================================================
 */

let speechEnabled = true;
let speechLang = 'es-ES';
let speechRate = 1.0;

export function initAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

export function setSpeechEnabled(enabled) {
  speechEnabled = enabled;
}

export function isSpeechEnabled() {
  return speechEnabled;
}

export function setSpeechLang(lang) {
  speechLang = lang;
}

export function getSpeechLang() {
  return speechLang;
}

export function setSpeechRate(rate) {
  speechRate = rate;
}

export function getSpeechRate() {
  return speechRate;
}

export function cycleSpeechRate() {
  if (speechRate === 1.0) speechRate = 0.8;
  else if (speechRate === 0.8) speechRate = 0.6;
  else speechRate = 1.0;
  return speechRate;
}

export function speakSpanish(text, gender = 'female') {
  if (!speechEnabled || !('speechSynthesis' in window) || !text) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLang;
    utterance.rate = speechRate;

    const voices = window.speechSynthesis.getVoices();
    const spanishVoices = voices.filter(v => v.lang.startsWith('es'));

    if (spanishVoices.length > 0) {
      let chosenVoice = null;
      if (gender === 'male') {
        chosenVoice = spanishVoices.find(v => v.name.toLowerCase().includes('jorge') || v.name.toLowerCase().includes('pablo') || v.name.toLowerCase().includes('male')) || spanishVoices[0];
      } else {
        chosenVoice = spanishVoices.find(v => v.name.toLowerCase().includes('monica') || v.name.toLowerCase().includes('paulina') || v.name.toLowerCase().includes('female')) || spanishVoices[0];
      }
      if (chosenVoice) utterance.voice = chosenVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn("Speech synthesis error:", e);
  }
}
