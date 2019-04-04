var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('get 方法!');
});
router.post('/', function(req, res) {
  res.send('post 方法!');
});
module.exports = router;