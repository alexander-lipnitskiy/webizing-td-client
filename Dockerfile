FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV NODE_ENV='production'
ENV TD_SERVER_HOST_ENV='192.168.0.248'
ENV TD_SERVER_PORT_ENV='4000'
COPY ./ .
RUN npm run build
WORKDIR /app/dist
RUN mkdir td
RUN mv css td
RUN mv fonts td
RUN mv img td
RUN mv js td
RUN mv favicon.ico td

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
