FROM python:3.9.16-bullseye

WORKDIR /app
RUN apt-get update && apt-get install -y gcc

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY phrases.csv phrases.csv
COPY run.sh /app/run.sh
COPY importer.py /app/importer.py
ENTRYPOINT ["/app/run.sh"]