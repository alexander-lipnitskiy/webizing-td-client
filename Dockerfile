FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV NODE_ENV='production'
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
