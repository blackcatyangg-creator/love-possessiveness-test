// 测试模板 - 复制此文件并重命名为你的测试名称.js
// 然后修改下面的数据

const testData = {
    // 题目列表
    questions: [
        { id: 1, dimension: "维度1", text: "这里是题目1的内容" },
        { id: 2, dimension: "维度1", text: "这里是题目2的内容" },
        { id: 3, dimension: "维度2", text: "这里是题目3的内容" },
        // 添加更多题目...
    ],

    // 选项配置
    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    // 结果等级
    results: [
        {
            level: "结果A",
            minScore: 0,
            maxScore: 10,
            icon: "🌸",
            title: "结果A标题",
            desc: "结果A的详细描述",
            advice: ["建议1", "建议2", "建议3"]
        },
        {
            level: "结果B",
            minScore: 11,
            maxScore: 20,
            icon: "💕",
            title: "结果B标题",
            desc: "结果B的详细描述",
            advice: ["建议1", "建议2", "建议3"]
        }
        // 添加更多结果...
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
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const result = testData.results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);
    
    document.getElementById('testPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'flex';
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultScore').textContent = totalScore + '分';
    document.getElementById('resultDesc').textContent = result.desc;
    
    const detailsHtml = `
        <h3>💡 给你的建议</h3>
        <ul>
            ${result.advice.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    document.getElementById('resultDetails').innerHTML = detailsHtml;
}

// 重新测试
function restartTest() {
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('coverPage').style.display = 'flex';
    currentQuestionIndex = 0;
    answers = [];
}
