var sqlserver = require('mssql');

var msdb = {};
var dbConfig = {
    server: "192.168.**.**",
    database: "Project_Material",
    user: "**",
    password: "**",
    port: 1433
};

var db = function (strsql) {

    sqlserver.connect(dbConfig).then(function () {
        var req = new sqlserver.Request().query(strsql)
        .then(function (recordset) {
            console.log(recordset);
            sqlserver.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    })
    .catch(function (err) {
        console.log(err);
    });
};


module.exports = db;

// 原文：https://blog.csdn.net/huwei2003/article/details/77603380 
