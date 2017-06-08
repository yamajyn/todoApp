var mysql = require('mysql');
var connection;



if(process.env.NODE_ENV === "production" ){
  //リリース用
  var dbConfig = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'ba09dd9960344c',
    password: '3f67f472',
    database: 'heroku_4d5fb8a6ef36520'
  };
  connection = mysql.createConnection(dbConfig);
  console.log("SUCSESS CONNECT SERVER DB");
  //HerokuのMySQLのためのハック
  setInterval(function() {
    connection.query('SELECT 1');
  }, 5000);
}else{
  //ローカル用
  var dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'todo_list'
  };
  connection = mysql.createConnection(dbConfig);
  console.log("SUCSESS CONNECT LOCAL DB");
}

module.exports = connection;
