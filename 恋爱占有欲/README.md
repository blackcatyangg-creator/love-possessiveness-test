# 黑猫测测 - 趣味心理测试网站

一个基于 GitHub Pages 的静态心理测试网站，可以轻松添加新的测试。

## 网站结构

```
.
├── index.html              # 网站主页（测试列表）
├── css/
│   ├── style.css          # 通用样式
│   └── test.css           # 测试页面样式
├── js/
│   ├── main.js            # 通用功能
│   ├── love-possessiveness.js  # 恋爱占有欲测试
│   └── template.js        # 测试模板
├── tests/
│   ├── love-possessiveness.html  # 恋爱占有欲测试页面
│   └── template.html      # 测试页面模板
├── images/                # 图片文件夹
└── README.md             # 说明文档
```

## 如何添加新测试

### 1. 复制模板文件

```bash
# 复制模板 HTML 文件
cp tests/template.html tests/你的测试名称.html

# 复制模板 JS 文件
cp js/template.js js/你的测试名称.js
```

### 2. 修改 HTML 文件

打开 `tests/你的测试名称.html`，修改以下内容：

- **标题**：`<title>测试标题 - 黑猫测测</title>`
- **测试名称**：`<h1 class="cover-title">🎯 测试标题</h1>`
- **描述**：`<p class="cover-subtitle">测试副标题描述</p>`
- **题目数量**：修改三个 `<span class="cover-stat-number">XX</span>`
- **JS 文件引用**：`<script src="../js/你的测试名称.js"></script>`
- **图片**：`<img src="../images/你的图片.png" alt="测试图片">`

### 3. 修改 JS 文件

打开 `js/你的测试名称.js`，修改以下内容：

#### 题目数据
```javascript
questions: [
    { id: 1, dimension: "维度1", text: "题目内容" },
    { id: 2, dimension: "维度1", text: "题目内容" },
    // 添加更多题目...
]
```

#### 结果等级
```javascript
results: [
    {
        level: "结果A",
        minScore: 0,      // 最低分数
        maxScore: 10,     // 最高分数
        icon: "🌸",       // 结果图标
        title: "结果A标题",
        desc: "结果描述",
        advice: ["建议1", "建议2", "建议3"]
    }
    // 添加更多结果...
]
```

### 4. 添加到首页

打开 `index.html`，在 `<main class="test-grid">` 中添加新的测试卡片：

```html
<a href="tests/你的测试名称.html" class="test-card">
    <div class="test-image">
        <img src="images/你的图片.png" alt="测试名称">
    </div>
    <div class="test-info">
        <h3 class="test-title">🎯 测试名称</h3>
        <p class="test-desc">测试描述</p>
        <div class="test-meta">
            <span class="test-count">XX题</span>
            <span class="test-tag">标签</span>
        </div>
    </div>
</a>
```

### 5. 上传图片

将测试封面图片放入 `images/` 文件夹。

## 部署到 GitHub Pages

1. 将所有文件提交到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 Deploy from a branch
4. Branch 选择 main → / (root)
5. 保存后等待部署完成
6. 访问 `https://你的用户名.github.io/仓库名/`

## 自定义样式

### 修改颜色主题

编辑 `css/style.css` 中的颜色变量：

```css
background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 50%, #ffd1e8 100%);
```

### 修改字体

在 `css/style.css` 中修改 `font-family`。

## 注意事项

1. 所有文件路径使用相对路径（如 `../css/style.css`）
2. 图片建议使用 PNG 或 JPG 格式
3. 每个测试的题目建议 10-60 道
4. 结果等级建议 3-5 个

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- GitHub Pages (托管)

## License

MIT License
