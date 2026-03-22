const https = require('https');

function searchRepo(query) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/search/repositories?q=' + encodeURIComponent(query) + '&per_page=10',
      headers: {
        'User-Agent': 'OpenClaw-Gateway',
        'Accept': 'application/vnd.github.v3+json'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('=== 搜索不需要登录的1688工具 ===');
  const result = await searchRepo('1688+export+OR+1688+api+OR+1688+数据+导出');
  if (result.items && result.items.length > 0) {
    result.items.slice(0, 5).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log(`   URL: ${repo.html_url}`);
      console.log('');
    });
  }

  console.log('=== 搜索淘宝/1688 商品数据API ===');
  const result2 = await searchRepo('淘宝+商品+API+OR+电商+数据+API+OR+1688+api');
  if (result2.items && result2.items.length > 0) {
    result2.items.slice(0, 5).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log(`   URL: ${repo.html_url}`);
      console.log('');
    });
  }
}

main().catch(console.error);
