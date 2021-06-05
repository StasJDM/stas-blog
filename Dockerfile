FROM node:latest as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN yarn
RUN yarn build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/stas-blog /usr/share/nginx/html

EXPOSE 80