# アニメ管理アプリ
アニメをタイトルで検索して、評価や感想を登録できるシングルページアプリケーションです。

## Usage

Firebaseプロジェクトを作成し、Firebaseをインストールします。

```bash
$ npm install firebase
```

plugins/firebase.jsファイルのfirebaseConfigオブジェクトへ、firebaseの情報をコピーアンドペーストして初期化してください。

```bash
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

ビルドしてください。

```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
