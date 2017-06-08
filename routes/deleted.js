var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

//リスト削除
router.get('/:list_id', function(req, res, next) {
  var listId = req.params.list_id;
  var query = 'SELECT * FROM lists WHERE list_id = ?';
  var deleteListQuery = 'DELETE FROM lists WHERE list_id = ?';
  var deleteTodoQuery = 'DELETE FROM todos WHERE list_id = ?';
  connection.query(query, listId, function(err, list) {
    connection.query(deleteListQuery, listId, function(err) {
      connection.query(deleteTodoQuery, listId, function(err) {
        console.log(list);
        res.render('deleted', {
          what:"ToDoリスト",
          title: "削除完了 | " + list[0].title,
          comment:"正常に削除されました",
          list: list[0]
        });
      });
    });
  });
});
//todo削除
router.get('/:list_id/:todo_id', function(req, res, next) {
  var listId = req.params.list_id;
  var todoId = req.params.todo_id;
  var getListQuery = 'SELECT * FROM lists WHERE list_id = ?';
  var getTodoQuery = 'SELECT * FROM todos WHERE todo_id = ?';
  var deleteTodoQuery = 'DELETE FROM todos WHERE todo_id = ?';
  connection.query(getListQuery, listId, function(err, list) {
    connection.query(getTodoQuery, todoId, function(err, todo) {
      connection.query(deleteTodoQuery, todoId, function(err) {
        console.log(list);
        res.render('deleted', {
          what: "todo",
          title: "削除完了 | " + todo[0].todo,
          todo: todo[0].todo,
          comment:"正常に削除されました",
          list: list[0]
        });
      });
    });
  });
});

module.exports = router;
