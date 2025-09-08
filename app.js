// FLL UNEARTHED Mission Data
const missions = [
    {
        number: 1,
        title: "Surface Brushing",
        description: "You'll need special tools to clean and uncover buried artifacts without damaging them. Brush away sediment to uncover a piece of this civilization's past.",
        imagePath: "images/mission-01-surface-brushing.png",
        modelImagePath: "images/mission-01-surface-brushing.model.png",
        scoring: [
            { condition: "Soil deposits are completely cleared, touching the mat", points: 10, unit: "each" },
            { condition: "Archaeologist's brush is not touching the dig site", points: 10 }
        ],
        maxPoints: 30,
        attachmentType: "Passive",
        difficulty: 2,
        priority: "High",
        strategies: [
            "Design a simple passive attachment to sweep soil deposits",
            "Focus on brush positioning for bonus points",
            "Can be combined with nearby missions for efficiency",
            "Consider doing early in the match for quick points"
        ],
        noHandTouch: true
    },
    {
        number: 2,
        title: "Map Reveal",
        description: "Archaeologists work hard to unearth important clues about how a civilization once lived. Shift and remove topsoil to reveal sections of a hidden map.",
        imagePath: "images/mission-02-map-reveal.png",
        modelImagePath: "images/mission-02-map-reveal.model.png",
        scoring: [
            { condition: "Topsoil sections are completely cleared", points: 10, unit: "each" }
        ],
        maxPoints: 20,
        attachmentType: "Active",
        difficulty: 2,
        priority: "Medium",
        strategies: [
            "Use a motorized sweeper or lever mechanism",
            "Plan path to clear multiple sections efficiently",
            "Consider combining with adjacent missions"
        ],
        noHandTouch: false
    },
    {
        number: 3,
        title: "Mineshaft Explorer",
        description: "Ayyana the archaeologist is on a mission to discover every secret of the dig site and share what she finds with her team.",
        imagePath: "images/mission-03-mineshaft-explorer.png",
        modelImagePath: "images/mission-03-mineshaft-explorer.model.png",
        scoring: [
            { condition: "Your team's minecart is on the opposing team's field", points: 30 },
            { condition: "Bonus: and the opposing team's minecart is on your team's field", points: 10, bonus: true }
        ],
        maxPoints: 40,
        attachmentType: "Active",
        difficulty: 4,
        priority: "Medium",
        strategies: [
            "Minecart must pass completely through the mineshaft entry",
            "Coordinate with alliance partner for bonus points",
            "Not possible to earn bonus in remote competitions",
            "Requires precise alignment and strong push mechanism"
        ],
        noHandTouch: false
    },
    {
        number: 4,
        title: "Careful Recovery",
        description: "When parts of a site are too dangerous for humans, technology can help safely recover artifacts. Carefully extract the precious artifact from the mine, ensuring the site remains stable.",
        imagePath: "images/mission-04-careful-recovery.png",
        modelImagePath: "images/mission-04-careful-recovery.model.png",
        scoring: [
            { condition: "Precious artifact is not touching the mine", points: 30 },
            { condition: "Both support structures are standing", points: 10 }
        ],
        maxPoints: 40,
        attachmentType: "Active",
        difficulty: 5,
        priority: "Low",
        strategies: [
            "Requires extremely precise and gentle manipulation",
            "High risk of knocking down support structures",
            "Consider saving for end if time permits",
            "Practice slow, controlled movements"
        ],
        noHandTouch: true
    },
    {
        number: 5,
        title: "Who Lived Here?",
        description: "Rebuild the structure to restore a vital part of the village where people once lived.",
        imagePath: "images/mission-05-who-lived-here.png",
        modelImagePath: "images/mission-05-who-lived-here.model.png",
        scoring: [
            { condition: "Structure floor is completely upright", points: 30 }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 3,
        priority: "Medium",
        strategies: [
            "Design attachment to lift floor from below",
            "Ensure mechanism locks floor in upright position",
            "Can be quick points with reliable attachment"
        ],
        noHandTouch: true
    },
    {
        number: 6,
        title: "Forge",
        description: "Ayyana's team believes this forge was used to smelt ore and craft tools. Release the ore blocks and search carefully – one block holds a mysterious artifact waiting to be discovered.",
        imagePath: "images/mission-06-forge.png",
        modelImagePath: "images/mission-06-forge.model.png",
        scoring: [
            { condition: "Ore blocks are not touching the forge", points: 10, unit: "each" }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 2,
        priority: "High",
        strategies: [
            "Simple push or pull mechanism works well",
            "Technicians may open ore blocks by hand in home area",
            "One block contains fossilized artifact for Mission 14",
            "Quick points with minimal complexity"
        ],
        noHandTouch: false
    },
    {
        number: 7,
        title: "Heavy Lifting",
        description: "This millstone enabled people to process grain and gives insight into their daily lives. Due to its size and weight, moving this artifact could prove to be a challenge.",
        imagePath: "images/mission-07-heavy-lifting.png",
        modelImagePath: "images/mission-07-heavy-lifting.model.png",
        scoring: [
            { condition: "Millstone is no longer touching its base", points: 30 }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 4,
        priority: "Low",
        strategies: [
            "Requires strong lifting mechanism",
            "Consider using gears for mechanical advantage",
            "Heavy object - ensure robot has good traction",
            "May require dedicated attachment design"
        ],
        noHandTouch: false
    },
    {
        number: 8,
        title: "Silo",
        description: "Empty the silo of the preserved food so it can be analyzed at the lab.",
        imagePath: "images/mission-08-silo.png",
        modelImagePath: "images/mission-08-silo.model.png",
        scoring: [
            { condition: "Preserved pieces are outside the silo", points: 10, unit: "each" }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 2,
        priority: "High",
        strategies: [
            "Simple pushing mechanism can work",
            "Three preserved pieces total for 30 points",
            "Quick and reliable points",
            "Can combine with nearby missions"
        ],
        noHandTouch: false
    },
    {
        number: 9,
        title: "What's on Sale?",
        description: "Restore the market stall and reveal items that were once traded between the village and its visitors.",
        imagePath: "images/mission-09-whats-on-sale.png",
        modelImagePath: "images/mission-09-whats-on-sale.model.png",
        scoring: [
            { condition: "Roof is completely raised", points: 20 },
            { condition: "Market wares are raised", points: 10 }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 3,
        priority: "Medium",
        strategies: [
            "Two-part mission requiring careful sequencing",
            "Roof must be fully raised for maximum points",
            "Wares activation may be linked to roof mechanism",
            "Test reliability of both components"
        ],
        noHandTouch: true
    },
    {
        number: 10,
        title: "Tip the Scales",
        description: "This ancient tool ensured that each item received a fair and balanced price.",
        imagePath: "images/mission-10-tip-the-scales.png",
        modelImagePath: "images/mission-10-tip-the-scales.model.png",
        scoring: [
            { condition: "Scale is tipped and touching the mat", points: 20 },
            { condition: "Scale pan is completely removed", points: 10 }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 3,
        priority: "Medium",
        strategies: [
            "Two-step process: tip then remove pan",
            "Pan removal requires precise grip or hook",
            "Consider order of operations carefully",
            "May need specialized attachment"
        ],
        noHandTouch: false
    },
    {
        number: 11,
        title: "Angler Artifacts",
        description: "Your team has discovered some interesting artifacts at the port. Use the crane to excavate the site.",
        imagePath: "images/mission-11-angler-artifacts.png",
        modelImagePath: "images/mission-11-angler-artifacts.model.png",
        scoring: [
            { condition: "Artifacts are raised above the ground layer", points: 20 },
            { condition: "Bonus: and the crane flag is at least partly lowered", points: 10, bonus: true }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 4,
        priority: "Low",
        strategies: [
            "Complex crane operation required",
            "Flag lowering adds extra challenge for bonus",
            "May require multiple motor controls",
            "Practice precise positioning"
        ],
        noHandTouch: true
    },
    {
        number: 12,
        title: "Salvage Operation",
        description: "An ancient ship discovered at the beach is at risk of further decay. Excavate the vessel without damaging its delicate structure.",
        imagePath: "images/mission-12-salvage-operation.png",
        modelImagePath: "images/mission-12-salvage-operation.model.png",
        scoring: [
            { condition: "Sand is completely cleared", points: 20 },
            { condition: "Ship is completely raised", points: 10 }
        ],
        maxPoints: 30,
        attachmentType: "Active",
        difficulty: 4,
        priority: "Low",
        strategies: [
            "Sand is cleared when pull activator is past the line",
            "Two-part mission requiring careful execution",
            "Ship raising needs gentle lift mechanism",
            "Consider doing if near other beach missions"
        ],
        noHandTouch: true
    }
];

// Additional game information
const gameInfo = {
    precisionTokens: {
        count: 6,
        totalPoints: 50,
        description: "Start with 6 tokens worth 50 points total. Lose tokens for interruptions."
    },
    equipmentInspectionBonus: {
        points: 20,
        description: "All equipment fits in one launch area at start of match"
    },
    matchDuration: "2.5 minutes",
    totalPossiblePoints: 410 // Including all missions + precision + equipment bonus
};

// Application State
let currentMissionIndex = 0;
let currentMode = 'flashcard';
let quizState = {
    type: null,
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: []
};
let userProgress = {
    cardsStudied: new Set(),
    quizzesCompleted: 0,
    totalQuizScore: 0,
    totalQuizQuestions: 0,
    missionMastery: {},
    studyStartTime: Date.now(),
    achievements: new Set()
};

// Load saved progress
function loadProgress() {
    const saved = localStorage.getItem('fllMissionProgress');
    if (saved) {
        const data = JSON.parse(saved);
        userProgress.cardsStudied = new Set(data.cardsStudied || []);
        userProgress.quizzesCompleted = data.quizzesCompleted || 0;
        userProgress.totalQuizScore = data.totalQuizScore || 0;
        userProgress.totalQuizQuestions = data.totalQuizQuestions || 0;
        userProgress.missionMastery = data.missionMastery || {};
        userProgress.studyStartTime = data.studyStartTime || Date.now();
        userProgress.achievements = new Set(data.achievements || []);
    }
}

// Save progress
function saveProgress() {
    const data = {
        cardsStudied: Array.from(userProgress.cardsStudied),
        quizzesCompleted: userProgress.quizzesCompleted,
        totalQuizScore: userProgress.totalQuizScore,
        totalQuizQuestions: userProgress.totalQuizQuestions,
        missionMastery: userProgress.missionMastery,
        studyStartTime: userProgress.studyStartTime,
        achievements: Array.from(userProgress.achievements)
    };
    localStorage.setItem('fllMissionProgress', JSON.stringify(data));
}

// Initialize application
function init() {
    loadProgress();
    setupEventListeners();
    setupKeyboardShortcuts();
    initializeQuickNav();
    updateFlashcard();
    updateStats();
    checkAchievements();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const mode = e.currentTarget.dataset.mode;
            switchMode(mode);
        });
    });

    // Flashcard controls
    document.getElementById('flip-btn').addEventListener('click', flipCard);
    document.getElementById('prev-btn').addEventListener('click', previousMission);
    document.getElementById('next-btn').addEventListener('click', nextMission);
    document.querySelector('.flashcard').addEventListener('click', flipCard);

    // Quiz controls
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.currentTarget.dataset.quizType;
            startQuiz(type);
        });
    });
    document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);
    document.getElementById('quiz-restart').addEventListener('click', restartQuiz);

    // Reference controls
    document.getElementById('sort-by').addEventListener('change', updateReferenceGrid);
    document.getElementById('filter-attachment').addEventListener('change', updateReferenceGrid);

    // Stats controls
    document.getElementById('reset-progress').addEventListener('click', resetProgress);

    // Help modal
    document.getElementById('help-btn').addEventListener('click', showShortcuts);
    document.getElementById('close-modal').addEventListener('click', hideShortcuts);
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (currentMode !== 'flashcard') return;

        switch(e.key) {
            case ' ':
            case 'f':
            case 'F':
                e.preventDefault();
                flipCard();
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                previousMission();
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                nextMission();
                break;
            case '?':
                showShortcuts();
                break;
            case 'Escape':
                hideShortcuts();
                break;
            default:
                // Number keys for quick navigation
                if (e.key >= '1' && e.key <= '9') {
                    const missionIndex = parseInt(e.key) - 1;
                    if (missionIndex < missions.length) {
                        currentMissionIndex = missionIndex;
                        updateFlashcard();
                    }
                }
        }
    });
}

