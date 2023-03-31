FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

EXPOSE 49153
EXPOSE 9876

ENTRYPOINT ["tail", "-f", "/dev/null"]