# nuxt-starter

> Base project of nuxt application  

アプリケーション構築のベースになるようなプロジェクトを作成しました。  
これをコピーして環境構築してもらえるとラクだと思います。  
nuxt公式のインストールの構築を省けるイメージです。
[https://ja.nuxtjs.org/guide/installation](https://ja.nuxtjs.org/guide/installation)  

細かいnuxtの解説はnuxtの公式ドキュメントに詳細に書かれているので、そこに譲ります  
[https://ja.nuxtjs.org/guide/directory-structure](https://ja.nuxtjs.org/guide/directory-structure)
  
## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
[https://ja.nuxtjs.org/guide/commands](https://ja.nuxtjs.org/guide/commands)  

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

`npm run generate` で生成された `dist` 配下のコンテンツが全て静的なファイルになっています。  
それをそのままサーバーにupすると実行されます。


> 以下からはこのプロジェクトに追加した内容について解説をしていきます。  

## SASS(SCSS)
### sass(scss)を使えるようにしています。  
`.scss` ファイルとして使用したい場合は、 `assets/scss/○○.scss` として新規ファイルを作り、各pageのvueファイルの `<style>` タグの直下にimportするといいです。(ex: `index.vue` の52行目あたり参照)  

vueの特性として、 `.vue` ファイル内にstyleを記載することができます。その際には `<style lang="scss">` といった形で記載するとscssで記載できます。

### layoutごとに読み込むscssを変えたい場合
pages配下の各ページはlayoutのコンポーネントにラップされています。  
[レイアウト](https://ja.nuxtjs.org/guide/views#%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88)
そのレイアウト毎にもsassファイルをimportできます。現時点では `defauld.vue` にもsassファイルをimportをしているので、追加したり、削除したりすることで全体に影響するsassをコントロールすることができます。


### より全体に影響するsassを読み込ませたい場合
`nuxt.config.js` 内に追記してください  
[CSS プロパティ](https://ja.nuxtjs.org/api/configuration-css/)

### 詳細
`node-sass` と `sass-loader` をインストールしてるので使えるようになっています。  



## jqueryとの併用
[外部リソースを使うには？](https://ja.nuxtjs.org/faq/)  
`jquery-sample.vue` に実際のコードを記載しているので、そちらを参照ください


## 非同期通信
### はじめに
以下の詳細は `axios-sample.vue` のページに実装されています。   
画面を確認する際にはこのプロジェクトのルートディレクトリで `npm run axios-demo` のコマンドを叩いてjsonを返すサーバーを立てていただけると幸いです。( `sample-server/server.js` )  

### 詳細
非同期通信には `axios` というライブラリを使っています。  
画面読み込み時の非同期のデータの取得は `asyncData` の関数から読んでます    
[非同期なデータ](https://ja.nuxtjs.org/guide/async-data)  
それ以降のデータの取得は普通のmethod内に記載されています