
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    // req.app.use(express.static('public'));

    var user = {
        'name':'张三',
        'age':'12',
        'src':'http://127.0.0.1:3000/images/1.jpg'
    }
    res.send(JSON.stringify(user));
})


module.exports = router;