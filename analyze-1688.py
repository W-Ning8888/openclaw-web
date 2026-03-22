import requests
from bs4 import BeautifulSoup
import json

def analyze_page():
    url = 'http://s.1688.com/company/company_search.htm?keywords=%E7%94%B5%E5%95%86&pageSize=30'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        print(f"Status: {response.status_code}")
        print(f"Content length: {len(response.text)}")

        # 保存原始HTML到文件
        with open('1688_page.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        print("Saved to 1688_page.html")

        # 分析HTML结构
        soup = BeautifulSoup(response.text, 'html.parser')

        # 查找所有div元素
        all_divs = soup.find_all('div')
        print(f"\nTotal divs found: {len(all_divs)}")

        # 查找带class的div
        divs_with_class = [d for d in all_divs if d.get('class')]
        print(f"Divs with class: {len(divs_with_class)}")

        # 查找id
        divs_with_id = [d for d in all_divs if d.get('id')]
        print(f"Divs with id: {len(divs_with_id)}")

        # 查找list-item-left
        list_items = soup.find_all('div', class_='list-item-left')
        print(f"Divs with class 'list-item-left': {len(list_items)}")

        # 打印前5个list-item-left的内容
        if list_items:
            print("\n=== First 5 list-item-left elements ===")
            for i, item in enumerate(list_items[:5]):
                print(f"\nItem {i+1}:")
                print(f"  HTML: {str(item)[:300]}")

        # 保存部分HTML用于分析
        with open('1688_analysis.html', 'w', encoding='utf-8') as f:
            f.write(str(soup)[:10000])
        print("\nSaved analysis to 1688_analysis.html")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == '__main__':
    analyze_page()
