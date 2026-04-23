// 雷达图可视化 - 简化版
function drawRadarChart(containerId, scores, labels) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    const count = scores.length;
    
    // 绘制背景网格
    ctx.strokeStyle = '#ffe4ec';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        const r = (radius / 5) * i;
        for (let j = 0; j <= count; j++) {
            const angle = (Math.PI * 2 * j) / count - Math.PI / 2;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    
    // 绘制轴线
    ctx.strokeStyle = '#ffb6c1';
    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        ctx.stroke();
        
        // 绘制标签
        const labelX = centerX + (radius + 25) * Math.cos(angle);
        const labelY = centerY + (radius + 25) * Math.sin(angle);
        ctx.fillStyle = '#666';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i] || '', labelX, labelY);
    }
    
    // 绘制数据
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 105, 180, 0.3)';
    ctx.strokeStyle = '#ff69b4';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
        const value = Math.min(scores[i] / 100, 1);
        const r = radius * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // 绘制数据点
    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
        const value = Math.min(scores[i] / 100, 1);
        const r = radius * value;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff69b4';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// 计算各维度得分
function calculateDimensionScores(answers, questions) {
    const dimensions = {};
    const dimensionCounts = {};
    
    questions.forEach((q, index) => {
        const dim = q.dimension;
        if (!dimensions[dim]) {
            dimensions[dim] = 0;
            dimensionCounts[dim] = 0;
        }
        dimensions[dim] += answers[index] || 0;
        dimensionCounts[dim]++;
    });

    const scores = [];
    const labels = [];
    for (const dim in dimensions) {
        const maxScore = dimensionCounts[dim] * 3;
        const percentage = maxScore > 0 ? (dimensions[dim] / maxScore) * 100 : 0;
        scores.push(percentage);
        labels.push(dim);
    }
    
    return { scores, labels };
}
