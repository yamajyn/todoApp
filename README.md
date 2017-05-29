# todoApp
ToDoを管理するWEBアプリケーション
## 開発環境　
macOS Sierra  v10.12.4
Node.js v7.10.0
safari v10.1
## フレームワーク
Express v4.15.0
## template engine
EJS
## DB
MySQL version: 5.7.17 Homebrew


## 設計・構成について  

* root/  
  * bin/ 
    * www
  * node_modules/
    * 使用したモジュール
  * public/
    * images
    * javascripts
    * stylesheets
  * routes/
    * モデル
  * views/
    * ビュー
  * app.js
    * コントローラ
  * mysqlConnection.js
    * データーベース接続 
  * package.json  
    * npmモジュールの管理



###DB  
DB名 todo_list

テーブル

lists
| list_id    | title       | created_at   |  　
|:-----------|:------------|:-------------|
| INT        | VARCHAR     | DATETIME     |  
todos
| list_id    | todo_id     | todo         | timelimit  |created_at  | done       | 
|:-----------|:------------|:-------------|:-----------|:-----------|:-----------|
| INT        | INT         | DATETIME     |DATE        | DATETIME   | TYNYINT    |

## 開発環境のセットアップ

## Node.jsの導入
###nvmのインストール
`$ git clone https://github.com/creationix/nvm.git ~/.nvm  `
`$ source ~/.nvm/nvm.sh`
###nvmコマンドでnode.jsをインストール
`$ nvm install 7.9.0`

`$ npm i -g express-generator`express-generatorの導入

`$ express -e`expressの雛形アプリを作成

`$ cd . && npm install ` 必要なnode_modulesをinstall
###モジュール　　
[nodemon](https://github.com/remy/nodemon)
`$ npm i -g nodemon`

###ライブラリ
[Moment.js](http://momentjs.com)

`$ npm i -S moment`

[Mysql](https://github.com/mysqljs/mysql)

`$ npm install --save mysql`

##サーバー起動
`$ nodemon todoApp`
`localhost:3000`に接続

> 引用
