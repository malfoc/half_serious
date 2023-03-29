FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

EXPOSE 8080
EXPOSE 49153

ENTRYPOINT ["tail", "-f", "/dev/null"]