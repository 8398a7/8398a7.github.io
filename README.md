# Portfollio

```sh
git clone git@github.com:8398a7/8398a7.github.io.git
cd 8398a7.github.io
pnpm install
pnpm run start # http://localhost:3000
```

## Architecture

- React 19 + Vite 7
- 状態管理は Redux Toolkit ベース (`src/features/*`)
- CSS Modules とデザイントークン（`src/index.css`）でレイアウト/テーマを管理

## Optional

- docker

```sh
make docker-start
# run vite dev server => localhost:3000
```
