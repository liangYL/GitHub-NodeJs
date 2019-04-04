
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '192.168.**.**',       
  user     : '**',              
  password : '**',       
  port: '1433',                   
  database: 'Project_Material' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM pm_dictionary';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();