// Mode switching
function switchMode(mode) {
    currentMode = mode;
    
    // Update tab styles
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    
    // Update content visibility
    document.querySelectorAll('.mode-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${mode}-mode`).classList.add('active');
    
    // Initialize mode-specific content
    switch(mode) {
        case 'reference':
            updateReferenceGrid();
            break;
        case 'stats':
            updateStats();
            break;
    }
}

// Flashcard functionality
function updateFlashcard() {
    const mission = missions[currentMissionIndex];
    const card = document.getElementById('flashcard');
    
    // Remove flip state
    card.classList.remove('flipped');
    
    // Update progress
    document.getElementById('current-mission').textContent = currentMissionIndex + 1;
    document.getElementById('total-missions').textContent = missions.length;
    document.getElementById('progress-fill').style.width = 
        `${((currentMissionIndex + 1) / missions.length) * 100}%`;
    
    // Update front - Use model image (just the LEGO model without text)
    document.querySelector('.mission-number').textContent = `Mission ${String(mission.number).padStart(2, '0')}`;
    document.getElementById('mission-image').src = mission.modelImagePath || mission.imagePath;
    document.getElementById('mission-image').alt = `Mission ${mission.number} Model`;
    
    // Update back - Use full mission card image
    document.getElementById('mission-title').textContent = mission.title;
    document.getElementById('mission-number-back').textContent = `Mission ${String(mission.number).padStart(2, '0')}`;
    document.getElementById('full-card-image').src = mission.imagePath;
    document.getElementById('full-card-image').alt = `Mission ${mission.number}: ${mission.title} Full Card`;
    document.getElementById('mission-description').textContent = mission.description;
    
    // Update scoring
    const scoringItems = document.getElementById('scoring-items');
    scoringItems.innerHTML = '';
    mission.scoring.forEach(item => {
        const div = document.createElement('div');
        div.className = 'scoring-item';
        div.innerHTML = `
            <span class="scoring-condition">${item.condition}</span>
            <span class="scoring-points">${item.points}${item.unit ? ' ' + item.unit : ''}</span>
        `;
        scoringItems.appendChild(div);
    });
    document.getElementById('max-points').textContent = mission.maxPoints;
    
    // Update metadata
    document.getElementById('attachment-type').textContent = mission.attachmentType;
    
    // Update difficulty stars
    const difficultyStars = document.getElementById('difficulty-stars');
    difficultyStars.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('div');
        star.className = `star ${i <= mission.difficulty ? 'filled' : 'empty'}`;
        difficultyStars.appendChild(star);
    }
    
    // Update priority
    const priorityElement = document.getElementById('priority');
    priorityElement.textContent = mission.priority;
    priorityElement.className = `priority-badge ${mission.priority.toLowerCase()}`;
    
    // Update strategy tips
    const tipsList = document.getElementById('strategy-tips');
    tipsList.innerHTML = '';
    mission.strategies.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentMissionIndex === 0;
    document.getElementById('next-btn').disabled = currentMissionIndex === missions.length - 1;
    
    // Update quick nav
    updateQuickNavHighlight();
    
    // Track progress
    userProgress.cardsStudied.add(mission.number);
    saveProgress();
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function previousMission() {
    if (currentMissionIndex > 0) {
        currentMissionIndex--;
        updateFlashcard();
    }
}

function nextMission() {
    if (currentMissionIndex < missions.length - 1) {
        currentMissionIndex++;
        updateFlashcard();
    }
}

// Quick navigation
function initializeQuickNav() {
    const grid = document.getElementById('quick-nav-grid');
    grid.innerHTML = '';
    
    missions.forEach((mission, index) => {
        const btn = document.createElement('button');
        btn.className = 'quick-nav-btn';
        btn.textContent = `M${mission.number}`;
        btn.addEventListener('click', () => {
            currentMissionIndex = index;
            updateFlashcard();
        });
        grid.appendChild(btn);
    });
}

function updateQuickNavHighlight() {
    const buttons = document.querySelectorAll('.quick-nav-btn');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentMissionIndex);
        btn.classList.toggle('completed', userProgress.cardsStudied.has(missions[index].number));
    });
}

