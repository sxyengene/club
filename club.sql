/*
Navicat MySQL Data Transfer

Source Server         : 47.99.96.170
Source Server Version : 50724
Source Host           : 47.99.96.170:3306
Source Database       : club

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-01-11 16:12:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `coursename` varchar(50) DEFAULT NULL,
  `coursetime` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('websocket之即时通讯', '1517961600', '1', '李欣羿');
INSERT INTO `course` VALUES ('js动画之requestAnimationFrame', '1519689600', '2', '罗亚男');
INSERT INTO `course` VALUES ('Easy-Mock的使用', '1521590400', '3', '李子淇');
INSERT INTO `course` VALUES ('vue的基本使用', '1523404800', '4', '李子淇');
INSERT INTO `course` VALUES ('vue的基本使用', '1523577600', '5', '王怡新');
INSERT INTO `course` VALUES ('实现一个简单的数据双向绑定', '1523836800', '6', '张华挺');
INSERT INTO `course` VALUES ('ES6基础知识分享', '1524009600', '7', '臧悦超');
INSERT INTO `course` VALUES ('如何在老项目中使用vue', '1524441600', '8', '王怡新');
INSERT INTO `course` VALUES ('初识微信小程序', '1524528000', '9', '姚永芳');
INSERT INTO `course` VALUES ('eggjs介绍', '1524528000', '10', '孙雄鹰');
INSERT INTO `course` VALUES ('SSR（vue，egg）搭建UED平台', '1542153600', '11', '姚永芳');
INSERT INTO `course` VALUES ('VSCode插件开发', '1539302400', '12', '杨晟');
INSERT INTO `course` VALUES ('手炒移动端基础分享', '1543363200', '13', '尹上升');
INSERT INTO `course` VALUES ('spa在港美股交易中的应用', '1544659200', '14', '彭声明');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `department` varchar(20) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `lastvisit` varchar(20) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '孙雄鹰', 'SNS', '草帽', '123', null, null);
INSERT INTO `user` VALUES ('2', '李欣羿', 'SNS', '黑白', '123', null, null);
INSERT INTO `user` VALUES ('3', '123', 'SNS', '333', '40331e480af9d79bf829f18078f220adbee2519f8c5b29f6449c9e7e0ca13ecd', '1547193681290', '526e326e6e19bf3cbf439cba95863b05d4203ae003583f7a3339f74f3b1f7d8c');
