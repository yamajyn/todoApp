# todoApp
ToDoを管理するWEBアプリケーション
![todoトップ](https://github.com/yamaj/todoApp/blob/master/readmeImages/todo_top.png)  


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
    * コントローラー
  * views/
    * ビュー
  * app.js
    * expressの設定
  * mysqlConnection.js
    * データーベース接続 
  * package.json  
    * npmモジュールの管理


### DB  
DB名 todo_list

テーブル

lists

| list_id    | title       | created_at   |
|:-----------|:------------|:-------------|
| INT        | VARCHAR     | DATETIME     |  


todos

| list_id    | todo_id     | todo         | timelimit  |created_at  | done       |
|:-----------|:------------|:-------------|:-----------|:-----------|:-----------|
| INT        | INT         | TEXT         |DATE        | DATETIME   | TYNYINT    |  


## 開発環境のセットアップ　　

## Node.jsの導入

### nvmのインストール  

`$ git clone https://github.com/creationix/nvm.git ~/.nvm`

`$ source ~/.nvm/nvm.sh`  

### nvmコマンドでnode.jsをインストール  

`$ nvm install 7.9.0`  

express-generatorの導入  
`$ npm i -g express-generator` 

expressの雛形アプリを作成  
`$ express -e`  

必要なnode_modulesをinstall  
`$ cd . && npm install ` 

## 追加したモジュール

### モジュール　　

[nodemon](https://github.com/remy/nodemon)    
ファイル更新時に自動でローカルサーバーを再起動してくれるmodule  
`$ npm i -g nodemon`  

[ejs-locals](https://github.com/RandomEtc/ejs-locals)  
部品を共通化するためのmodule  
`$ npm install ejs-locals --save`  

### ライブラリ  

[Moment.js](http://momentjs.com)  
日付取得のライブラリ
`$ npm i -S moment`  

[Mysql](https://github.com/mysqljs/mysql)  
mysql接続のためのライブラリ
`$ npm install --save mysql`  

## サーバー起動  
プロジェクトのディレクトリに移動後
`$ nodemon todoApp`  
で起動  

もしくは  
`$ node ./bin/www`  
で起動

ブラウザから
`localhost:3000`に接続  

## 独自機能

![todoトップ](https://github.com/yamaj/todoApp/blob/master/readmeImages/todo_todo.png)


* リストの削除
* todoの削除  
* 期限が近い順に並べるようにした  
