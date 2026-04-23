// 动物塑人格测试数据
const testData = {
    questions: [
        { id: 1, text: "我性格温顺，不喜欢和别人发生冲突。" },
        { id: 2, text: "我很黏人，喜欢待在亲近的人身边。" },
        { id: 3, text: "遇到危险时，我会第一时间躲起来。" },
        { id: 4, text: "我很聪明，能快速适应新环境。" },
        { id: 5, text: "我性格傲娇，不擅长表达自己的心意。" },
        { id: 6, text: "我很有活力，喜欢蹦蹦跳跳、充满热情。" },
        { id: 7, text: "我很独立，不喜欢依赖别人。" },
        { id: 8, text: "我很警惕，对陌生人有很强的防备心。" },
        { id: 9, text: "我很温柔，擅长照顾别人、安慰别人。" },
        { id: 10, text: "我很慵懒，喜欢宅着，不喜欢动。" },
        { id: 11, text: "我很有领导力，能带领身边的人做事。" },
        { id: 12, text: "我很敏感，容易被别人的情绪影响。" },
        { id: 13, text: "我很调皮，喜欢捉弄身边的人。" },
        { id: 14, text: "我很稳重，做事情很靠谱。" },
        { id: 15, text: "我很害羞，在陌生人面前会很拘谨。" },
        { id: 16, text: "我很勇敢，遇到困难不会轻易退缩。" },
        { id: 17, text: "我很佛系，对很多事情都不在乎。" },
        { id: 18, text: "我很细心，能注意到别人忽略的细节。" }
    ],

    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    results: [
        {
            animal: "猫咪塑",
            minScore: 0,
            maxScore: 18,
            icon: "🐱",
            title: "猫咪塑",
            desc: "傲娇慵懒，敏感细腻，看似冷漠，实则黏人，不喜欢被束缚，有自己的小脾气，可爱又迷人。",
            advice: ["保持你的独特个性", "学会表达情感", "找到懂你的人"]
        },
        {
            animal: "狗狗塑",
            minScore: 19,
            maxScore: 32,
            icon: "🐶",
            title: "狗狗塑",
            desc: "热情忠诚，温顺黏人，擅长照顾别人，对亲近的人毫无保留，活泼又可靠，是身边人的'小太阳'。",
            advice: ["保持你的热情", "学会保护自己", "找到珍惜你的人"]
        },
        {
            animal: "兔子塑",
            minScore: 33,
            maxScore: 45,
            icon: "🐰",
            title: "兔子塑",
            desc: "温柔害羞，胆小敏感，不喜欢冲突，擅长回避麻烦，软萌可爱，需要别人的保护和照顾。",
            advice: ["学会勇敢", "表达自己", "建立自信"]
        },
        {
            animal: "狐狸塑",
            minScore: 46,
            maxScore: 54,
            icon: "🦊",
            title: "狐狸塑",
            desc: "聪明灵动，独立警惕，傲娇又调皮，擅长适应新环境，有自己的小想法，迷人又有个性。",
            advice: ["发挥你的聪明才智", "学会信任他人", "保持独特魅力"]
        }
    ]
};

// 测试状态
let currentQuestionIndex = 0;
let answers = [];

// 开始测试
function startTest() {
    document.getElementById('coverPage').style.display = 'none';
    document.getElementById('testPage').style.display = 'block';
    currentQuestionIndex = 0;
    answers = [];
    showQuestion();
    updateProgress();
}

// 显示题目
function showQuestion() {
    const container = document.getElementById('questionContainer');
    const question = testData.questions[currentQuestionIndex];
    
    let html = `
        <h3 class="question-title">${question.id}. ${question.text}</h3>
        <div class="options-list">
    `;
    
    testData.options.forEach(option => {
        html += `
            <button class="option-btn" onclick="selectOption(${option.value})">
                ${option.label}. ${option.text}
            </button>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// 选择选项
function selectOption(value) {
    answers.push(value);
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes(value === 3 ? 'A' : value === 2 ? 'B' : value === 1 ? 'C' : 'D')) {
            btn.classList.add('selected');
        }
    });
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < testData.questions.length) {
            showQuestion();
            updateProgress();
        } else {
            showResult();
        }
    }, 300);
}

// 更新进度
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / testData.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = testData.questions.length;
}

// 显示结果
function showResult() {
    document.getElementById('testPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    
    const totalScore = answers.reduce((a, b) => a + b, 0);
    const result = testData.results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultScore').textContent = totalScore + '分';
    document.getElementById('resultDesc').textContent = result.desc;
    
    let adviceHtml = '<h4>💡 建议</h4><ul>';
    result.advice.forEach(item => {
        adviceHtml += `<li>${item}</li>`;
    });
    adviceHtml += '</ul>';
    document.getElementById('resultDetails').innerHTML = adviceHtml;
    
    // 触发撒花特效
    if (typeof confetti !== 'undefined') {
        confetti.start(5000);
    }
}

// 重新测试
function restartTest() {
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('coverPage').style.display = 'flex';
    currentQuestionIndex = 0;
    answers = [];
}
