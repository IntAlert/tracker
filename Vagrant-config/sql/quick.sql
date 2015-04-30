# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: prod.cpl7zkzesbi7.eu-west-1.rds.amazonaws.com (MySQL 5.6.22-log)
# Database: voter
# Generation Time: 2015-04-26 18:04:24 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


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
	(6,6,'1383085475353596',NULL,'Sharon','Vijayvergiyason','female',NULL,NULL,'en_GB','CAAWxVruf7BIBAOKpBpGwHIueu9f4j7sAbRb9K4iM6QK10kpXYLZAvH9ZBouYPjTO8ZB3mm2TqV8Yr1KNex5LSTJJyqNSPBZCkC9gDmGLgjDnKx0ehkQs73ZAqF34eMrByDaZATwW9RA6w3ckfNjURLUiloZBMhVVZAVemWBe5wffnaZBATrk9hIqo63GXiQsEUyhP3HDCFgs2TXBzJkdGqlF5VdCZC50mn2s8ZD','2015-04-25 22:56:28','2015-04-25 22:56:28',NULL,NULL),
	(7,7,'10101260783896130',NULL,'Cath','Fischl','female',NULL,NULL,'en_US','CAAWxVruf7BIBABfVcdCeZBonZA8iAPl2uDs72ROguobGJKrjZBb31MNJHvZAog9TrnsRrJcxI42xKZB0m6OGdb04g1j3rbLMvbAt4bAaIGrQAMU2SBkufm6kNg0PHBwvZBw2HhePSMOIpuGo5kofxMDG1kMZA37OQ7UujnEZAZC5Wfb6lxdqGCDd3ju47nuZAweb1UFO4fiiZA5H3bQOQCBgfuaLZCwlTcXAnY4ZD','2015-04-26 17:58:54','2015-04-26 18:07:24',NULL,NULL),
	(14,13,'10101259751210640',NULL,'Alan','Thomson','male',NULL,NULL,'en_GB','CAAWxVruf7BIBAANfKO81idEq1kJi4LEN7p7ZAsoA2cueCk2D7urNlF7UrLXZBqizOBbZAXr2IaU3ZAiD2mhoKvoLdZBnA1bt7hcGm35u1gRrjDuG7HSOiz7rBaHlljxXdSFku92M0168FhXVVf3YbqEUvjSYrETbyu6KVxdsPJB8xqGytjbH3XwPZCZA3Eqxle44eOhNU7xasgxt1eAWsTErZA5Kva5QGWIZD','2015-04-26 18:48:25','2015-04-26 19:02:20',NULL,NULL);

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
	(12,5,6,NULL),
	(13,7,5,'2015-04-26 18:07:25'),
	(14,5,7,'2015-04-26 18:07:25'),
	(22,13,7,'2015-04-26 18:48:26'),
	(23,7,13,'2015-04-26 18:48:26');

/*!40000 ALTER TABLE `friendships` ENABLE KEYS */;
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
	(6,NULL,0,'2015-04-25 22:56:28','2015-04-25 22:56:28'),
	(7,NULL,0,'2015-04-26 17:58:54','2015-04-26 17:58:54'),
	(8,NULL,0,NULL,NULL),
	(9,NULL,0,NULL,NULL),
	(10,NULL,0,NULL,NULL),
	(11,NULL,0,NULL,NULL),
	(12,NULL,0,NULL,NULL),
	(13,NULL,0,'2015-04-26 18:48:25','2015-04-26 18:48:25');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
