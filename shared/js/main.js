// 通用功能

// 创建飘落星星和星光粒子
document.addEventListener('DOMContentLoaded', function() {
    createFallingStars();
    createStarParticles();
    createCardStars();
});

function createFallingStars() {
    const container = document.getElementById('fallingStars');
    if (!container) return;

    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 4 + 5) + 's';
        star.style.opacity = Math.random() * 0.6 + 0.4;

        // 随机大小
        const size = Math.random() * 3 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 9000);
    }, 600);
}

// 创建星光粒子
function createStarParticles() {
    const container = document.getElementById('starParticles');
    if (!container) return;

    // 创建固定数量的星光粒子
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'star-particle';

        // 随机位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // 随机动画延迟
        particle.style.animationDelay = Math.random() * 3 + 's';

        // 随机大小
        const size = Math.random() * 2 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        container.appendChild(particle);
    }
}

// 创建卡牌星光 - 神秘华丽版
function createCardStars() {
    const cardStarsContainers = document.querySelectorAll('.card-stars');

    cardStarsContainers.forEach((container, containerIndex) => {
        const starCount = parseInt(container.dataset.stars) || 8;
        const isComingSoon = container.closest('.card-coming-soon') !== null;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'card-star';

            // 30%概率生成紫色星光，敬请期待卡牌50%概率
            const isPurple = isComingSoon ? Math.random() < 0.5 : Math.random() < 0.3;
            if (isPurple) {
                star.classList.add('purple');
            }

            // 随机位置（避开中央文字区域）
            let left, top;
            const zone = Math.random();

            if (zone < 0.25) {
                // 顶部区域
                left = Math.random() * 100;
                top = Math.random() * 25;
            } else if (zone < 0.5) {
                // 底部区域
                left = Math.random() * 100;
                top = 75 + Math.random() * 25;
            } else if (zone < 0.75) {
                // 左侧区域
                left = Math.random() * 20;
                top = Math.random() * 100;
            } else {
                // 右侧区域
                left = 80 + Math.random() * 20;
                top = Math.random() * 100;
            }

            star.style.left = left + '%';
            star.style.top = top + '%';

            // 随机动画延迟，让每个星星闪烁时间不同
            star.style.animationDelay = Math.random() * 3 + 's';

            // 随机大小 (2px - 5px)
            const size = Math.random() * 3 + 2;
            star.style.width = size + 'px';
            star.style.height = size + 'px';

            // 随机动画时长
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';

            container.appendChild(star);
        }
    });
}

// 分享功能
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: '来看看我的测试结果吧！',
            url: window.location.href
        }).catch(err => console.log('分享失败', err));
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('链接已复制到剪贴板！');
        });
    }
}