// Quiz functionality
function startQuiz(type) {
    quizState.type = type;
    quizState.questions = generateQuizQuestions(type);
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answers = [];
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-question').style.display = 'block';
    
    showQuizQuestion();
}

function generateQuizQuestions(type) {
    const questions = [];
    const questionCount = 10;
    
    switch(type) {
        case 'identify':
            // Mission identification questions
            for (let i = 0; i < questionCount; i++) {
                const mission = missions[Math.floor(Math.random() * missions.length)];
                const options = generateMissionOptions(mission, 'title');
                questions.push({
                    type: 'identify',
                    question: `What mission is shown in this image?`,
                    image: mission.modelImagePath || mission.imagePath,
                    correctAnswer: mission.title,
                    options: shuffleArray(options),
                    missionNumber: mission.number
                });
            }
            break;
            
        case 'points':
            // Points matching questions
            for (let i = 0; i < questionCount; i++) {
                const mission = missions[Math.floor(Math.random() * missions.length)];
                const options = generateMissionOptions(mission, 'points');
                questions.push({
                    type: 'points',
                    question: `What is the maximum point value for "${mission.title}"?`,
                    correctAnswer: `${mission.maxPoints} points`,
                    options: shuffleArray(options),
                    missionNumber: mission.number
                });
            }
            break;
            
        case 'strategy':
            // Strategy and attachment questions
            for (let i = 0; i < questionCount; i++) {
                const mission = missions[Math.floor(Math.random() * missions.length)];
                if (Math.random() > 0.5) {
                    // Attachment type question
                    questions.push({
                        type: 'attachment',
                        question: `What type of attachment does "${mission.title}" require?`,
                        correctAnswer: mission.attachmentType,
                        options: shuffleArray(['Active', 'Passive', 'None']),
                        missionNumber: mission.number
                    });
                } else {
                    // Priority question
                    questions.push({
                        type: 'priority',
                        question: `What is the recommended priority level for "${mission.title}"?`,
                        correctAnswer: mission.priority,
                        options: shuffleArray(['High', 'Medium', 'Low']),
                        missionNumber: mission.number
                    });
                }
            }
            break;
            
        case 'mixed':
            // Mix of all question types
            const types = ['identify', 'points', 'attachment', 'priority'];
            for (let i = 0; i < questionCount; i++) {
                const questionType = types[Math.floor(Math.random() * types.length)];
                const mission = missions[Math.floor(Math.random() * missions.length)];
                
                switch(questionType) {
                    case 'identify':
                        const titleOptions = generateMissionOptions(mission, 'title');
                        questions.push({
                            type: 'identify',
                            question: `What mission is shown in this image?`,
                            image: mission.modelImagePath || mission.imagePath,
                            correctAnswer: mission.title,
                            options: shuffleArray(titleOptions),
                            missionNumber: mission.number
                        });
                        break;
                    case 'points':
                        const pointOptions = generateMissionOptions(mission, 'points');
                        questions.push({
                            type: 'points',
                            question: `What is the maximum point value for "${mission.title}"?`,
                            correctAnswer: `${mission.maxPoints} points`,
                            options: shuffleArray(pointOptions),
                            missionNumber: mission.number
                        });
                        break;
                    case 'attachment':
                        questions.push({
                            type: 'attachment',
                            question: `What type of attachment does "${mission.title}" require?`,
                            correctAnswer: mission.attachmentType,
                            options: shuffleArray(['Active', 'Passive', 'None']),
                            missionNumber: mission.number
                        });
                        break;
                    case 'priority':
                        questions.push({
                            type: 'priority',
                            question: `What is the recommended priority level for "${mission.title}"?`,
                            correctAnswer: mission.priority,
                            options: shuffleArray(['High', 'Medium', 'Low']),
                            missionNumber: mission.number
                        });
                        break;
                }
            }
            break;
    }
    
    return questions;
}

