const fs = require('fs');

const userInfo = {
  githubUsername: 'W-Ning8888',
  githubUrl: 'https://github.com/W-Ning8888',
  repoUrl: 'https://github.com/W-Ning8888/openclaw-web',
  email: 'W-Ning8888@github.com',
  name: 'Echo'
};

const communities = [
  {
    name: 'GitHub',
    registerUrl: 'https://github.com/signup',
    postUrl: 'https://github.com/new',
    postFile: 'github_post.txt',
    description: '最优先，技术社区',
    steps: [
      '1. 访问 https://github.com/signup 注册账号',
      '2. 创建仓库: ai-side-hustle',
      '3. 完善个人资料',
      '4. 复制 github_post.txt 内容',
      '5. 发布第一篇文章'
    ]
  },
  {
    name: 'V2EX',
    registerUrl: 'https://www.v2ex.com/apply',
    postUrl: 'https://www.v2ex.com/mission/day',
    postFile: 'v2ex_post.txt',
    description: '程序员社区',
    steps: [
      '1. 访问 https://www.v2ex.com/apply 注册',
      '2. 完善个人资料',
      '3. 复制 v2ex_post.txt 内容',
      '4. 发布自我介绍帖',
      '5. 回答相关问题增加曝光'
    ]
  },
  {
    name: '掘金',
    registerUrl: 'https://juejin.cn/register',
    postUrl: 'https://juejin.cn/post',
    postFile: 'juejin_post.txt',
    description: '技术博客',
    steps: [
      '1. 访问 https://juejin.cn/register 注册',
      '2. 完善个人资料',
      '3. 复制 juejin_post.txt 内容',
      '4. 发布第一篇文章',
      '5. 回答问题增加曝光'
    ]
  },
  {
    name: '知乎',
    registerUrl: 'https://www.zhihu.com/signup',
    postUrl: 'https://www.zhihu.com/question',
    postFile: 'zhihu_post.txt',
    description: '知识分享',
    steps: [
      '1. 访问 https://www.zhihu.com/signup 注册',
      '2. 完善个人资料',
      '3. 复制 zhihu_post.txt 内容',
      '4. 回答相关问题',
      '5. 关注相关话题'
    ]
  },
  {
    name: 'CSDN',
    registerUrl: 'https://www.csdn.net/register',
    postUrl: 'https://blog.csdn.net',
    postFile: 'csdn_post.txt',
    description: '技术文档',
    steps: [
      '1. 访问 https://www.csdn.net/register 注册',
      '2. 完善个人资料',
      '3. 复制 csdn_post.txt 内容',
      '4. 发布第一篇文章',
      '5. 添加标签增加曝光'
    ]
  }
];

console.log('=== 社区注册和发帖计划 ===\n');

communities.forEach((community, index) => {
  console.log(`${index + 1}. ${community.name}`);
  console.log(`   ${community.description}`);
  console.log(`   注册链接: ${community.registerUrl}`);
  console.log(`   发布链接: ${community.postUrl}`);
  console.log('');
  console.log('执行步骤:');
  community.steps.forEach(step => console.log(`   ${step}`));
  console.log('');
});

console.log('=== 已生成的发帖内容 ===');
Object.keys(communities).forEach(key => {
  const community = communities[key];
  console.log(`${key + 1}. ${community.name}: ${community.postFile}`);
});

console.log('\n=== 推荐执行顺序 ===');
console.log('1. GitHub (最优先)');
console.log('2. V2EX (程序员社区)');
console.log('3. 掘金 (技术博客)');
console.log('4. 知乎 (知识分享)');
console.log('5. CSDN (技术文档)');
console.log('\n=== 提示 ===');
console.log('- 每个平台注册后，完善个人资料');
console.log('- 发布内容后，告诉我，我帮你继续推广');
console.log('- 持续在各个平台互动，增加曝光');
console.log('- 定期更新项目进展');
