# node 이미지를 컨테이너에 넣음
# FROM node:16

# build step
FROM node:16 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# runtime step
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 3000

