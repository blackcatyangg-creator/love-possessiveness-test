// 恋爱中的你是"付出型"还是"被爱型"测试数据
const testData = {
    questions: [
        { id: 1, text: "约会时，我更愿意主动规划路线和流程。" },
        { id: 2, text: "我会主动记住对方的喜好，并悄悄准备惊喜。" },
        { id: 3, text: "吵架后，我通常是先低头求和的那一个。" },
        { id: 4, text: "我会优先考虑对方的需求，再考虑自己。" },
        { id: 5, text: "我不介意为对方牺牲自己的空闲时间。" },
        { id: 6, text: "我希望对方能多依赖我，让我有被需要的感觉。" },
        { id: 7, text: "对方生病或难过时，我会一直陪在身边照顾。" },
        { id: 8, text: "我会主动帮对方解决生活中的麻烦。" },
        { id: 9, text: "我不喜欢让对方为我做太多事，怕麻烦对方。" },
        { id: 10, text: "即使自己受委屈，也不想让对方担心。" },
        { id: 11, text: "我会主动迁就对方的脾气和习惯。" },
        { id: 12, text: "我更享受'照顾对方'的感觉，而非'被照顾'。" },
        { id: 13, text: "对方忘记重要日子，我会原谅，而不是生气。" },
        { id: 14, text: "我会主动和对方沟通，避免冷战。" },
        { id: 15, text: "我觉得'爱一个人，就是无条件付出'。" },
        { id: 16, text: "旅行或周末计划时，我更喜欢对方来决定，我跟着走就好。" },
        { id: 17, text: "我喜欢收到礼物、被夸赞或被对方主动照顾的感觉。" },
        { id: 18, text: "当我心情不好时，我希望对方能第一时间哄我，而不是我去照顾他/她。" },
        { id: 19, text: "我很少主动表达自己的需求，怕给对方增加负担。" },
        { id: 20, text: "在关系中，我更享受被宠、被迁就的感觉，而不是一直付出。" }
    ],

    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    results: [
        {
            level: "纯被爱型",
            minScore: 0,
            maxScore: 15,
            icon: "👑",
            title: "纯被爱型（小公主/小王子模式）",
            desc: "你习惯享受被照顾、被迁就的感觉，需要对方主动付出才能感受到爱。优点是让对方有成就感，缺点是偶尔显得被动。",
            advice: ["多尝试主动一点，关系会更甜蜜", "学会表达感谢和回应对方的爱", "偶尔也给对方制造惊喜"]
        },
        {
            level: "轻度被爱型",
            minScore: 16,
            maxScore: 30,
            icon: "💝",
            title: "轻度被爱型",
            desc: "你偏向享受被爱，但也会适当回应。相处轻松，但要注意别让对方一直单方面付出。",
            advice: ["保持现在的平衡状态", "多关注对方的需求", "适时主动付出一些"]
        },
        {
            level: "平衡型",
            minScore: 31,
            maxScore: 45,
            icon: "⚖️",
            title: "平衡型（最舒服模式）",
            desc: "你懂得相互付出，也愿意接受照顾。理性又温暖，是理想的恋爱类型！",
            advice: ["继续保持现在的相处模式", "保持沟通，及时调整", "珍惜这段健康的关系"]
        },
        {
            level: "偏付出型",
            minScore: 46,
            maxScore: 55,
            icon: "🛡️",
            title: "偏付出型（深情守护者）",
            desc: "你愿意投入很多，但容易忽略自己需求。优点是有责任心，缺点是长期会觉得累。",
            advice: ["学会表达自己的需要", "不要一味牺牲自己", "找一个懂得珍惜你的人"]
        },
        {
            level: "纯付出型",
            minScore: 56,
            maxScore: 60,
            icon: "❤️",
            title: "纯付出型（无私奉献者）",
            desc: "你把对方放在第一位，爱得非常深沉，但容易迷失自我。",
            advice: ["记得爱自己", "找一个懂得珍惜你付出的对象", "学会说'不'", "保持自我独立性"]
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
