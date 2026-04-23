// 恋爱占有欲测试数据（精简30题版）
const testData = {
    questions: [
        // 一、消息与联系篇（1-5题）
        { id: 1, dimension: "消息与联系", text: "对方超过1小时不回消息，我会烦躁不安。" },
        { id: 2, dimension: "消息与联系", text: "我会因为对方回消息慢而生气或冷战。" },
        { id: 3, dimension: "消息与联系", text: "我希望对方每天主动跟我汇报行程。" },
        { id: 4, dimension: "消息与联系", text: "对方不接电话，我会一直打到接通为止。" },
        { id: 5, dimension: "消息与联系", text: "对方忙工作不看手机，我会觉得被忽视。" },

        // 二、社交与异性篇（6-10题）
        { id: 6, dimension: "社交与异性", text: "对方和异性正常说话，我会吃醋。" },
        { id: 7, dimension: "社交与异性", text: "我不允许对方有关系好的异性朋友。" },
        { id: 8, dimension: "社交与异性", text: "对方和前任有联系，我会立刻爆发。" },
        { id: 9, dimension: "社交与异性", text: "对方参加有异性的聚会，我会强烈反对。" },
        { id: 10, dimension: "社交与异性", text: "对方夸别人好看，我会非常不爽。" },

        // 三、控制与边界篇（11-15题）
        { id: 11, dimension: "控制与边界", text: "我希望对方所有密码都告诉我。" },
        { id: 12, dimension: "控制与边界", text: "我会限制对方的娱乐和社交活动。" },
        { id: 13, dimension: "控制与边界", text: "对方去哪都必须带上我，否则不开心。" },
        { id: 14, dimension: "控制与边界", text: "我会偷偷翻看对方的聊天记录。" },
        { id: 15, dimension: "控制与边界", text: "我觉得爱一个人就该完全占有。" },

        // 四、情绪与安全感篇（16-20题）
        { id: 16, dimension: "情绪与安全感", text: "对方稍微冷淡，我就觉得不爱我了。" },
        { id: 17, dimension: "情绪与安全感", text: "我总担心对方会喜欢上别人。" },
        { id: 18, dimension: "情绪与安全感", text: "我很难信任对方，总觉得有隐瞒。" },
        { id: 19, dimension: "情绪与安全感", text: "我会反复确认对方到底爱不爱我。" },
        { id: 20, dimension: "情绪与安全感", text: "我把占有欲强当成爱的证明。" },

        // 五、时间与陪伴篇（21-25题）
        { id: 21, dimension: "时间与陪伴", text: "我希望对方所有空闲时间都陪我。" },
        { id: 22, dimension: "时间与陪伴", text: "对方和朋友出去玩，我会不开心。" },
        { id: 23, dimension: "时间与陪伴", text: "我觉得陪伴少就是不爱。" },
        { id: 24, dimension: "时间与陪伴", text: "我希望时刻和对方黏在一起。" },
        { id: 25, dimension: "时间与陪伴", text: "我会要求对方推掉聚会来陪我。" },

        // 六、占有与底线篇（26-30题）
        { id: 26, dimension: "占有与底线", text: "我不允许对方对别人比对我好。" },
        { id: 27, dimension: "占有与底线", text: "对方不秀恩爱，我会觉得没安全感。" },
        { id: 28, dimension: "占有与底线", text: "我很难接受对方有私人空间。" },
        { id: 29, dimension: "占有与底线", text: "我会用分手威胁对方听我的。" },
        { id: 30, dimension: "占有与底线", text: "对方晚归，我会盘问每一个细节。" }
    ],

    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    results: [
        {
            level: "佛系恋人",
            minScore: 0,
            maxScore: 30,
            icon: "🌸",
            title: "佛系恋人",
            desc: "你的占有欲极弱，极度尊重对方的自由。这种态度让关系轻松舒适，但也要注意不要过度疏离。",
            advice: ["继续保持你的信任和包容", "适时表达你的在乎和关心", "在给予自由的同时保持联系"]
        },
        {
            level: "健康占有欲",
            minScore: 31,
            maxScore: 45,
            icon: "💕",
            title: "健康占有欲",
            desc: "你的占有欲恰到好处，会在意但有边界，相处舒服。这是最理想的恋爱状态！",
            advice: ["继续保持健康的相处模式", "在关心和自由间保持平衡", "用沟通代替猜疑"]
        },
        {
            level: "占有欲偏高",
            minScore: 46,
            maxScore: 60,
            icon: "🍋",
            title: "占有欲偏高",
            desc: "你比较容易缺乏安全感，可能会给对方带来一定压力。需要学会放松和信任。",
            advice: ["建立自信，相信自己是值得被爱的", "给彼此一些私人空间", "用沟通代替控制"]
        },
        {
            level: "占有欲很强",
            minScore: 61,
            maxScore: 75,
            icon: "👑",
            title: "占有欲很强",
            desc: "你的控制欲比较明显，容易让关系感到窒息。需要意识到爱是给予而非占有。",
            advice: ["学会信任对方", "尊重伴侣的独立性", "寻找安全感的其他来源"]
        },
        {
            level: "占有欲爆表",
            minScore: 76,
            maxScore: 90,
            icon: "❤️",
            title: "占有欲爆表",
            desc: "你的占有欲极度强烈，容易让关系走向崩溃。建议反思自己的依恋模式，必要时寻求专业帮助。",
            advice: ["认识到过度占有的危害", "学习健康的亲密关系模式", "考虑寻求心理咨询"]
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
            <button class="option-item" onclick="selectOption(${option.value})">
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

    const buttons = document.querySelectorAll('.option-item');
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
    
    // 绘制雷达图
    const radarContainer = document.getElementById('resultRadar');
    if (radarContainer && typeof drawRadarChart === 'function') {
        const { scores, labels } = calculateDimensionScores(answers, testData.questions);
        drawRadarChart('resultRadar', scores, labels);
    }
    
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
