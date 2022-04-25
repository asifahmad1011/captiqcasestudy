import hashlib
import datetime
import requests

from marvel.settings import PRIVATE_KEY, PUBLIC_KEY
from django.core.cache import cache

def get_marvel_data():
    marvel_api_data = cache.get("data")
    if not marvel_api_data:
        ts = str(datetime.timedelta())
        msg = ts + PRIVATE_KEY + PUBLIC_KEY
        # message = open(msg, "r", encoding='utf-8')
        hash = hashlib.md5(msg.encode('utf-8')).hexdigest()
        marvel_url = f'https://gateway.marvel.com/v1/public/characters?ts={ts}&apikey={PUBLIC_KEY}&hash={hash}'
        # print(marvelurl)
        marvel_data = requests.get(marvel_url).json()
        cache.set("data", marvel_data)
        marvel_api_data = cache.get("data")
        print("data loaded and cached....")

        return marvel_api_data
    else:
        marvel_api_data = cache.get("data")
        print("data returned from cache....")
        return marvel_api_data

def get_image_thumbnail():

    marvel_image_url = f'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_xlarge.jpg'
    image_thumbnail = requests.get(marvel_image_url)
    return image_thumbnail