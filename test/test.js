var http = require('http');
var url = require( 'url' );
var server =  http.createServer(function (request, response) {
    var h_name = request.headers.host ;
    var h_path = url.parse(request.url).pathname;
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,'GET', {'Content-Type': 'text/plain;charset=utf-8',"Access-Control-Allow-Origin": "*"});
    // response.writeHead("Access-Control-Allow-Origin", "*"); 
    // response.writeHead("Access-Control-Allow-Headers", "X-Requested-With");
    // response.writeHead("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // response.writeHead("X-Powered-By",' 3.2.1');


    if( h_name === '127.0.0.1:8888' && h_path === '/exit' ){
        response.end('Bye!');
        server.close() ; 
        console.log( 'Bye!' );
    }else{
        var user = {
            'name':'张三',
            'age':'12'
        }
        // 发送响应数据 "Hello World"
        response.end(JSON.stringify(user));
        console.log( 'Hello!' );
    }

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');