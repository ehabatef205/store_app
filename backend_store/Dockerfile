FROM node:14.19.3

WORKDIR /back_store_App

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 7002

CMD ["npm","run","start"]