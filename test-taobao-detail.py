import requests

def fetch_taobao_detail():
    """获取淘宝商品详情页"""
    # 使用一个真实的淘宝商品URL
    url = "https://item.taobao.com/item.htm?id=626514123456"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Referer': 'https://www.taobao.com/',
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        print(f"Status: {response.status_code}")
        print(f"Content length: {len(response.text)}")

        # 保存到文件
        with open('taobao_detail.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        print("Saved to taobao_detail.html")

        # 分析HTML
        content = response.text
        print(f"\nFirst 2000 chars:")
        print(content[:2000])

        # 查找商品标题
        import re
        title_match = re.search(r'<meta name="title" content="([^"]*)"', content)
        if title_match:
            print(f"\nTitle: {title_match.group(1)}")

        # 查找商品价格
        price_match = re.search(r'<span class="tb-rmb-num">([^<]+)</span>', content)
        if price_match:
            print(f"Price: ¥{price_match.group(1)}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    fetch_taobao_detail()
