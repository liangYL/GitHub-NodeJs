/*
* 测试创建端口返回字符串
*/

//express_demo.js 文件
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.send('hello world!');
 });
router.get('/aaa', function(req, res, next) {
   res.send('hello world!--aaa');
 });
 router.get('/bbb', function(req, res, next) {
   res.send('hello world!---bbb');
 });

module.exports = router;