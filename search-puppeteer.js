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
  // 搜索Puppeteer电商爬虫
  console.log('=== 搜索Puppeteer电商爬虫 ===');
  const result = await searchRepo('puppeteer+spider+language:javascript stars:>100');
  if (result.items && result.items.length > 0) {
    result.items.slice(0, 5).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log(`   URL: ${repo.html_url}`);
      console.log('');
    });
  }

  // 搜索Playwright爬虫
  console.log('=== 搜索Playwright爬虫 ===');
  const result2 = await searchRepo('playwright+spider+language:javascript stars:>100');
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
