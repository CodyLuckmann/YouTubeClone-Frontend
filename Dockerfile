FROM node:latest as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm install react-scripts@4.0.3

COPY . ./

RUN npm run build

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]