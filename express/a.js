
var express = require('express');
var app = express();
 
var b = require('./b.js');
var c = require('./c.js');
var d = require('./d.js');
var e = require('./e.js');
// var f = require('./f.js');
var g = require('./g.js');

//给 test.html 设置3000端口访问
app.get('/test.html', function (req, res) {
   //__dirname:当前文件路径
   res.sendFile( __dirname.replace("express","") + "test.html" );
})

//解决跨域问题
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Credentials','true');
   next();
};
app.use(allowCrossDomain);

//使用素材目录
app.use(express.static('public'));
// app.use('/static', express.static('public'));
// http://localhost:3000/static/images/1.jpg


app.use('/b', b);
app.use('/c', c);
app.use('/d', d);
app.use('/e', e);
// app.use('/f', f);
app.use('/g', g);


var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
