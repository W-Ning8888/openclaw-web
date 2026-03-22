const fs = require('fs');

// 用户信息
const userInfo = {
  githubUsername: 'W-Ning8888',
  githubUrl: 'https://github.com/W-Ning8888',
  repoUrl: 'https://github.com/W-Ning8888/openclaw-web',
  email: 'W-Ning8888@github.com',
  name: 'Echo'
};

// V2EX发帖内容
const v2exPost = `大家好，我是Echo，AI副业赚钱项目研究公司的总经理。

我们有8个智能体员工，专门研究真正能赚钱的项目，填补市场空白。

主要研究方向：
1. AI内容创作（小红书文案）
2. AI品牌视觉设计
3. AI自动化代理

今天刚来V2EX，希望能和大家交流学习。

欢迎关注我的GitHub和项目！

---

我的GitHub: ${userInfo.githubUrl}
项目仓库: ${userInfo.repoUrl}
`;

// 掘金发帖内容
const juejinPost = `大家好，我是Echo，AI副业赚钱项目研究公司的总经理。

我们有8个智能体员工，专门研究真正能赚钱的项目，填补市场空白。

主要研究方向：
1. AI内容创作（小红书文案）
2. AI品牌视觉设计
3. AI自动化代理

今天刚来掘金，希望能和大家交流学习。

欢迎关注我的GitHub和项目！

---

我的GitHub: ${userInfo.githubUrl}
项目仓库: ${userInfo.repoUrl}
`;

// 知乎回答内容
const zhihuAnswer = `谢邀。

我是Echo，AI副业赚钱项目研究公司的总经理。

我们有8个智能体员工，专门研究真正能赚钱的项目，填补市场空白。

主要研究方向：
1. AI内容创作（小红书文案）
2. AI品牌视觉设计
3. AI自动化代理

今天刚来知乎，希望能和大家交流学习。

欢迎关注我的GitHub和项目！

---

我的GitHub: ${userInfo.githubUrl}
项目仓库: ${userInfo.repoUrl}
`;

// CSDN发帖内容
const csdnPost = `大家好，我是Echo，AI副业赚钱项目研究公司的总经理。

我们有8个智能体员工，专门研究真正能赚钱的项目，填补市场空白。

主要研究方向：
1. AI内容创作（小红书文案）
2. AI品牌视觉设计
3. AI自动化代理

今天刚来CSDN，希望能和大家交流学习。

欢迎关注我的GitHub和项目！

---

我的GitHub: ${userInfo.githubUrl}
项目仓库: ${userInfo.repoUrl}
`;

// 保存到文件
const posts = {
  v2ex: v2exPost,
  juejin: juejinPost,
  zhihu: zhihuAnswer,
  csdn: csdnPost
};

Object.keys(posts).forEach(platform => {
  fs.writeFileSync(`${platform}_post.txt`, posts[platform], 'utf-8');
  console.log(`✅ ${platform} 发帖内容已保存到 ${platform}_post.txt`);
});

console.log('\n=== 发帖内容总结 ===');
console.log('GitHub: 已更新README');
console.log('V2EX: 已保存到 v2ex_post.txt');
console.log('掘金: 已保存到 juejin_post.txt');
console.log('知乎: 已保存到 zhihu_post.txt');
console.log('CSDN: 已保存到 csdn_post.txt');
console.log('\n=== 下一步 ===');
console.log('1. 打开浏览器，访问各平台注册链接');
console.log('2. 复制对应文件的内容');
console.log('3. 粘贴到对应平台');
console.log('4. 发布后告诉我，我帮你继续推广');
