// MBTI人格测试数据
const testData = {
    questions: [
        { id: 1, dimension: "E/I", text: "我更喜欢热闹的聚会，而不是独处。" },
        { id: 2, dimension: "S/N", text: "我更关注眼前的事实，而不是未来的想象。" },
        { id: 3, dimension: "T/F", text: "做决定时，我更看重逻辑和利弊，而不是情绪。" },
        { id: 4, dimension: "J/P", text: "我喜欢提前规划，不喜欢临时变动。" },
        { id: 5, dimension: "E/I", text: "我能快速和陌生人打成一片。" },
        { id: 6, dimension: "S/N", text: "我喜欢尝试新鲜事物，对未知充满好奇。" },
        { id: 7, dimension: "T/F", text: "我容易被情绪影响，做决定会感情用事。" },
        { id: 8, dimension: "J/P", text: "我喜欢灵活应对，不喜欢被计划束缚。" },
        { id: 9, dimension: "E/I", text: "社交后，我会觉得精力充沛，而不是疲惫。" },
        { id: 10, dimension: "S/N", text: "我更相信自己的经验，而不是直觉。" },
        { id: 11, dimension: "T/F", text: "我不喜欢情绪化的人，觉得不够成熟。" },
        { id: 12, dimension: "J/P", text: "我会按时完成任务，不喜欢拖延。" },
        { id: 13, dimension: "E/I", text: "我乐于分享自己的想法，不介意被别人了解。" },
        { id: 14, dimension: "S/N", text: "我喜欢思考事物的本质，而不是表面现象。" },
        { id: 15, dimension: "T/F", text: "我能理解别人的情绪，愿意倾听和安慰。" },
        { id: 16, dimension: "J/P", text: "我不喜欢提前规划，觉得顺其自然更好。" }
    ],

    options: [
        { value: 3, label: "A", text: "完全符合" },
        { value: 2, label: "B", text: "比较符合" },
        { value: 1, label: "C", text: "不太符合" },
        { value: 0, label: "D", text: "完全不符合" }
    ],

    results: [
        {
            type: "ESTJ",
            title: "实干家",
            desc: "理性、果断、有责任心，擅长组织和管理，注重效率。",
            advice: ["发挥你的领导力", "学会倾听他人意见", "适当放松自己"]
        },
        {
            type: "ESFJ",
            title: "守护者",
            desc: "热心、体贴、善解人意，擅长照顾别人，重视人际关系。",
            advice: ["保持你的热心", "学会设定边界", "不要过度付出"]
        },
        {
            type: "ISTJ",
            title: "检查员",
            desc: "严谨、细心、可靠，喜欢按规则办事，注重细节。",
            advice: ["保持你的可靠性", "学会灵活变通", "适当表达情感"]
        },
        {
            type: "ISFJ",
            title: "照顾者",
            desc: "温柔、善良、有耐心，乐于付出，重视家庭和朋友。",
            advice: ["学会爱自己", "表达你的需求", "不要压抑自己"]
        },
        {
            type: "ESTP",
            title: "企业家",
            desc: "活泼、开朗、务实，喜欢冒险，擅长应对突发情况。",
            advice: ["保持你的活力", "学会长期规划", "考虑他人感受"]
        },
        {
            type: "ESFP",
            title: "表演者",
            desc: "热情、外向、乐观，喜欢热闹，擅长表达自己。",
            advice: ["保持你的热情", "学会专注", "培养耐心"]
        },
        {
            type: "ISTP",
            title: "手艺人",
            desc: "冷静、理性、灵活，动手能力强，喜欢解决实际问题。",
            advice: ["发挥你的动手能力", "学会表达情感", "建立深层关系"]
        },
        {
            type: "ISFP",
            title: "艺术家",
            desc: "敏感、细腻、温柔，热爱生活，注重内心感受。",
            advice: ["保持你的敏感", "学会表达自己", "建立自信"]
        },
        {
            type: "ENTJ",
            title: "指挥官",
            desc: "自信、果断、有领导力，擅长规划，目标感强。",
            advice: ["发挥你的领导力", "学会倾听", "关注团队感受"]
        },
        {
            type: "ENFJ",
            title: "教育家",
            desc: "热情、有感染力，擅长引导和鼓励别人，重视成长。",
            advice: ["保持你的热情", "学会照顾自己", "不要过度承担"]
        },
        {
            type: "INTJ",
            title: "战略家",
            desc: "理性、睿智、有远见，擅长思考，追求完美。",
            advice: ["发挥你的智慧", "学会表达情感", "接受不完美"]
        },
        {
            type: "INFJ",
            title: "咨询师",
            desc: "敏感、深刻、有同理心，擅长洞察人心，重视精神契合。",
            advice: ["保持你的敏感", "学会保护自己", "表达真实想法"]
        },
        {
            type: "ENTP",
            title: "辩论家",
            desc: "聪明、机智、思维活跃，喜欢挑战，擅长创新。",
            advice: ["保持你的创造力", "学会专注", "考虑实际执行"]
        },
        {
            type: "ENFP",
            title: "追梦人",
            desc: "乐观、热情、有创造力，喜欢新鲜事物，重视自我成长。",
            advice: ["保持你的热情", "学会坚持", "建立稳定习惯"]
        },
        {
            type: "INTP",
            title: "逻辑学家",
            desc: "理性、冷静、善于思考，喜欢钻研，注重逻辑。",
            advice: ["发挥你的逻辑思维", "学会表达情感", "关注实际应用"]
        },
        {
            type: "INFP",
            title: "调停者",
            desc: "温柔、敏感、有理想，重视内心真实感受，追求意义。",
            advice: ["保持你的理想", "学会面对现实", "表达自己"]
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
        <div class="question-dimension">维度: ${question.dimension}</div>
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
    answers.push({
        dimension: testData.questions[currentQuestionIndex].dimension,
        value: value,
        questionId: testData.questions[currentQuestionIndex].id
    });
    
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

// 计算MBTI类型
function calculateMBTI(answers) {
    let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
    
    answers.forEach(answer => {
        const dim = answer.dimension;
        const val = answer.value;
        
        // 根据题目ID和维度计算倾向
        switch(answer.questionId) {
            case 1: // E/I - 更喜欢聚会
                if (val >= 2) E += val; else I += (3 - val);
                break;
            case 2: // S/N - 关注事实
                if (val >= 2) S += val; else N += (3 - val);
                break;
            case 3: // T/F - 看重逻辑
                if (val >= 2) T += val; else F += (3 - val);
                break;
            case 4: // J/P - 喜欢规划
                if (val >= 2) J += val; else P += (3 - val);
                break;
            case 5: // E/I - 快速打成一片
                if (val >= 2) E += val; else I += (3 - val);
                break;
            case 6: // S/N - 喜欢新鲜事物
                if (val >= 2) N += val; else S += (3 - val);
                break;
            case 7: // T/F - 被情绪影响
                if (val >= 2) F += val; else T += (3 - val);
                break;
            case 8: // J/P - 灵活应对
                if (val >= 2) P += val; else J += (3 - val);
                break;
            case 9: // E/I - 社交后精力充沛
                if (val >= 2) E += val; else I += (3 - val);
                break;
            case 10: // S/N - 相信经验
                if (val >= 2) S += val; else N += (3 - val);
                break;
            case 11: // T/F - 不喜欢情绪化
                if (val >= 2) T += val; else F += (3 - val);
                break;
            case 12: // J/P - 按时完成任务
                if (val >= 2) J += val; else P += (3 - val);
                break;
            case 13: // E/I - 乐于分享
                if (val >= 2) E += val; else I += (3 - val);
                break;
            case 14: // S/N - 思考本质
                if (val >= 2) N += val; else S += (3 - val);
                break;
            case 15: // T/F - 理解情绪
                if (val >= 2) F += val; else T += (3 - val);
                break;
            case 16: // J/P - 不喜欢规划
                if (val >= 2) P += val; else J += (3 - val);
                break;
        }
    });
    
    let type = '';
    type += E >= I ? 'E' : 'I';
    type += S >= N ? 'S' : 'N';
    type += T >= F ? 'T' : 'F';
    type += J >= P ? 'J' : 'P';
    
    return type;
}

// 显示结果
function showResult() {
    document.getElementById('testPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    
    const mbtiType = calculateMBTI(answers);
    const result = testData.results.find(r => r.type === mbtiType);
    
    document.getElementById('resultIcon').textContent = mbtiType;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultScore').textContent = mbtiType + '型';
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
