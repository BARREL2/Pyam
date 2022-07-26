from flask import Flask, render_template #追加
from flask import request
import pyshorteners

from amazon.paapi import AmazonAPI
key = ""
secret = ""
tag = ""
country = ""

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title='Amagety')

@app.route('/search', methods = ['POST', 'GET'])
def search():
    flag=0
    sizeList = {9:"小",18:"中",27:"大"}
    if request.method == 'POST':
        if len(request.form['keyword'])>0:
            flag=1
            item_count = int(request.form.get('valueSelect'))
            sizeSelect = str(request.form.get('sizeSelect')) + "rem"
            keywords = request.form['keyword']
            amazon = AmazonAPI(key, secret, tag, country)
            products = amazon.search_products(item_count = item_count, keywords = keywords)
            urls = urlList(products)
            #outputHtml = '<div class="card" style="width: 18rem;"><img src="{{product.images.medium}}" class="card-img-top"><div class="card-body"><h5 class="card-title overflow-auto">{{product.title}}</h5><p class="card-text">価格:{{product.prices.price.value |int}}円</p><div class="align-self-center p-2"><button class="btn btn-outline-primary"><a href="{{ product.url }}" target="_blank"><span class="text-dark">Amazonで詳細を見る</span></a></button></div></div>'
            return render_template('search.html', title='Amagety | 商品検索', products=products,flag=flag,keywords=keywords,urls=urls,sizeList=sizeList,sizeSelect=sizeSelect)
        else:
            flag=2
            message = "※Notice:文字を入力してください"
            return render_template('search.html', title='Amagety | 商品検索',flag=flag,message=message)
    else:
        flag=0
        sizeSelect = str(request.form.get('sizeSelect')) + "rem"
        return render_template('search.html', title='Amagety | 商品検索',flag=flag,sizeList=sizeList)

def urlList(list):
    ulist = []
    for p in list:
        surl = pyshorteners.Shortener().tinyurl.short(p.url)
        ulist.append(surl)
    urls = "\n".join(ulist)
    return urls

## 起動のおまじない
if __name__ == "__main__":
    app.run(debug=True)