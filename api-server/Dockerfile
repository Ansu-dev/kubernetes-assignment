# node 이미지를 컨테이너에 넣음
FROM node:16 AS build

#애플리케이션을 위한 폴더를 따로 모아둠 (컨테이너에 접근할때 workdir로 바로 접근)
WORKDIR /app

# 종속성 부분만 따로 복사한다(종속성이 바뀌지않고 소스코드가 변경되어도 매번 종속성을 설치하는게 비효율적)
COPY package.json .

RUN npm install

RUN npm run build


FROM node:16-alpine as production
WORKDIR /app

COPY package.json .
# 프로덕션 의존성만 설치
RUN npm install --only=production

COPY --from=build /app/dist ./dist

EXPOSE 8080


CMD ["node","dist/index.js"]