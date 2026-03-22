const https = require('https');

async function fetchTaobao() {
  // 使用淘宝搜索页
  const url = 'https://s.taobao.com/search?q=手机&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20240101&ie=utf8';

  const options = {
    hostname: 's.taobao.com',
    path: '/search?q=手机&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20240101&ie=utf8',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Referer': 'https://www.taobao.com/'
    }
  };

  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('Fetching Taobao search page...');
    const html = await fetchTaobao();
    console.log(`Fetched ${html.length} bytes`);

    // 保存到文件
    require('fs').writeFileSync('taobao_search.html', html, 'utf-8');
    console.log('Saved to taobao_search.html');

    // 分析HTML
    const fs = require('fs');
    const content = html.substring(0, 5000);
    console.log('First 5000 chars:', content);

  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
