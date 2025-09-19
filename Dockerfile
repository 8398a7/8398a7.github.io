FROM node:24.8.0-alpine

ENV HOME /usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

RUN corepack enable
COPY package.json pnpm-lock.yaml $HOME/
RUN pnpm install --frozen-lockfile

COPY . $HOME

CMD ["pnpm", "run", "start"]
