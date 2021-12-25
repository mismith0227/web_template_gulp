## web template

開発環境構築パターン作成の元になるブランチ
Scss のコンパイル、JS のバンドル、画像圧縮

## コマンド

```
// セットアップ
yarn

// CSSとJSを非圧縮で開発するコマンド
yarn dev

// CSSとJSを圧縮しつつ開発するコマンド
yarn prod

// ビルドコマンド（CSS、JSの圧縮）
yarn build

// storybook
yarn storybook
```

## ディレクトリ構成

```
├── README.md
├── babel.config.js // JavaScriptのPoryfillの設定
├── config.js // 開発環境に関する設定
├── dest // 書き出し先フォルダ
│   ├── css
│   │   └── style.css
│   ├── images
│   ├── index.html
│   └── js
│       └── bundle.js
├── gulpfile.js // gulpのタスクを書いているファイル
├── package.json // パッケージの依存関係や実行コマンドを書いているファイル
├── src // 開発フォルダ
│   ├── html
│   │   └── index.html
│   ├── images
│   │   └── xps-g2E2NQ5SWSU-unsplash.jpg
│   ├── js
│   │   └── index.js
│   └── scss
│       ├── base.scss
│       └── style.scss
├── webpack.config.js // JavaScriptのバンドルの設定を書いたファイル
└── yarn.lock // プロジェクトが依存してるパッケージのバージョンを正確に記録してるファイル
```

## HTML

EJS を使用しています。

## SCSS

SCSS でコードを書ける環境にしています。

## JavaScript

JavaScript を書けるようにしています。jQuery は入れてません。

## Images

画像は png、jpg、svg、gif の圧縮に対応してます。

## パッケージの注意点

`gulp-imagemin` と `imagemin-svgo` は Node14 系だとエラーになるためバージョンを下げています。
