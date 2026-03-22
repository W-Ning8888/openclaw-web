import requests
from bs4 import BeautifulSoup

def test():
    test=get_urls('http://s.1688.com/company/company_search.htm?keywords=%E7%94%B5%E5%95%86&pageSize=30',1)
    urls = test.get_url()
    print(f"Found {len(urls)} URLs")
    if urls:
        print(f"First URL: {urls[0]}")
        # 获取第一个URL的详情
        url = urls[0]
        headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        try:
            response = requests.get(url, headers=headers, timeout=10)
            print(f"Detail page status: {response.status_code}")
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                # 尝试找标题
                title = soup.find('h1') or soup.find('div', class_='title')
                if title:
                    print(f"Title: {title.get_text().strip()}")
        except Exception as e:
            print(f"Error fetching detail: {e}")

def get_urls(url, page):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
    }
    try:
        response = requests.get(url+'&beginPage='+str(page), headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        table = soup.find('div', attrs={'id':'sw_mod_mainblock'}).find('ul').find_all('div', attrs={'class':'list-item-left'})
        urls = []
        for item in table:
            urls.append(item.find('a').get('href'))
        return urls
    except Exception as e:
        print(f"Error getting URLs: {e}")
        return []

if __name__ == '__main__':
    test()
