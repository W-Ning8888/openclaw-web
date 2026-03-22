const { execSync } = require('child_process');

const communities = [
  {
    name: 'GitHub',
    url: 'https://github.com/signup',
    registerUrl: 'https://github.com/signup'
  },
  {
    name: 'V2EX',
    url: 'https://www.v2ex.com',
    registerUrl: 'https://www.v2ex.com/apply'
  },
  {
    name: '掘金',
    url: 'https://juejin.cn',
    registerUrl: 'https://juejin.cn/register'
  },
  {
    name: '知乎',
    url: 'https://www.zhihu.com',
    registerUrl: 'https://www.zhihu.com/signup'
  },
  {
    name: 'CSDN',
    url: 'https://www.csdn.net',
    registerUrl: 'https://www.csdn.net/register'
  }
];

console.log('=== 社区注册计划 ===\n');

communities.forEach((community, index) => {
  console.log(`${index + 1}. ${community.name}`);
  console.log(`   社区主页: ${community.url}`);
  console.log(`   注册链接: ${community.registerUrl}`);
  console.log('');
});

console.log('=== 执行步骤 ===\n');
console.log('1. 打开浏览器，访问注册链接');
console.log('2. 按照模板填写注册信息');
console.log('3. 完善个人资料');
console.log('4. 发布第一篇内容');
console.log('5. 在社区互动交流');
console.log('');

console.log('=== 参考模板 ===');
console.log('请查看 register-templates.md 文件');
console.log('');

console.log('=== 推荐顺序 ===');
console.log('1. GitHub (最优先，技术社区)');
console.log('2. V2EX (程序员社区)');
console.log('3. 掘金 (技术博客)');
console.log('4. 知乎 (知识分享)');
console.log('5. CSDN (技术文档)');
console.log('');

console.log('=== 开始执行 ===');
console.log('请打开浏览器，从GitHub开始注册');
