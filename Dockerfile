# FROM socialengine/nginx-spa:latest

# COPY ./dist /app

# RUN chmod -R 777 /app

FROM node:18-alpine as build

WORKDIR /app

COPY . /app

RUN npm install --production && npm cache clean --force

ENV PATH /app/node_modules/.bin:$PATH

ENV VITE_PB_URL https://pocketbase.dulcecami.net.ar:8443

RUN npm run build

FROM socialengine/nginx-spa:latest

COPY --from=build /app/dist /app

RUN chmod -R 777 /app

