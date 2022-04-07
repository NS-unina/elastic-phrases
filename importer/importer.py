import os
import csv
from elasticsearch import Elasticsearch,helpers


def p(text):
    print("[+] {}".format(text))

def elk_login():
    # es = Elasticsearch([{'scheme': 'http', 'host': 'localhost', 'port': 9200}])
    p("Login to {}".format(os.environ['ELK_URL']))
    es = Elasticsearch(os.environ['ELK_URL'])
    return es


es = elk_login()
p("Logged")
with open('phrases.csv') as f:
    reader = csv.DictReader(f)
    helpers.bulk(es, reader, index='phrases')
    p("Data uploaded")

# phrases = pd.read_csv('phrases.csv')
# data = bulk_import(phrases)
# actions = [data]

# helpers.bulk(es, actions)