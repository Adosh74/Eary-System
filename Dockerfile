FROM node:18

WORKDIR /Eary-System

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]