var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {

  //期限が近い順にデータを取得
  var getListQuery = 'SELECT lists.list_id,DATE_FORMAT(min(todos.timelimit), \'%Y年%m月%d日\') AS timelimit ,title,DATE_FORMAT(lists.created_at, \'%Y年%m月%d日\') AS created_at, sum(todos.done = 1) as done,sum(todos.done = 0) as yet, count(todos.done) as count FROM lists LEFT JOIN todos ON lists.list_id = todos.list_id GROUP BY lists.list_id, todos.list_id ORDER BY min(todos.timelimit) IS NULL ASC, min(todos.timelimit) ASC, list_id ASC';
  //作成日順にデータを取得
  //var getListQuery = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at FROM lists ORDER BY created_at';
  connection.query(getListQuery, function(err, lists) {
    res.render('index', {
      title: 'Todoリスト一覧',
      lists: lists
    });
  });
});

router.post('/', function(req, res, next) {
  var title = req.body.title;
  if(title.length === 0){
    alartRender("文字を入力してください",res);
  }else if(title.length>30){
    alartRender("リスト名は30文字以内にしてください  ("　+ title.length + "文字)",res);
  }else{
    var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    //エスケープ処理
    var query = 'INSERT INTO lists (title, created_at) VALUES (?,?)';
    var parameters = [title,createdAt];
    connection.query(query, parameters, function(err, rows) {
      alartRender("リストを作成しました",res);
    });
  }
});

function alartRender(error,res){
  var getListQuery = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at FROM lists';
  var getTodoQuery = 'SELECT *, DATE_FORMAT(timelimit, \'%Y年%m月%d日\') AS timelimit FROM todos';
  connection.query(getListQuery, function(err, lists) {
    connection.query(getTodoQuery, function(err, todos) {
      res.render('index', {
        title: 'Todoリスト一覧',
        lists: lists,
        todos:todos,
        inputError:error
      });
    });
  });
}

module.exports = router;
