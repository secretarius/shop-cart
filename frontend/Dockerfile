FROM node:12.16.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . .

EXPOSE 4201

CMD ["npm", "start"]
