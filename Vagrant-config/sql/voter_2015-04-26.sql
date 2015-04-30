# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.43-0ubuntu0.12.04.1)
# Database: voter
# Generation Time: 2015-04-26 16:23:19 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table cake_sessions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cake_sessions`;

CREATE TABLE `cake_sessions` (
  `id` varchar(255) NOT NULL,
  `data` text,
  `expires` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `cake_sessions` WRITE;
/*!40000 ALTER TABLE `cake_sessions` DISABLE KEYS */;

INSERT INTO `cake_sessions` (`id`, `data`, `expires`)
VALUES
	('2ftohk4vtpuhn9omtm3m0pdjd3','Config|a:3:{s:9:\"userAgent\";s:32:\"b53ab8d4a8330dcb96b40cf88cb24178\";s:4:\"time\";i:1430052131;s:9:\"countdown\";i:10;}Message|a:1:{s:4:\"auth\";a:3:{s:7:\"message\";s:47:\"You are not authorized to access that location.\";s:7:\"element\";s:7:\"default\";s:6:\"params\";a:0:{}}}Auth|a:1:{s:8:\"redirect\";s:4:\"/u/6\";}',1430052132),
	('3hlk62re3u935ppsovsf422hg5','Config|a:3:{s:9:\"userAgent\";s:32:\"4fe95e8006e06358783799d04dba5bd9\";s:4:\"time\";i:1430069164;s:9:\"countdown\";i:10;}Auth|a:1:{s:4:\"User\";a:1:{s:4:\"User\";a:1:{s:2:\"id\";s:1:\"5\";}}}',1430069165),
	('3p3e37jpp4o0qj2pa3om42af84','Config|a:3:{s:9:\"userAgent\";s:32:\"b53ab8d4a8330dcb96b40cf88cb24178\";s:4:\"time\";i:1430079228;s:9:\"countdown\";i:10;}Auth|a:1:{s:4:\"User\";a:1:{s:4:\"User\";a:1:{s:2:\"id\";s:1:\"5\";}}}',1430079228),
	('f1or6mlvma9743vekg2u5h5qp3','Config|a:3:{s:9:\"userAgent\";s:32:\"4fe95e8006e06358783799d04dba5bd9\";s:4:\"time\";i:1430076187;s:9:\"countdown\";i:10;}Auth|a:1:{s:4:\"User\";a:1:{s:4:\"User\";a:1:{s:2:\"id\";s:1:\"5\";}}}',1430076187),
	('o1e6g2ikvkijcvbdm8br2sbs76','Config|a:3:{s:9:\"userAgent\";s:32:\"b53ab8d4a8330dcb96b40cf88cb24178\";s:4:\"time\";i:1430020171;s:9:\"countdown\";i:10;}Message|a:1:{s:4:\"auth\";a:3:{s:7:\"message\";s:47:\"You are not authorized to access that location.\";s:7:\"element\";s:7:\"default\";s:6:\"params\";a:0:{}}}Auth|a:1:{s:4:\"User\";a:1:{s:4:\"User\";a:1:{s:2:\"id\";s:1:\"6\";}}}',1430020172),
	('tosc90pls6rim4b4heaffc05i4','Config|a:3:{s:9:\"userAgent\";s:32:\"b53ab8d4a8330dcb96b40cf88cb24178\";s:4:\"time\";i:1430051828;s:9:\"countdown\";i:10;}Auth|a:1:{s:4:\"User\";a:1:{s:4:\"User\";a:1:{s:2:\"id\";s:1:\"5\";}}}',1430051830);

/*!40000 ALTER TABLE `cake_sessions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table fbusers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `fbusers`;

CREATE TABLE `fbusers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `fb_uid` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `token` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `token_expires` datetime DEFAULT NULL,
  `pages_liked` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fb_uid` (`fb_uid`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `fbusers` WRITE;
/*!40000 ALTER TABLE `fbusers` DISABLE KEYS */;

INSERT INTO `fbusers` (`id`, `user_id`, `fb_uid`, `email`, `first_name`, `last_name`, `gender`, `birthday`, `age`, `locale`, `token`, `created`, `modified`, `token_expires`, `pages_liked`)
VALUES
	(1,1,'1391811787811080',NULL,'Open','User','male',NULL,NULL,'en_US','CAAWxVruf7BIBAJM1BnepSPo0BRpJpeJcEll4jTLr5ut52S8OF3JaMR3IUPcGmlJ5GZBP7L1SrONqQbMSBAi2azaIZAsgNkRTyVkdnA1vW76srGZCuv2J80XaL89gnXvKGMFGedZCZCPPgZA1unUf27856yRUw6EzLLYZCfElHehQ0U4ulWlifbnROFP0pJnZBRk7ZAMOqolt5Q4Ct1jY7x9OXZAzr9p5tU76YZD','2015-04-25 13:28:40','2015-04-25 14:54:14',NULL,NULL),
	(2,3,'1404205726568623',NULL,'David','Sidhusky','male',NULL,NULL,'en_GB','CAAWxVruf7BIBAB3carMTUe5vRImClszWJ8nz7LBHfv1prhQzONRp6rO7LwVo83ZAoCl3K7hb7nqTqu2n0Df9W3oIjIGYap9R92vxusp4iefhZBQ8UX4Vk36V0KUZAoZAeXYuXBKoZBZCONzxGJ66SmvD3EEcMKiEezMu8t0DZBu75EnACoSdeXU5q5OMmKpKaiNhferhwP8fl5r80dLmFbCdpaoGtelFCMZD','2015-04-25 14:55:17','2015-04-25 15:00:29',NULL,NULL),
	(4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(5,5,'10101259751210640',NULL,'Alan','Thomson','male',NULL,NULL,'en_GB','CAAWxVruf7BIBAJMJNuMTaIgV2ZAsDh0tDkKfxJFfaPGyUwEW8hz4okPZBeFS8OFwxEdJkYgLI87ypBU6lathhmmUicf68nptHA4vvpPzlwQZAsNyg8BI53AOVjXPQ7VRZAcbGdFwcqcVuo3EqkOxdGJj8guRQWzMqUehtZAu5IH8CrMTlWsMqntTZBIuYrkBXQjhbMP35ZAuxCORwjWettZA7EEGjctqgfcZD','2015-04-25 20:46:23','2015-04-26 17:13:47',NULL,NULL),
	(6,6,'1383085475353596',NULL,'Sharon','Vijayvergiyason','female',NULL,NULL,'en_GB','CAAWxVruf7BIBAOKpBpGwHIueu9f4j7sAbRb9K4iM6QK10kpXYLZAvH9ZBouYPjTO8ZB3mm2TqV8Yr1KNex5LSTJJyqNSPBZCkC9gDmGLgjDnKx0ehkQs73ZAqF34eMrByDaZATwW9RA6w3ckfNjURLUiloZBMhVVZAVemWBe5wffnaZBATrk9hIqo63GXiQsEUyhP3HDCFgs2TXBzJkdGqlF5VdCZC50mn2s8ZD','2015-04-25 22:56:28','2015-04-25 22:56:28',NULL,NULL);

/*!40000 ALTER TABLE `fbusers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table friendships
# ------------------------------------------------------------

DROP TABLE IF EXISTS `friendships`;

CREATE TABLE `friendships` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `friend1_user_id` int(11) DEFAULT NULL,
  `friend2_user_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `friendship` (`friend1_user_id`,`friend2_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `friendships` WRITE;
/*!40000 ALTER TABLE `friendships` DISABLE KEYS */;

INSERT INTO `friendships` (`id`, `friend1_user_id`, `friend2_user_id`, `created`)
VALUES
	(3,3,1,'2015-04-25 14:55:18'),
	(4,1,3,'2015-04-25 14:55:18'),
	(5,6,1,'2015-04-25 22:56:28'),
	(6,1,6,'2015-04-25 22:56:28'),
	(9,6,2,NULL),
	(10,2,6,NULL),
	(11,6,5,NULL),
	(12,5,6,NULL);

/*!40000 ALTER TABLE `friendships` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table parties
# ------------------------------------------------------------

DROP TABLE IF EXISTS `parties`;

CREATE TABLE `parties` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `short_name` varchar(8) DEFAULT NULL,
  `colour_hex` varchar(6) DEFAULT NULL,
  `colour_r` int(3) DEFAULT NULL,
  `colour_g` int(3) DEFAULT NULL,
  `colour_b` int(3) DEFAULT NULL,
  `sort_order` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `parties` WRITE;
/*!40000 ALTER TABLE `parties` DISABLE KEYS */;

INSERT INTO `parties` (`id`, `name`, `short_name`, `colour_hex`, `colour_r`, `colour_g`, `colour_b`, `sort_order`)
VALUES
	(1,'Labour','lab','d50000',146,0,13,0),
	(2,'Scottish National Party','snp','0A2C50',10,44,80,0),
	(3,'Plaid Cymru','pc','3F8428',63,132,40,0),
	(4,'Green Party','green','008066',0,116,95,0),
	(5,'UK Independence Party','ukip','B3009D',183,0,157,0),
	(6,'I don\'t plan to vote','no-vote','000000',0,0,0,999),
	(7,'Conservatives','con','0087dc',0,135,220,0),
	(8,'Liberal Democrats','libdem','FDBB30',253,187,48,0),
	(9,'Independent / Party Not Listed','indy','FFFFFF',255,255,255,0),
	(11,'British National Party','bnp','291770',41,23,112,0);

/*!40000 ALTER TABLE `parties` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `migrated` tinyint(1) DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `migrated`, `created`, `modified`)
VALUES
	(1,NULL,0,'2015-04-25 13:28:40','2015-04-25 13:28:40'),
	(2,NULL,0,NULL,NULL),
	(3,NULL,0,'2015-04-25 14:55:17','2015-04-25 14:55:17'),
	(4,NULL,0,NULL,NULL),
	(5,NULL,0,'2015-04-25 20:46:23','2015-04-25 20:46:23'),
	(6,NULL,0,'2015-04-25 22:56:28','2015-04-25 22:56:28');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table votes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `votes`;

CREATE TABLE `votes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `party_id` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  `disabled` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;

INSERT INTO `votes` (`id`, `user_id`, `party_id`, `created`, `modified`, `disabled`)
VALUES
	(1,1,8,'2015-04-25 14:03:33','2015-04-25 14:39:00',0),
	(2,2,2,NULL,NULL,0),
	(3,3,3,NULL,NULL,0),
	(20,5,8,'2015-04-26 14:20:38','2015-04-26 16:23:07',0);

/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
