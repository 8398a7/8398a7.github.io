FROM node:8.1.2

RUN npm i -g yarn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app

EXPOSE 8080
CMD [ "yarn", "start" ]
