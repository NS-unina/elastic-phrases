build:
	docker build -t importer .

import: build
	docker run -it -e ELK_URL="http://es-container:9200" --net=elastic-phrases_es-net --name importer --rm importer

clean:
	docker rm -f importer
	# docker run -it -e ELK_URL="http://es-container:9200" --net=elastic-phrases_es-net --name importer --rm importer