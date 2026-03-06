FROM oven/bun:1.3.10-alpine

ENV HOME /usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json bun.lock $HOME/
RUN bun install --frozen-lockfile

COPY . $HOME

CMD ["bun", "run", "start"]
