
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
router.use(express.static('public'));

router.post('/', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "name":req.body.name,
       "age":req.body.age
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
module.exports = router;

