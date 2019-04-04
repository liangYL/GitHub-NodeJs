var db = require('./sqlserver2FZ.js');
var sql="select * from pm_mr_material;"
db(sql,function(err,result){
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    response.end(JSON.stringify(result));

});
