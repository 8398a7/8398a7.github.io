FROM node:20.19-alpine

ENV HOME /usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

RUN npm i -g yarn
COPY package.json $HOME
COPY yarn.lock $HOME
RUN yarn install

COPY . $HOME

CMD ["yarn", "start"]
