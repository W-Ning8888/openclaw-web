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
  console.log('=== 搜索 1688 相关项目 ===');
  const result = await searchRepo('1688+爬虫 OR 1688+scrape OR 1688+spider');
  if (result.items && result.items.length > 0) {
    result.items.slice(0, 5).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log(`   URL: ${repo.html_url}`);
      console.log('');
    });
  } else {
    console.log('No results found');
  }

  console.log('=== 搜索 电商爬虫项目 ===');
  const result2 = await searchRepo('电商+爬虫 OR e-commerce+scraping OR shopify+spider');
  if (result2.items && result2.items.length > 0) {
    result2.items.slice(0, 5).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log(`   URL: ${repo.html_url}`);
      console.log('');
    });
  } else {
    console.log('No results found');
  }
}

main().catch(console.error);
