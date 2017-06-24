FROM node:8.1.2

RUN npm i -g yarn typings
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV HOME /usr/src/app

COPY package.json $HOME
COPY yarn.lock $HOME
RUN yarn install
COPY typings.json $HOME
RUN typings install

COPY . $HOME
COPY .env.sample $HOME/.env

CMD ["yarn", "start"]
