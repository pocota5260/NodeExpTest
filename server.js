const express = require('express');

// express の実態 Application を生成
const app = express();
const port = 3000;

// テンプレートエンジンを EJS に設定
app.set('views', './views');
app.set('view engine', 'ejs');
 
// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));
 
// ルーティング設定
app.use('/', require('./routes/index.js'));

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
 
// アプリケーション開始ログ
console.log(`Server running at http://localhost:${port}`);
