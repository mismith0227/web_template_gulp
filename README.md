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

## ブランチ運用ルール

1. 開発ブランチは `develop`
2. 作業ごとにブランチを切って `develop` へ PR を送る（注:マージはしないでください）
3. レビュー
4. マージ

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

SCSS でコードを書ける環境にしています。よく分からない場合は、`style.scss`に CSS を全部書いても OK です。
できれば入れ子や、コード分割して import なども挑戦してみましょう。
ソースマップ書き出すようにしてるので、要素検証で活用してください

## JavaScript

JavaScript を書けるようにしています。jQuery は入れてません。
課題では JS を使った表現までは必要ないですが、

## Images

画像は png、jpg、svg、gif の圧縮に対応してます。

## パッケージの注意点

`gulp-imagemin` と `imagemin-svgo` は Node14 系だとエラーになるためバージョンを下げています。
