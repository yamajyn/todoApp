# ************************************************************
# Sequel Pro SQL dump
# バージョン 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# ホスト: 127.0.0.1 (MySQL 5.7.17)
# データベース: todo_list
# 作成時刻: 2017-05-29 15:47:35 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# テーブルのダンプ lists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `lists`;

CREATE TABLE `lists` (
  `list_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `lists` WRITE;
/*!40000 ALTER TABLE `lists` DISABLE KEYS */;

INSERT INTO `lists` (`list_id`, `title`, `created_at`)
VALUES
	(1,'todoリストを作成する','2017-05-27 22:09:21'),
	(2,'部屋の掃除','2017-05-28 01:15:31'),
	(3,'洗濯物','2017-05-28 02:08:01'),
	(9,'ゼミ','2017-05-29 00:19:07'),
	(13,'ゴミ捨て','2017-05-29 01:46:18'),
	(25,'読書','2017-05-29 22:53:49');

/*!40000 ALTER TABLE `lists` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ todos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `todos`;

CREATE TABLE `todos` (
  `todo_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `list_id` int(11) NOT NULL,
  `todo` text NOT NULL,
  `timelimit` date NOT NULL,
  `created_at` datetime NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`todo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;

INSERT INTO `todos` (`todo_id`, `list_id`, `todo`, `timelimit`, `created_at`, `done`)
VALUES
	(7,1,'githubにあげる','2017-05-28','2017-05-28 02:36:51',0),
	(8,1,'todoの完了ボタンを作成','2017-05-28','2017-05-28 10:43:57',1),
	(9,1,'デザインの修正','2017-05-28','2017-05-28 13:33:31',1),
	(10,2,'トイレ掃除','2017-06-20','2017-05-29 01:36:06',0),
	(11,2,'玄関','2017-05-29','2017-05-29 04:06:04',0),
	(12,2,'ベランダ','2017-05-29','2017-05-29 04:06:18',0),
	(13,3,'ズボン','2017-05-29','2017-05-29 04:06:30',0),
	(14,3,'ワイシャツ','2017-05-29','2017-05-29 04:06:34',0),
	(15,3,'タオル','2017-05-29','2017-05-29 04:07:00',1),
	(16,3,'ハンカチ','2017-05-29','2017-05-29 04:45:02',0),
	(17,3,'靴下','2017-05-29','2017-05-29 04:45:08',1),
	(18,1,'todoを検索','2017-05-29','2017-05-29 04:58:15',1),
	(44,3,'パンツ','2017-05-29','2017-05-29 13:31:15',1),
	(48,9,'次回の書類作成','2017-05-29','2017-05-29 21:11:01',0),
	(49,9,'アプリ制作','2017-06-08','2017-05-29 21:11:36',0),
	(50,9,'過去作品の調査','2017-06-15','2017-05-29 21:13:01',1),
	(52,25,'java','2017-04-29','2017-05-29 22:54:09',1),
	(53,25,'webの基本','2017-04-29','2017-05-29 22:54:26',1),
	(54,1,'todoをテスト','2017-05-30','2017-05-29 23:47:27',1),
	(55,1,'todoリストを再構築','2017-05-30','2017-05-29 23:48:13',0),
	(56,9,'アルバイト書類','2017-05-30','2017-05-30 00:06:14',0),
	(57,2,'机の整理整頓','2017-06-30','2017-05-30 00:06:57',0),
	(58,13,'可燃','2017-05-30','2017-05-30 00:08:15',0),
	(59,13,'不燃','2017-06-03','2017-05-30 00:08:31',0),
	(60,13,'ペットボトル','2017-06-07','2017-05-30 00:08:47',0);

/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
