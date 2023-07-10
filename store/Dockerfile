FROM node:14.19.3

WORKDIR /React_front_store

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3005

CMD ["npm","run","start"]