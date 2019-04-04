
var express = require('express');
var app = express();
var fs = require("fs");
 
var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
//给 test.html 设置3000端口访问
app.get('/test.html', function (req, res) {
    //__dirname:当前文件路径
    res.sendFile( __dirname.replace("express","") + "test.html" );
 })
 //上传逻辑
app.post('/f', function (req, res) {
   console.log(req.files[0]);  // 上传的文件信息
   //文件存放地址
   var des_file = __dirname.replace("express","")+ 'public/images/' + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