function generateMissionOptions(correctMission, type) {
    const options = [];
    
    if (type === 'title') {
        options.push(correctMission.title);
        const otherMissions = missions.filter(m => m.number !== correctMission.number);
        const selectedOthers = shuffleArray(otherMissions).slice(0, 3);
        selectedOthers.forEach(m => options.push(m.title));
    } else if (type === 'points') {
        options.push(`${correctMission.maxPoints} points`);
        const possiblePoints = [10, 20, 30, 40, 50];
        const otherPoints = possiblePoints.filter(p => p !== correctMission.maxPoints);
        shuffleArray(otherPoints).slice(0, 3).forEach(p => options.push(`${p} points`));
    }
    
    return options;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showQuizQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    
    document.getElementById('question-number').textContent = quizState.currentQuestion + 1;
    document.getElementById('total-questions').textContent = quizState.questions.length;
    
    const contentDiv = document.getElementById('question-content');
    contentDiv.innerHTML = '';
    
    // Add question text
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    contentDiv.appendChild(questionText);
    
    // Add image if present
    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        img.className = 'question-image';
        contentDiv.appendChild(img);
    }
    
    // Add options
    const optionsDiv = document.getElementById('question-options');
    optionsDiv.innerHTML = '';
    
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(option));
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('quiz-next').style.display = 'none';
}

