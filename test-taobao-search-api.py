import requests
import json

def test_taobao_search_api():
    """测试淘宝搜索API"""

    # 淘宝搜索API - 使用正确的API端点
    api_url = "https://api.m.taobao.com/rh/mtop.taobao.wireless.search.searchitemlist/1.0/"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://m.taobao.com',
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    # 请求参数
    data = {
        'app_key': '12574478',
        't': '1711090000',
        'sign': 'test',
        'api': 'mtop.taobao.wireless.search.searchitemlist',
        'v': '1.0',
        'data': json.dumps({
            'q': '手机',
            'startPrice': '',
            'endPrice': '',
            'sort': 'p',
            'pageId': 1,
            'pageSize': 20,
        })
    }

    try:
        response = requests.post(api_url, headers=headers, data=data, timeout=10)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text[:500]}")

        # 解析响应
        if response.status_code == 200:
            result = response.json()
            print(f"\nResult: {json.dumps(result, ensure_ascii=False, indent=2)[:1000]}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    test_taobao_search_api()
