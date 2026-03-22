import requests
import re
import json

def find_api_in_html(html):
    """在HTML中查找API接口"""
    # 查找包含api参数的URL
    api_urls = re.findall(r'(https://s.taobao.com[^"\']*api[^"\']*)', html)
    print(f"Found {len(api_urls)} API URLs:")
    for i, url in enumerate(api_urls[:5], 1):
        print(f"{i}. {url[:100]}...")

    # 查找JSON数据
    json_matches = re.findall(r'var\s+g_page_id\s*=\s*"?(\d+)"?', html)
    if json_matches:
        print(f"\nFound g_page_id: {json_matches[0]}")

    # 查找淘宝的API域名
    taobao_apis = re.findall(r'https://[a-z0-9-]+\.taobao\.com/[a-z0-9_/]+', html)
    print(f"\nFound {len(taobao_apis)} Taobao URLs:")
    for i, url in enumerate(taobao_apis[:5], 1):
        print(f"{i}. {url}")

def test_api_calls():
    """测试直接调用API"""
    base_url = "https://h5api.m.taobao.com/h5/mtop.taobao.wireless.search.searchitemlist/1.0/"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://m.taobao.com',
    }

    # 尝试调用API
    try:
        response = requests.get(base_url, headers=headers, timeout=10)
        print(f"\nAPI Status: {response.status_code}")
        if response.status_code == 200:
            print(f"API Response: {response.text[:500]}")
    except Exception as e:
        print(f"API Error: {e}")

def main():
    # 读取之前保存的HTML
    with open('taobao_search.html', 'r', encoding='utf-8') as f:
        html = f.read()

    print("Analyzing HTML for API endpoints...")
    find_api_in_html(html)

    print("\n\nTesting API calls...")
    test_api_calls()

if __name__ == '__main__':
    main()
