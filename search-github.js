const https = require('https');

function searchRepo(query) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/search/repositories?q=' + encodeURIComponent(query) + '&per_page=5',
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
  console.log('=== 搜索 Python 爬虫项目 ===');
  const result = await searchRepo('python+scrapy+web+scraping');
  if (result.items && result.items.length > 0) {
    result.items.slice(0, 3).forEach((repo, i) => {
      console.log(`${i+1}. ${repo.full_name}`);
      console.log(`   Stars: ${repo.stargazers_count}`);
      console.log(`   Description: ${repo.description || 'N/A'}`);
      console.log('');
    });
  } else {
    console.log('No results found');
  }
}

main().catch(console.error);