function selectAnswer(answer) {
    const question = quizState.questions[quizState.currentQuestion];
    const isCorrect = answer === question.correctAnswer;
    
    quizState.answers.push({
        question: question.question,
        userAnswer: answer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        missionNumber: question.missionNumber
    });
    
    if (isCorrect) {
        quizState.score++;
    }
    
    // Update mission mastery
    if (!userProgress.missionMastery[question.missionNumber]) {
        userProgress.missionMastery[question.missionNumber] = {
            correct: 0,
            total: 0
        };
    }
    userProgress.missionMastery[question.missionNumber].total++;
    if (isCorrect) {
        userProgress.missionMastery[question.missionNumber].correct++;
    }
    
    // Show feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === answer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    document.getElementById('quiz-next').style.display = 'block';
}

function nextQuizQuestion() {
    quizState.currentQuestion++;
    
    if (quizState.currentQuestion >= quizState.questions.length) {
        showQuizResults();
    } else {
        showQuizQuestion();
    }
}

function showQuizResults() {
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const percent = Math.round((quizState.score / quizState.questions.length) * 100);
    
    document.getElementById('score-percent').textContent = `${percent}%`;
    document.getElementById('correct-answers').textContent = quizState.score;
    document.getElementById('total-answers').textContent = quizState.questions.length;
    
    // Update score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.setProperty('--score-percent', percent);
    
    // Show breakdown
    const breakdownDiv = document.getElementById('results-breakdown');
    breakdownDiv.innerHTML = '<h4>Question Breakdown:</h4>';
    
    quizState.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = `breakdown-item ${answer.isCorrect ? 'breakdown-correct' : 'breakdown-incorrect'}`;
        div.innerHTML = `
            <span>Q${index + 1}: ${answer.question.substring(0, 50)}...</span>
            <span>${answer.isCorrect ? '✓' : '✗'}</span>
        `;
        breakdownDiv.appendChild(div);
    });
    
    // Update progress
    userProgress.quizzesCompleted++;
    userProgress.totalQuizScore += quizState.score;
    userProgress.totalQuizQuestions += quizState.questions.length;
    
    // Update quiz score in header
    document.getElementById('quiz-score').textContent = quizState.score;
    document.getElementById('quiz-total').textContent = quizState.questions.length;
    
    saveProgress();
    checkAchievements();
}

