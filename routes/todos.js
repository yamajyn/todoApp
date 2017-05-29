var express = require('express');
var router = express.Router();
var moment = require('moment'); // 追加
var connection = require('../mysqlConnection');

router.get('/:list_id', function(req, res, next) {
  var listId = req.params.list_id;
  var getListQuery = 'SELECT * FROM lists WHERE list_id = ' + listId;
  var getTodoQuery = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at, DATE_FORMAT(timelimit, \'%Y年%m月%d日\') AS timelimit FROM todos WHERE list_id = ' + listId;
  var now = moment().format('YYYY-MM-DD');
  var noTodo;
  connection.query(getListQuery, function(err, list) {
    connection.query(getTodoQuery, function(err, todos) {
      console.log(list);
      if(list.length ==0){
        noTodo = '登録されたリストはありません';
        res.render('todos', {
          title: "404エラー",
          list:list,
          now: now,
          noTodo: noTodo
        });
      }else{
        if(todos.length == 0){
          noTodo = '登録されたToDoはありません';
        }
        res.render('todos', {
          title: list[0].title,
          list: list[0],
          todoList: todos,
          now: now,
          noTodo: noTodo
        });
      }
    });
  });
});

router.post('/:list_id', function(req, res, next) {
  var listId = req.params.list_id;
  //todo作成
  if(req.body.todo){
    var todo = req.body.todo;
    var timelimit = req.body.timelimit;
    var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    var query = 'INSERT INTO todos (todo, timelimit, list_id, created_at) VALUES ("' + todo + '", ' + '"' + timelimit + '", ' + '"' + listId + '", ' + '"' + createdAt + '")';
    connection.query(query, function(err, rows) {
      res.redirect('/todos/' + listId);
    });
  }
  //完了ボタン
  else if(req.body.done){
    var todoId = req.body.done;
    var query = 'UPDATE todos SET done=if(done=1,0,1) WHERE todo_id = ' + todoId;
    connection.query(query, function(err, rows) {
      res.redirect('/todos/' + listId);
    });
  }
});

module.exports = router;
