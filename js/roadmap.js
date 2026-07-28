/**
 * ============================================================================
 * SYSTEMALOGOS — Roadmap Tree Module
 * File: /js/roadmap.js
 * ============================================================================
 */

(function(window) {
  // Define the Duolingo-style node tree
  const ROADMAP_NODES = [
    {
      id: 'node-1',
      type: 'flashcard',
      title: 'Greetings & Courtesies',
      categoryFilter: 'Essential Greetings & Social Courtesies',
      icon: 'fa-layer-group',
      description: 'Master basic hello, goodbye, and polite phrases.'
    },
    {
      id: 'node-2',
      type: 'quiz',
      title: 'Greetings Quiz',
      categoryFilter: 'Essential Greetings & Social Courtesies',
      icon: 'fa-list-check',
      description: 'Test your knowledge of greetings and courtesies.'
    },
    {
      id: 'node-3',
      type: 'flashcard',
      title: 'Basic Communication',
      categoryFilter: 'Basic Communication & Language Barriers',
      icon: 'fa-layer-group',
      description: 'Navigate simple language barriers.'
    },
    {
      id: 'node-4',
      type: 'quiz',
      title: 'Communication Quiz',
      categoryFilter: 'Basic Communication & Language Barriers',
      icon: 'fa-list-check',
      description: 'Test your knowledge of basic communication.'
    },
    {
      id: 'node-5',
      type: 'scenario',
      title: 'Polite Greetings & Language Barriers',
      scenarioId: 'unit_01',
      icon: 'fa-comments',
      description: 'Practice basic greetings and navigating language barriers.'
    }
  ];

  const MASTERY_THRESHOLD = 80;

  function getNodeMastery(category) {
    if (!window.SRSModule || !window.MainModule) return 0;
    const allCards = window.MainModule.getAllCards ? window.MainModule.getAllCards() : [];
    if (!allCards || allCards.length === 0) return 0;
    
    const nodeCards = allCards.filter(c => c.category === category);
    if (nodeCards.length === 0) return 0;

    let mastered = 0;
    nodeCards.forEach(c => {
      const srsData = window.SRSModule.srsEngine.getCardState(c.id);
      if (srsData && srsData.repetitions > 0 && srsData.interval > 1) {
        mastered++;
      }
    });
    return Math.floor((mastered / nodeCards.length) * 100);
  }

  function renderTree() {
    const container = document.getElementById('roadmap-tree-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    let previousNodeMastered = true; // First node always unlocked

    ROADMAP_NODES.forEach((node, index) => {
      let mastery = 0;
      let isMastered = false;

      if (node.type === 'flashcard') {
        mastery = getNodeMastery(node.categoryFilter);
        isMastered = mastery >= MASTERY_THRESHOLD;
      } else if (node.type === 'quiz') {
        isMastered = localStorage.getItem(`quiz_completed_${node.id}`) === 'true';
        mastery = isMastered ? 100 : 0;
      } else if (node.type === 'scenario') {
        isMastered = localStorage.getItem(`scenario_completed_${node.id}`) === 'true';
        mastery = isMastered ? 100 : 0;
      }

      const isUnlocked = previousNodeMastered;
      
      const nodeEl = document.createElement('div');
      nodeEl.className = `roadmap-node ${isUnlocked ? 'unlocked' : 'locked'} ${isMastered ? 'mastered' : ''}`;
      
      let progressHtml = '';
      let masteryText = '';
      if (node.type === 'flashcard') {
        progressHtml = `
          <div class="node-progress">
            <div class="node-progress-bar" style="width: ${mastery}%"></div>
          </div>
        `;
        masteryText = `${mastery}% Mastered`;
      } else {
        masteryText = isMastered ? 'Completed' : 'Pending';
      }

      nodeEl.innerHTML = `
        <div class="node-icon-wrapper">
          <div class="node-icon">
            <i class="fa-solid ${isUnlocked ? node.icon : 'fa-lock'}"></i>
          </div>
          ${index < ROADMAP_NODES.length - 1 ? '<div class="node-line"></div>' : ''}
        </div>
        <div class="node-content">
          <h3>${node.title}</h3>
          <p>${node.description}</p>
          ${progressHtml}
          <span class="node-mastery-text">${masteryText}</span>
        </div>
      `;
      
      if (isUnlocked) {
        nodeEl.onclick = () => {
          if (window.MainModule) {
            if (node.type === 'flashcard') {
              const catSelect = document.getElementById('category-filter-select');
              if (catSelect) {
                catSelect.value = node.categoryFilter;
                catSelect.dispatchEvent(new Event('change'));
              }
              window.MainModule.switchView('flashcard-view');
            } else if (node.type === 'quiz') {
              if (window.QuizModule && window.QuizModule.startQuizForCategory) {
                window.QuizModule.startQuizForCategory(node.categoryFilter, node.id);
                window.MainModule.switchView('quiz-view');
              }
            } else if (node.type === 'scenario') {
              if (window.ScenarioModule && window.ScenarioModule.startScenario) {
                window.ScenarioModule.startScenario(node.scenarioId, node.id);
                window.MainModule.switchView('scenario-view');
              }
            }
          }
        };
      }
      
      // Update for the next node
      previousNodeMastered = isMastered;
      
      container.appendChild(nodeEl);
    });
  }

  window.RoadmapModule = {
    renderTree,
    ROADMAP_NODES
  };

})(window);
