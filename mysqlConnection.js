var mysql = require('mysql');

//ローカル用
// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'todo_list'
// };

// $ heroku config [app-name] | grep CLEARDB_DATABASE_URL
// CLEARDB_DATABASE_URL: mysql://[user]:[password]@[host]/[database]?reconnect=true

// リリース用
var dbConfig = {
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'ba09dd9960344c',
  password: '3f67f472',
  database: 'heroku_4d5fb8a6ef36520'
};

var connection = mysql.createConnection(dbConfig);

// これはHerokuのMySQLのためのハックです。
setInterval(function() {
  connection.query('SELECT 1');
}, 5000);

module.exports = connection;
