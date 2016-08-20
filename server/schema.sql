DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Describe your table here.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `message` TEXT(20) NULL DEFAULT NULL,
  `id_usernames` INT NULL DEFAULT NULL,
  `id_roomnames` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'usernames'
-- 
-- ---

DROP TABLE IF EXISTS `usernames`;
    
CREATE TABLE `usernames` (
  `id` INT NULL AUTO_INCREMENT DEFAULT NULL,
  `username` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'roomnames'
-- 
-- ---

DROP TABLE IF EXISTS `roomnames`;
    
CREATE TABLE `roomnames` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'username/roomnames'
-- 
-- ---

DROP TABLE IF EXISTS `usernames_roomnames`;
    
CREATE TABLE `usernames_roomnames` (
  `id_roomnames` INTEGER NULL DEFAULT NULL,
  `id_usernames` INT NULL DEFAULT NULL
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_usernames) REFERENCES `usernames` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_roomnames) REFERENCES `roomnames` (`id`);
ALTER TABLE `usernames_roomnames` ADD FOREIGN KEY (id_roomnames) REFERENCES `roomnames` (`id`);
ALTER TABLE `usernames_roomnames` ADD FOREIGN KEY (id_usernames) REFERENCES `usernames` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `usernames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roomnames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `username/roomnames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`message`,`id_usernames`,`id_roomnames`) VALUES
-- ('','','','');
-- INSERT INTO `usernames` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `roomnames` (`id`,`roomname`) VALUES
-- ('','');
-- INSERT INTO `username/roomnames` (`id_roomnames`,`id_usernames`) VALUES
-- ('','');
/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/