// Confetti 撒花特效
class Confetti {
    constructor() {
        this.colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#ff9eb5', '#5fb3d9', '#87ceeb'];
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: -20,
            size: Math.random() * 10 + 5,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        };
    }

    start(duration = 3000) {
        if (!this.canvas) {
            this.createCanvas();
        }
        
        // 创建初始粒子
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.particles.push(this.createParticle());
            }, i * 20);
        }
        
        this.animate();
        
        // 自动停止
        setTimeout(() => {
            this.stop();
        }, duration);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(particle => {
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.rotation += particle.rotationSpeed;
            particle.opacity -= 0.005;
            
            if (particle.opacity <= 0 || particle.y > this.canvas.height) {
                return false;
            }
            
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate((particle.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            
            // 绘制爱心形状
            this.ctx.beginPath();
            const size = particle.size;
            this.ctx.moveTo(0, -size / 2);
            this.ctx.bezierCurveTo(-size / 2, -size, -size, -size / 3, 0, size / 2);
            this.ctx.bezierCurveTo(size, -size / 3, size / 2, -size, 0, -size / 2);
            this.ctx.fill();
            
            this.ctx.restore();
            
            return true;
        });
        
        if (this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.remove();
            this.canvas = null;
        }
        this.particles = [];
    }
}

// 全局 confetti 实例
const confetti = new Confetti();

// 显示结果时触发撒花
function showResultWithConfetti() {
    showResult();
    confetti.start(5000); // 撒花5秒
}
