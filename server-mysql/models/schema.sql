Drop database if EXISTS pfe;

CREATE database pfe;

use pfe;

-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
-- ---

-- ---
-- Table 'users'
-- 
-- ---
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Table 'products'
-- 
-- ---
DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(255) NOT NULL,
    `imageURL` MEDIUMTEXT NULL,
    `userId` INTEGER Not NUll,
    `price` DECIMAL NULL,
    `shortDescription` VARCHAR(255) NOT NULL,
    `longDescription` MEDIUMTEXT NULL,
    PRIMARY KEY (`id`),
   FOREIGN KEY (userId) REFERENCES `users` (`id`)
);



-- ---
-- Table 'react'
-- 
-- ---
DROP TABLE IF EXISTS `react`;

CREATE TABLE `react` (
    `id_users` INTEGER NOT NULL,
    `id_products` INTEGER NOT NULL,
    `id_reactType` INTEGER NOT NULL,
    PRIMARY KEY (`id_users`, `id_products`, `id_reactType`)
);

-- ---
-- Table 'reactType'
-- 
-- ---
DROP TABLE IF EXISTS `reactType`;

CREATE TABLE `reactType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---
ALTER TABLE
    `react`
ADD
    FOREIGN KEY (id_users) REFERENCES `users` (`id`);

ALTER TABLE
    `react`
ADD
    FOREIGN KEY (id_products) REFERENCES `products` (`id`);

ALTER TABLE
    `react`
ADD
    FOREIGN KEY (id_reactType) REFERENCES `reactType` (`id`);