function restartQuiz() {
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
    
    // Reset quiz score display
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-total').textContent = '0';
}

// Reference mode
function updateReferenceGrid() {
    const sortBy = document.getElementById('sort-by').value;
    const filterAttachment = document.getElementById('filter-attachment').value;
    
    let filteredMissions = [...missions];
    
    // Apply filter
    if (filterAttachment !== 'all') {
        if (filterAttachment === 'none') {
            filteredMissions = filteredMissions.filter(m => m.attachmentType === 'None');
        } else if (filterAttachment === 'passive') {
            filteredMissions = filteredMissions.filter(m => m.attachmentType === 'Passive');
        } else if (filterAttachment === 'active') {
            filteredMissions = filteredMissions.filter(m => m.attachmentType === 'Active');
        }
    }
    
    // Apply sort
    switch(sortBy) {
        case 'number':
            filteredMissions.sort((a, b) => a.number - b.number);
            break;
        case 'points':
            filteredMissions.sort((a, b) => b.maxPoints - a.maxPoints);
            break;
        case 'difficulty':
            filteredMissions.sort((a, b) => b.difficulty - a.difficulty);
            break;
        case 'priority':
            const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
            filteredMissions.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
            break;
    }
    
    // Render grid
    const grid = document.getElementById('missions-grid');
    grid.innerHTML = '';
    
    filteredMissions.forEach(mission => {
        const card = document.createElement('div');
        card.className = 'mission-card';
        card.innerHTML = `
            <div class="mission-card-header">
                <span class="mission-card-number">Mission ${String(mission.number).padStart(2, '0')}</span>
                <span class="mission-card-points">${mission.maxPoints}pts</span>
            </div>
            <div class="mission-card-title">${mission.title}</div>
            <div class="mission-card-description">${mission.description}</div>
            <div class="mission-card-meta">
                <span class="meta-tag attachment">${mission.attachmentType}</span>
                <span class="meta-tag difficulty">Difficulty: ${mission.difficulty}/5</span>
                <span class="meta-tag priority">${mission.priority} Priority</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            currentMissionIndex = missions.findIndex(m => m.number === mission.number);
            switchMode('flashcard');
            updateFlashcard();
        });
        
        grid.appendChild(card);
    });
    
    // Update total points
    const totalPoints = missions.reduce((sum, m) => sum + m.maxPoints, 0);
    document.getElementById('total-max-points').textContent = 
        `${totalPoints} + 50 (precision) + 20 (equipment) = ${totalPoints + 70}`;
}

// Stats mode
function updateStats() {
    // Cards studied
    document.getElementById('cards-studied').textContent = userProgress.cardsStudied.size;
    
    // Quizzes completed
    document.getElementById('quizzes-completed').textContent = userProgress.quizzesCompleted;
    
    // Average score
    const avgScore = userProgress.totalQuizQuestions > 0 
        ? Math.round((userProgress.totalQuizScore / userProgress.totalQuizQuestions) * 100)
        : 0;
    document.getElementById('average-score').textContent = `${avgScore}%`;
    
    // Study time
    const studyTime = Math.round((Date.now() - userProgress.studyStartTime) / 60000);
    document.getElementById('study-time').textContent = `${studyTime}m`;
    
    // Mission mastery
    const masteryGrid = document.getElementById('mastery-grid');
    masteryGrid.innerHTML = '';
    
    missions.forEach(mission => {
        const mastery = userProgress.missionMastery[mission.number] || { correct: 0, total: 0 };
        const percent = mastery.total > 0 ? Math.round((mastery.correct / mastery.total) * 100) : 0;
        
        const item = document.createElement('div');
        item.className = 'mastery-item';
        item.innerHTML = `
            <div class="mastery-mission">Mission ${mission.number}</div>
            <div class="mastery-bar">
                <div class="mastery-fill" style="width: ${percent}%"></div>
            </div>
            <div class="mastery-percent">${percent}%</div>
        `;
        masteryGrid.appendChild(item);
    });
    
    // Achievements
    updateAchievementsDisplay();
}

// Achievements
const achievements = [
    { id: 'first_card', name: 'First Steps', icon: '🎯', condition: () => userProgress.cardsStudied.size >= 1 },
    { id: 'all_cards', name: 'Mission Master', icon: '📚', condition: () => userProgress.cardsStudied.size === missions.length },
    { id: 'first_quiz', name: 'Quiz Starter', icon: '✅', condition: () => userProgress.quizzesCompleted >= 1 },
    { id: 'quiz_master', name: 'Quiz Master', icon: '🏆', condition: () => userProgress.quizzesCompleted >= 10 },
    { id: 'perfect_quiz', name: 'Perfect Score', icon: '💯', condition: () => {
        return quizState.score === quizState.questions.length && quizState.questions.length > 0;
    }},
    { id: 'study_hour', name: 'Dedicated', icon: '⏰', condition: () => {
        return (Date.now() - userProgress.studyStartTime) >= 3600000;
    }}
];

function checkAchievements() {
    achievements.forEach(achievement => {
        if (achievement.condition() && !userProgress.achievements.has(achievement.id)) {
            userProgress.achievements.add(achievement.id);
            // Could add notification here
        }
    });
    saveProgress();
}

function updateAchievementsDisplay() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = `achievement ${userProgress.achievements.has(achievement.id) ? 'unlocked' : ''}`;
        div.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
        `;
        grid.appendChild(div);
    });
}

// Reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('fllMissionProgress');
        userProgress = {
            cardsStudied: new Set(),
            quizzesCompleted: 0,
            totalQuizScore: 0,
            totalQuizQuestions: 0,
            missionMastery: {},
            studyStartTime: Date.now(),
            achievements: new Set()
        };
        updateStats();
        updateQuickNavHighlight();
        alert('Progress has been reset.');
    }
}

// Shortcuts modal
function showShortcuts() {
    document.getElementById('shortcuts-modal').classList.add('show');
}

function hideShortcuts() {
    document.getElementById('shortcuts-modal').classList.remove('show');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);