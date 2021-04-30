const express = require('express');
const router = express.Router();
var resObj = {
    title: 'Sample NodeExpTest',
    message: 'Hello World!',
    name: "",
    age: "",
    sports: ""
};

router.get('/', function (request, response) {
    // response.render('index', { title: 'Sample NodeExpTest', message: 'Hello World!' });
    const query = request.query;
    resObj.name = query.name;
    resObj.age = query.age;
    response.render('index', resObj);
});

router.post("/", function (request, response) {
    resObj.sports = request.body.sports;
    response.render('index', resObj);
});

module.exports = router;
