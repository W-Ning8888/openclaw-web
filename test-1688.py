import requests
from bs4 import BeautifulSoup

# 测试直接访问1688
url = 'http://s.1688.com/company/company_search.htm?keywords=%E7%94%B5%E5%95%86&pageSize=30'

headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
}

try:
    response = requests.get(url, headers=headers, timeout=10)
    print(f"Status: {response.status_code}")
    print(f"Length: {len(response.text)}")

    # 解析前1000个字符看看内容
    if response.status_code == 200:
        soup = BeautifulSoup(response.text[:2000], 'html.parser')
        print("First 2000 chars:", soup.prettify()[:500])
    else:
        print("Failed to fetch:", response.text[:500])

except Exception as e:
    print(f"Error: {e}")
