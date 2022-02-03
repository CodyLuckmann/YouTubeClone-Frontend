FROM node:latest

WORKDIR /app

EXPOSE 8000

ENV PATH /app/node_modules

COPY package.json ./
COPY package-lock.json ./
COPY . ./

