import requests
import json

def test_taobao_api():
    """测试淘宝移动端搜索API"""

    # 淘宝移动端搜索API
    api_url = "https://h5api.m.taobao.com/h5/mtop.taobao.wireless.search.searchitemlist/1.0/"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://m.taobao.com',
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    # 简化参数
    data = {
        'q': '手机',
        'startPrice': '',
        'endPrice': '',
        'sort': 'p',
        'pageId': 1,
        'pageSize': 20,
    }

    try:
        response = requests.post(api_url, headers=headers, data=data, timeout=10)
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text[:500]}")

        # 解析响应
        if response.status_code == 200:
            data = response.json()
            print(f"\nResponse keys: {data.keys()}")
            if 'data' in data and data['data']:
                print(f"Data keys: {data['data'].keys()}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    test_taobao_api()
