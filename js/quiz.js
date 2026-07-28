/**
 * ============================================================================
 * SYSTEMALOGOS — 4-Choice Quiz Module
 * File: /js/quiz.js
 * ============================================================================
 */

(function(window) {
  let currentQuizCards = [];
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let currentTargetCategory = '';
  let currentNodeId = '';

  function startQuizForCategory(categoryFilter, nodeId) {
    currentTargetCategory = categoryFilter;
    currentNodeId = nodeId;
    correctAnswers = 0;
    currentQuestionIndex = 0;

    const allCards = window.MainModule && window.MainModule.getAllCards ? window.MainModule.getAllCards() : [];
    
    // Get cards matching the category
    let categoryCards = allCards.filter(c => c.category === categoryFilter);
    if (categoryCards.length === 0) categoryCards = allCards.slice(0, 20);

    // Shuffle and pick up to 10 cards for the quiz
    currentQuizCards = shuffleArray(categoryCards).slice(0, 10);

    if (currentQuizCards.length === 0) {
      alert("No cards available for this quiz.");
      return;
    }

    const scoreEl = document.getElementById('quiz-score-val');
    const accuracyEl = document.getElementById('quiz-accuracy-val');
    const progressFill = document.getElementById('quiz-progress-fill');
    if (scoreEl) scoreEl.textContent = `0 / ${currentQuizCards.length}`;
    if (accuracyEl) accuracyEl.textContent = `100%`;
    if (progressFill) progressFill.style.width = `0%`;

    renderQuestion();
  }

  function renderQuestion() {
    const targetWordEl = document.getElementById('quiz-target-word');
    const optionsContainer = document.getElementById('quiz-options-container');
    const catTag = document.getElementById('quiz-category-tag');
    const diffTag = document.getElementById('quiz-diff-tag');
    
    if (!targetWordEl || !optionsContainer) return;

    if (currentQuestionIndex >= currentQuizCards.length) {
      renderCompletionScreen();
      return;
    }

    const currentCard = currentQuizCards[currentQuestionIndex];
    
    if (catTag) catTag.textContent = currentCard.category || 'Vocabulary';
    if (diffTag) {
      diffTag.textContent = currentCard.difficulty ? currentCard.difficulty.replace(/^[🟢🟡🔵🔴]\s*/, '') : 'Beginner';
    }

    targetWordEl.textContent = currentCard.spanish;

    // Generate 4 options
    const allCards = window.MainModule ? window.MainModule.getAllCards() : [];
    let wrongCards = allCards.filter(c => c.id !== currentCard.id);
    wrongCards = shuffleArray(wrongCards).slice(0, 3);
    
    const options = [
      { text: currentCard.english, isCorrect: true },
      ...wrongCards.map(c => ({ text: c.english, isCorrect: false }))
    ];

    const shuffledOptions = shuffleArray(options);

    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.style.padding = '1rem';
      btn.style.borderRadius = '12px';
      btn.style.border = '1px solid var(--border-color)';
      btn.style.background = 'var(--bg-card)';
      btn.style.color = 'var(--text-primary)';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '1rem';
      btn.style.transition = 'all 0.2s';
      btn.textContent = opt.text;
      
      btn.onmouseover = () => btn.style.borderColor = 'var(--accent-primary)';
      btn.onmouseout = () => btn.style.borderColor = 'var(--border-color)';

      btn.onclick = () => handleAnswer(opt.isCorrect, btn);
      optionsContainer.appendChild(btn);
    });

    // Audio button
    const audioBtn = document.getElementById('quiz-audio-btn');
    if (audioBtn) {
      audioBtn.onclick = () => {
        if (window.AudioModule && window.AudioModule.isSpeechEnabled()) {
          window.AudioModule.speakSpanish(currentCard.spanish, 'female');
        }
      };
    }
  }

  function handleAnswer(isCorrect, btnElement) {
    // Disable all buttons
    const container = document.getElementById('quiz-options-container');
    const buttons = container.querySelectorAll('.quiz-option-btn');
    buttons.forEach(b => {
      b.onclick = null;
      b.style.pointerEvents = 'none';
      if (b.textContent === currentQuizCards[currentQuestionIndex].english) {
        b.style.background = 'rgba(16, 185, 129, 0.2)'; // green
        b.style.borderColor = '#10b981';
      }
    });

    if (isCorrect) {
      correctAnswers++;
      btnElement.style.background = 'rgba(16, 185, 129, 0.2)';
      btnElement.style.borderColor = '#10b981';
    } else {
      btnElement.style.background = 'rgba(239, 68, 68, 0.2)';
      btnElement.style.borderColor = '#ef4444';
    }

    const totalAnswered = currentQuestionIndex + 1;
    const accuracy = Math.round((correctAnswers / totalAnswered) * 100);
    
    const scoreEl = document.getElementById('quiz-score-val');
    const accuracyEl = document.getElementById('quiz-accuracy-val');
    const progressFill = document.getElementById('quiz-progress-fill');
    
    if (scoreEl) scoreEl.textContent = `${correctAnswers} / ${currentQuizCards.length}`;
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    if (progressFill) progressFill.style.width = `${(totalAnswered / currentQuizCards.length) * 100}%`;

    setTimeout(() => {
      currentQuestionIndex++;
      renderQuestion();
    }, 1200);
  }

  function renderCompletionScreen() {
    const targetWordEl = document.getElementById('quiz-target-word');
    const optionsContainer = document.getElementById('quiz-options-container');
    
    const percentage = Math.round((correctAnswers / currentQuizCards.length) * 100);
    const passed = percentage >= 80;

    targetWordEl.textContent = `Quiz Completed: ${percentage}%`;
    
    if (passed && currentNodeId) {
      localStorage.setItem(`quiz_completed_${currentNodeId}`, 'true');
    }

    optionsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3 style="margin-bottom: 1rem;">${passed ? '🎉 Great Job!' : 'Keep Practicing!'}</h3>
        <p style="margin-bottom: 2rem; color: var(--text-secondary);">
          You scored ${correctAnswers} out of ${currentQuizCards.length}.
          ${passed ? 'You have unlocked the next step.' : 'You need 80% to pass this quiz.'}
        </p>
        <button class="primary-btn" id="quiz-return-btn">
          Return to Roadmap <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    document.getElementById('quiz-return-btn').onclick = () => {
      if (window.MainModule) window.MainModule.switchView('home-view');
      if (window.RoadmapModule) window.RoadmapModule.renderTree();
    };
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  window.QuizModule = {
    startQuizForCategory
  };

})(window);
