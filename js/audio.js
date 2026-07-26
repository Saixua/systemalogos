/**
 * ============================================================================
 * SYSTEMALOGOS — Audio & Speech Synthesis Module
 * File: /js/audio.js
 * ============================================================================
 * Purpose:
 *   Handles Web Speech Synthesis (TTS) voice audio playback, accent selection
 *   (e.g., es-MX, fr-FR, de-DE), speed rate adjustment, and Web Audio sound FX.
 * ============================================================================
 */

(function(window) {
  let speechEnabled = true;
  let speechLang = 'es-MX';
  let speechRate = 1.0;

  function initAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }

  function setSpeechEnabled(enabled) {
    speechEnabled = enabled;
  }

  function isSpeechEnabled() {
    return speechEnabled;
  }

  function setSpeechLang(lang) {
    speechLang = lang;
  }

  function setTargetLanguage(langCode) {
    if (langCode) speechLang = langCode;
  }

  function getSpeechLang() {
    return speechLang;
  }

  function setSpeechRate(rate) {
    speechRate = rate;
  }

  function getSpeechRate() {
    return speechRate;
  }

  function cycleSpeechRate() {
    if (speechRate === 1.0) speechRate = 0.8;
    else if (speechRate === 0.8) speechRate = 0.6;
    else speechRate = 1.0;
    return speechRate;
  }

  function speakSpanish(text, gender = 'female') {
    if (!speechEnabled || !text || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate;

    const voices = window.speechSynthesis.getVoices();
    const targetLangPrefix = speechLang.split('-')[0];

    const matchVoice = voices.find(v => v.lang.startsWith(targetLangPrefix)) ||
                       voices.find(v => v.lang.includes(targetLangPrefix));

    if (matchVoice) {
      utterance.voice = matchVoice;
    } else {
      utterance.lang = speechLang;
    }

    window.speechSynthesis.speak(utterance);
  }

  window.AudioModule = {
    initAudio,
    setSpeechEnabled,
    isSpeechEnabled,
    setSpeechLang,
    setTargetLanguage,
    getSpeechLang,
    setSpeechRate,
    getSpeechRate,
    cycleSpeechRate,
    speakSpanish
  };
})(window);
