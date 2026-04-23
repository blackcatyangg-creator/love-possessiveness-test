// 情感依恋模式测试数据
const testData = {
    questions: [
        { id: 1, text: "我很容易相信我与伴侣的关系，不担心他们会离开我。" },
        { id: 2, text: "当伴侣不在身边时，我会感到焦虑并不断思考他们是否爱我。" },
        { id: 3, text: "我喜欢保持一定的距离，不喜欢别人对我太过亲密。" },
        { id: 4, text: "我通常对伴侣保持开放和支持的态度，即使我们遇到困难。" },
        { id: 5, text: "当伴侣回避我时，我会感到被抛弃并变得焦虑。" },
        { id: 6, text: "我不太喜欢在关系中展现过多的情感需求，觉得这不太合适。" },
        { id: 7, text: "我很少会怀疑我的伴侣是否关心我，并且我相信他们会支持我。" },
        { id: 8, text: "我在关系中常常感到不安全，认为伴侣可能不够爱我。" },
        { id: 9, text: "我的伴侣可能会觉得我对他们过于依赖，我有时甚至会觉得自己太粘人了。" },
        { id: 10, text: "在感情关系中，我很难表达我的需求，尤其是需要情感支持时。" },
        { id: 11, text: "我觉得亲密关系中的爱和信任是最重要的，我会尽力维护这些。" },
        { id: 12, text: "有时候我会感到困惑或不确定，自己在亲密关系中所扮演的角色。" },
        { id: 13, text: "我容易被我的伴侣的反应或行为所影响，尤其是当他们没有给我足够关注时。" },
        { id: 14, text: "在爱情关系中，我有时会感到自己不被理解或是被冷落。" },
        { id: 15, text: "我在亲密关系中会感到满足，因为我知道我的伴侣是可信赖的。" }
    ],

    options: [
        { value: 1, label: "A", text: "完全不符合" },
        { value: 2, label: "B", text: "有点不符合" },
        { value: 3, label: "C", text: "不确定/中立" },
        { value: 4, label: "D", text: "有点符合" },
        { value: 5, label: "E", text: "完全符合" }
    ],

    results: [
        {
            level: "回避型依恋",
            minScore: 15,
            maxScore: 30,
            icon: "🛡️",
            title: "回避型依恋",
            desc: "你可能习惯于保持情感上的距离，避免过度依赖他人。这种类型的人通常在亲密关系中感觉不自在，可能会避免太多的情感亲密。",
            advice: [
                "尝试逐步打开心扉，与伴侣分享你的感受",
                "认识到依赖他人并不是软弱的表现",
                "学习接受伴侣的关心和支持",
                "给自己一些时间适应亲密关系中的亲密感"
            ]
        },
        {
            level: "焦虑型依恋",
            minScore: 31,
            maxScore: 50,
            icon: "💭",
            title: "焦虑型依恋",
            desc: "你可能在亲密关系中感到不安全，经常担心伴侣是否爱你，容易感到被忽视或被抛弃。",
            advice: [
                "建立自信，相信自己的价值",
                "与伴侣坦诚沟通你的不安感受",
                "学会自我安抚，不要过度依赖伴侣的确认",
                "寻找关系中的安全感来源"
            ]
        },
        {
            level: "安全型依恋",
            minScore: 51,
            maxScore: 65,
            icon: "🌟",
            title: "安全型依恋",
            desc: "你在亲密关系中感到安心，能够相互信任并且有健康的情感表达。这是最理想的依恋类型！",
            advice: [
                "继续保持健康的沟通方式",
                "在关系中保持独立与依赖的平衡",
                "用你的安全感帮助伴侣成长",
                "珍惜并维护这段健康的关系"
            ]
        },
        {
            level: "混乱型依恋",
            minScore: 66,
            maxScore: 75,
            icon: "🌊",
            title: "混乱型依恋",
            desc: "你在亲密关系中可能经历过不稳定的情感波动，可能会表现出回避和依赖的矛盾行为。",
            advice: [
                "寻求专业心理咨询的帮助",
                "尝试理解自己情感波动的根源",
                "学习建立稳定的情感模式",
                "给自己时间和耐心去疗愈"
            ]
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
        if (btn.textContent.includes(value === 5 ? 'E' : value === 4 ? 'D' : value === 3 ? 'C' : value === 2 ? 'B' : 'A')) {
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
}

// 重新测试
function restartTest() {
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('coverPage').style.display = 'flex';
    currentQuestionIndex = 0;
    answers = [];
}
