const express = require('express');
const router = express.Router();
 
// デフォルトルーティング
router.get('/', function (request, response) {
    response.render('index', { title: 'Sample NodeExpTest', message: 'Hello World!' });
});

module.exports = router;
