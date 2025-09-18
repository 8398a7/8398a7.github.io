# Repository Guidelines

## プロジェクト構成 & モジュール配置

- `src/` TypeScript + React のソース。本体は次を中心に構成: `components/`, `containers/`, `ducks/`(Redux), `lib/`, `types/`, `images/`。
- `public/` 静的テンプレート（`index.html`, `manifest.json`, `favicon.ico`）。
- `build/` ビルド成果物（自動生成）。
- `static/` デプロイ後の配布資産（自動生成。直接編集しない）。
- ルートには `Makefile`, `Dockerfile`, `package.json`, `biome.jsonc`, `tsconfig.json`, `.circleci/` など。

## ビルド・テスト・ローカル開発

- 依存取得: `yarn install`
- 開発サーバ: `make start` もしくは `yarn start`（`REACT_APP_LAST_MODIFIED` を自動付与）。
- テスト実行: `make test` または `yarn test`（Jest、カバレッジ有効）。
- Lint: `yarn lint`（ESLint）。
- ビルド: `make build` または `yarn build`。
- 公開用コピー: `make publish`（`build/` の内容をリポジトリ直下へ配置; GitHub Pages 用）。
- Docker 開発: `make docker-start`（`localhost:3000`）。

## コーディング規約 & 命名

- 言語/設定: TypeScript 厳密モード。React 関連は `react-scripts`。
- フォーマット: Biome（2スペース、`singleQuote: true`、`;`あり、`trailingComma: all` 設定は `biome.jsonc` 参照）。例: `npx biome format --write .`。
- Lint: `yarn lint`。自動修正例: `npx eslint src --ext .ts,.tsx --fix`。
- 命名: コンポーネントは `PascalCase`（例 `Header.tsx`）、関数/変数は `camelCase`。Redux は `ducks/Feature.ts` 形式で Action/Reducer/Saga を内包。

## テスト方針

- フレームワーク: Jest（`react-scripts`）。
- 配置/命名: 実装と同階層に `*.test.ts` / `*.test.tsx`。
- 実行例: `yarn test src/components/Header.test.tsx -t "renders"`。
- 期待: UI はレンダリング可否と状態遷移、`lib/` は入出力と型の健全性を検証。新規/修正コードにはテストを追加。

## コミット & PR ガイドライン

- コミット: 先頭にカテゴリを角括弧で任意付与（例: `[command]`, `[fix]`, `[#54]`）+ 簡潔な要約（現在形/命令形、72字以内目安）。
- PR: 変更概要/動機/影響範囲、UI 変更はスクショ、関連 Issue（`Closes #123`）、`yarn lint` と `yarn test` の通過を記載。

## セキュリティ & 設定メモ（重要）

- 秘密情報はコミットしない（Sentry DSN/GA は公開前提。他のトークンは環境変数管理）。
- `REACT_APP_LAST_MODIFIED` はフッター表示に使用（`Makefile` が自動設定）。
- Node は Docker と同等（v12 系）か互換環境を推奨。Node 17+ ではスクリプトが `--openssl-legacy-provider` を付与。

## Agent 向け補足

- 自動生成物（`build/`, `static/`, ルートの生成済み `*.html`/`*.js`）は編集禁止。変更は `src/` に限定。
- 既存スタイルに倣い小さな差分で実装。複数工程は `Makefile` のターゲットを優先利用。

---

## 本リポジトリ実態メモ（2025-09-13 点検）

- ランタイム/ツールチェーン
  - Node 12.11.1（Docker/CircleCI）
  - CRA: `react-scripts@3.4.1` / React: `16.13.1` / TypeScript: `3.8.3`
  - 状態管理: Redux + Redux-Saga、UI: Bulma
- ディレクトリ構成（実在確認済み）
  - `src/` 配下: `components/`, `containers/`, `ducks/`, `lib/`, `types/`, `images/`
  - `public/`, `build/`（自動生成）, `static/`（配布用; 自動生成）, `tmp/`
- ルーティング/GitHub Pages
  - SPA フォールバックのため、ルートに `404.html -> index.html` と `page-200.html -> index.html` のシンボリックリンクを配置。削除・編集しない。
  - 公開は `make publish` で `build/` をリポジトリ直下へコピー（GitHub Pages 向け）。
- 自動生成物の具体例（編集禁止）
  - ルート直下の `index.html`（公開用コピー）、`asset-manifest.json`, `service-worker.js`, `precache-manifest.*.js`
- Lint/Format
  - Lint: `yarn lint`（`eslint "src/**/*.ts{,x}"`）。環境によっては ESLint の解決に差が出るため、必要なら `npx eslint …` も可。
  - Biome 設定は `biome.jsonc` に定義。例: `npx biome format --write .`。
- テスト
  - Jest（CRA 同梱）を使用。現状 `src` に `*.test.ts(x)` は未配置。新規/修正時は同階層にテストを追加。
- 環境変数
  - `REACT_APP_LAST_MODIFIED` は `make start`/`make build` で自動付与し、フッターに表示。
- セキュリティ
  - Sentry DSN / Google Analytics ID は公開前提。他の機密はコミットしない（環境変数で管理）。
