#黑猫测测 - 神秘塔罗心理测试

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://blackcatyangg-creator.github.io/love-possessiveness-test/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> 揭开命运的神秘面纱，探索内心深处的真实自我

![网站预览](images/preview.png)

## ✨ 特色

- 🔮 **紫罗兰梦幻风格** - 神秘的紫色主题，营造塔罗占卜氛围
- 🎴 **翻牌交互效果** - 3D卡片翻转，增强神秘感
- ✨ **动态视觉效果** - 飘落星星、能量光环、星光粒子
- 📱 **响应式设计** - 完美适配手机、平板、电脑
- ⚡ **纯前端实现** - 无需后端，GitHub Pages直接部署

## 🎯 测试列表

| 测试名称 | 题目数量 | 测试维度 |
|---------|---------|---------|
| 💕 恋爱占有欲测试 | 30题 | 6大维度深度解析 |
| 💙 回避型依恋测试 | 25题 | 他是回避还是不喜欢 |
| 💜 ECR依恋模式测试 | 36题 | 专业四象限分析 |

## 🚀 快速开始

### 在线体验
直接访问：**https://blackcatyangg-creator.github.io/love-possessiveness-test/**

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/blackcatyangg-creator/love-possessiveness-test.git

# 进入目录
cd love-possessiveness-test

# 启动本地服务器
python3 -m http.server 5555

# 浏览器访问 http://localhost:5555
```

## 📁 项目结构

```
.
├── index.html              # 网站主页
├── shared/                 # 共享资源
│   ├── css/
│   │   ├── style.css      # 通用样式（紫罗兰主题）
│   │   └── test.css       # 测试页面样式
│   ├── js/
│   │   ├── main.js        # 通用功能
│   │   ├── love-possessiveness.js
│   │   ├── attachment-style.js
│   │   └── ...
│   └── images/            # 图片资源
├── tests/                  # 测试页面
│   ├── 恋爱占有欲/
│   ├── 回避型测试/
│   └── ECR依恋测试/
└── README.md
```

## 🎨 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 动画、渐变、滤镜效果
- **JavaScript** - 原生JS，无框架依赖
- **GitHub Pages** - 免费托管

## 🌟 核心功能

### 1. 7点量表评分系统
- A. 非常不赞成
- B. 比较不赞成
- C. 有点不赞成
- D. 中立
- E. 有点赞成
- F. 比较赞成
- G. 非常赞成

### 2. 四象限结果展示
- 安全型依恋
- 痴迷型依恋
- 疏离型依恋
- 恐惧型依恋

### 3. 视觉特效
- 四角装饰图腾
- 飘落星星背景
- 神秘指针动画
- 能量光环效果
- 星光粒子系统

## 📝 如何添加新测试

1. 在 `tests/` 目录下创建新文件夹
2. 复制 `tests/template/index.html` 作为模板
3. 在 `shared/js/` 创建测试逻辑文件
4. 在 `index.html` 添加测试卡片

## 🔧 自定义主题

编辑 `shared/css/style.css` 修改颜色变量：

```css
:root {
  --primary-color: #ba90c6;      /* 主色调 */
  --secondary-color: #9370db;    /* 次要色 */
  --accent-color: #eec8b8;       /* 强调色 */
  --bg-dark: #1a161e;            /* 深色背景 */
}
```

## 📄 许可证

MIT License © 2026 黑猫测测

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

<p align="center">
  <sub>✦ 命运的指引，从这里开始 ✦</sub>
</p>
