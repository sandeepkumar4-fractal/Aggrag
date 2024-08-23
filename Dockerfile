FROM python:3.10-slim-bullseye

WORKDIR /library
RUN pip install requirement.txt

