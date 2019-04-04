var sql = require('mssql');
var  sqls = 'SELECT * FROM pm_dictionary';
//连接方式1："mssql://用户名:密码@ip地址（无需端口号）/SqlServer名/数据库名称"
//连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
sql.connect("mssql://**:**@192.168.**.**:1433/Project_Material").then(function() {
//sql.connect("mssql://sa:123@localhost:1433/test").then(function() {
    // Query
    new sql.Request().query(sqls).then(function(result) {
        // if(err){
        //     console.log('[SELECT ERROR] - ',err.message);
        //     return;
        //   }
   
         console.log('--------------------------SELECT----------------------------');
         console.log(result);
         console.log('------------------------------------------------------------\n\n');  
    }).catch(function(err) {
       console.log(err);
    });
    // Stored Procedure
}).catch(function(err) {
    console.log(err);
});
