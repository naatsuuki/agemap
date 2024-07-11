const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // ファイルのパスに適宜修正

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ルーターの設定
app.use('/api', routes); // '/api' 以下のエンドポイントを routes で定義したルーターで処理する

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
