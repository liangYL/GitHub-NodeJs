var express = require('express');
var router = express.Router();
var db = require('./db/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    db.selectAll('pm_mr_material', function (err, result) {//查询所有news表的数据
        if (err) {
            console.log(err);
            res.end(JSON.stringify(err));
            return;
        }
        console.log(result.recordset);
        // res.render('newsList', {results:records.recordset, moment:moment});
        res.end(JSON.stringify(result.recordset));
    });
});
// router.get('/delete/:id', function (req, res, next) {//删除一条id对应的news表的数据
//     var id = req.params.id;
//     db.del("where id = @id", {id:id}, "news", function(err, result){
//         res.redirect('back');//返回前一个页面
//     });
// });
// router.post('/update/:id', function (req, res, next) {//更新一条对应id的news表的数据
//     var id = req.params.id;
//     var content = req.body.content;
//     db.update({content:content}, {id:id}, "news", function(err, result){
//         res.redirect('back');
//     });
// });


module.exports = router;


