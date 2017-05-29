# todoApp  
ToDoを管理するWEBアプリケーション 
## 開発環境　
macOS Sierra  v10.12.4  
Node.js v7.10.0  
safari v10.1
## フレームワーク
Express v4.15.0
## テンプレートエンジン
EJS
## DB
MySQL version: 5.7.17 Homebrew


## 設計・構成について  

* root/  
    * bin/www  
    * node_modules  
    * public  
    * routes  
    * views  
    * app.js  
    * mysqlConnection.js  
    * package.json  

###DB  
DB名 todo_list 

テーブル  
 
| list_id    | title       | created_at    |  　
|:-----------|:------------|:-------------| 
| INT        | VARCHAR     | DATETIME     |  

## 開発環境のセットアップ  

`localhost:3000`に接続

`id = 0`
> 引用  

