import requests
import re
import json

def fetch_taobao_search():
    """获取淘宝搜索页面"""
    url = "https://s.taobao.com/search?q=手机&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20240101&ie=utf8"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Referer': 'https://www.taobao.com/'
    }

    response = requests.get(url, headers=headers, timeout=10)
    return response.text

def extract_products(html):
    """从HTML中提取商品数据"""
    # 查找包含商品数据的script标签
    script_tags = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)

    products = []

    for script in script_tags:
        # 查找包含商品数据的变量
        if 'mods' in script and 'itemlist' in script:
            # 尝试提取JSON数据
            json_match = re.search(r'var\s+mods\s*=\s*(\{.*?\});', script, re.DOTALL)
            if json_match:
                try:
                    data = json.loads(json_match.group(1))
                    if 'itemlist' in data:
                        items = data['itemlist']['data']['auctions']
                        print(f"Found {len(items)} products")
                        for i, item in enumerate(items[:3], 1):
                            print(f"\nProduct {i}:")
                            print(f"  Title: {item.get('title', 'N/A')[:100]}")
                            print(f"  Price: {item.get('view_price', 'N/A')}")
                            print(f"  URL: {item.get('detail_url', 'N/A')}")
                            products.append({
                                'title': item.get('title', ''),
                                'price': item.get('view_price', ''),
                                'url': item.get('detail_url', '')
                            })
                except Exception as e:
                    print(f"Error parsing JSON: {e}")

    return products

def main():
    print("Fetching Taobao search page...")
    html = fetch_taobao_search()
    print(f"Fetched {len(html)} bytes")

    print("\nExtracting products...")
    products = extract_products(html)

    print(f"\nTotal products extracted: {len(products)}")

    # 保存到JSON文件
    with open('taobao_products.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)

    print("Saved to taobao_products.json")

if __name__ == '__main__':
    main()
