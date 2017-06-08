var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

router.get('/:list_id', function(req, res, next) {
  var listId = req.params.list_id;
  var getListQuery = 'SELECT * FROM lists WHERE list_id = ?';
  var getTodoQuery = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at, DATE_FORMAT(timelimit, \'%Y年%m月%d日\') AS timelimit FROM todos WHERE list_id = ?';
  var now = moment().format('YYYY-MM-DD');
  var noTodo;
  connection.query(getListQuery, listId, function(err, list) {
    connection.query(getTodoQuery, listId,  function(err, todos) {
      if(list.length === 0){
        noTodo = '登録されたリストはありません';
        res.render('todos', {
          title: "404エラー",
          list:list,
          now: now,
          noTodo: noTodo
        });
      }else{
        if(todos.length === 0){
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
    var query = 'INSERT INTO todos (todo, timelimit, list_id, created_at) VALUES (?, ?, ?, ?)';
    var parameters = [todo, timelimit, listId, createdAt];
    connection.query(query, parameters, function(err, rows) {
      res.redirect('/todos/' + listId);
    });
  }
  //完了ボタン
  else if(req.body.done){
    var todoId = req.body.done;
    var query = 'UPDATE todos SET done=if(done=1,0,1) WHERE todo_id = ?';
    connection.query(query, todoId, function(err, rows) {
      res.redirect('/todos/' + listId);
    });
  }
});

module.exports = router;
