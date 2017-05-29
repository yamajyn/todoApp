var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

/* GET initial search page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at FROM lists';
   connection.query(query, function(err, lists) {
   res.render('search', {
		 title: 'Todoリスト | 検索',
		 lists: lists,
     search: ''
   });
 });
});

/* GET search page. */
router.get('/:search', function(req, res, next) {
	var search = req.params.search;
	var searchListQuery = 'SELECT * ,DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at FROM lists WHERE title LIKE "%'+ search +'%"';
	var searchTodoQuery = 'SELECT * , DATE_FORMAT(created_at, \'%Y年%m月%d日\') AS created_at, DATE_FORMAT(timelimit, \'%Y年%m月%d日\') AS timelimit FROM todos WHERE todo LIKE "%'+ search +'%"';
  connection.query(searchListQuery, function(err, lists) {
		connection.query(searchTodoQuery, function(err, todos) {
      console.log(lists);
			res.render('search', {
				title: 'Todoリスト | 検索',
				lists: lists,
				todos: todos,
				search: search,
				noTodo: '対象のToDoは見つかりませんでした',
				noList: '対象のリストは見つかりませんでした'
			});
		});
	});
});

router.post('/', function(req, res, next) {
     var search = req.body.search;
		res.redirect('/search/' + search);
});

module.exports = router;
