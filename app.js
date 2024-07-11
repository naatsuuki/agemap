const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');

// MySQL接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// データベースへの接続
connection.connect((err) => {
  if (err) throw err;
  console.log('MySQLに接続しました');
});

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイルの提供
app.use(express.static('public'));

// POSTリクエストの処理
app.post('/api/create-age-table', (req, res) => {
  const { userName, userBirthYear, comparisonName, comparisonBirthYear } = req.body;

  // データの検証
  if (!userName || !userBirthYear || !comparisonName || !comparisonBirthYear) {
    return res.status(400).json({ error: 'パラメータが不足しています' });
  }

  // 年齢比較表のHTML生成
  const currentYear = new Date().getFullYear();
  let ageTableHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>年齢</th>
          <th>${userName}</th>
          <th>${comparisonName}</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let age = 0; age <= 100; age++) {
    const userAgeYear = parseInt(userBirthYear) + age;
    const comparisonAge = userAgeYear - comparisonBirthYear;
    ageTableHTML += `
      <tr>
        <td>${userAgeYear}</td>
        <td>${age}</td>
        <td>${comparisonAge}</td>
      </tr>
    `;
  }

  ageTableHTML += `
      </tbody>
    </table>
  `;

  // レスポンスとしてHTMLを返す
  res.json({ table: ageTableHTML });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Expressサーバーが http://localhost:${port} で起動しました`);
});
