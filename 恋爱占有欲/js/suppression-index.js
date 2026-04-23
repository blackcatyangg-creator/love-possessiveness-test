// 性压抑指数测试数据
const testData = {
    questions: [
        { id: 1, text: "看到情侣公开亲热，我会偷偷多看几眼而不是立刻移开视线。" },
        { id: 2, text: "晚上独处时，我经常会产生一些大胆的幻想。" },
        { id: 3, text: "我不太喜欢在亲密时主动表达自己的需求。" },
        { id: 4, text: "讨论性相关话题时，我会觉得尴尬或脸红。" },
        { id: 5, text: "我希望伴侣能更主动一些，让我不用太操心。" },
        { id: 6, text: "看到性感穿着或照片时，我内心会小鹿乱撞但表面很淡定。" },
        { id: 7, text: "我很少主动提出新奇的亲密玩法。" },
        { id: 8, text: "压抑情绪时，我会通过运动或工作转移，而不是直接释放。" },
        { id: 9, text: "我享受被'掌控'的感觉，但很少说出口。" },
        { id: 10, text: "看爱情电影里的激情戏，我会代入自己但不会告诉别人。" },
        { id: 11, text: "我觉得性是私密的，不喜欢和朋友过多讨论。" },
        { id: 12, text: "伴侣不在时，我会用某些方式自我满足但觉得有点羞耻。" },
        { id: 13, text: "我更喜欢传统温柔的方式，而不是太激烈的。" },
        { id: 14, text: "听到别人分享大胆经历，我表面平静内心却有点羡慕+不安。" },
        { id: 15, text: "我很少在关系中完全放开自己。" },
        { id: 16, text: "幻想被宠爱或轻微'欺负'时，我会觉得兴奋。" },
        { id: 17, text: "我担心自己的某些偏好会被伴侣觉得奇怪。" },
        { id: 18, text: "亲密后我喜欢立刻恢复'正常'状态。" },
        { id: 19, text: "我对性相关内容很感兴趣，但实际行动比较保守。" },
        { id: 20, text: "我觉得适度压抑能让关系更有张力。" }
    ],

    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    results: [
        {
            level: "极度开放",
            minScore: 0,
            maxScore: 15,
            icon: "🔥",
            title: "极度开放（天生尤物，放得开）",
            desc: "你在亲密方面很自在，敢于表达和尝试。伴侣通常觉得跟你在一起很刺激，继续保持你的魅力！",
            advice: ["保持你的开放态度", "注意伴侣的舒适度", "享受亲密关系"]
        },
        {
            level: "健康微闷",
            minScore: 16,
            maxScore: 30,
            icon: "😊",
            title: "健康微闷（正常人，偶尔需要刺激）",
            desc: "你有正常欲望，也会适度控制。生活平衡，偶尔来点小惊喜就能点燃激情，很健康的状态～",
            advice: ["继续保持平衡", "偶尔尝试新事物", "和伴侣多沟通"]
        },
        {
            level: "中度压抑",
            minScore: 31,
            maxScore: 45,
            icon: "🤫",
            title: "中度压抑（内心小剧场丰富，表面正经）",
            desc: "你有很多幻想，但行动上比较保守。容易积累张力。建议：找信任的伴侣安全释放，会更舒服。",
            advice: ["学会表达真实想法", "找信任的人倾诉", "尝试慢慢打开自己"]
        },
        {
            level: "重度压抑",
            minScore: 46,
            maxScore: 60,
            icon: "😶",
            title: "重度压抑（建议找方式释放，别憋坏了）",
            desc: "你把很多欲望藏得很深，表面淡定内心波澜壮阔。长期压抑可能影响心情和关系。建议：通过沟通或健康方式慢慢打开自己。",
            advice: ["寻求专业帮助", "通过健康方式释放", "学会接纳自己", "和伴侣坦诚沟通"]
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
