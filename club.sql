/*
Navicat MySQL Data Transfer

Source Server         : 172.19.80.215
Source Server Version : 50720
Source Host           : 172.19.80.215:3306
Source Database       : club

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-11-14 21:08:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `coursename` varchar(50) DEFAULT NULL,
  `coursetime` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('websocket之即时通讯', '2018-02-07 19:00:00', '1', '李欣羿');
INSERT INTO `course` VALUES ('js动画之requestAnimationFrame', '2018-02-27 19:14:18', '2', '罗亚男');
INSERT INTO `course` VALUES ('Easy-Mock的使用', '2018-03-21 19:14:18', '3', '李子淇');
INSERT INTO `course` VALUES ('vue的基本使用', '2018-04-11 19:14:18', '4', '李子淇');
INSERT INTO `course` VALUES ('vue的基本使用', '2018-04-13 19:14:18', '5', '王怡新');
INSERT INTO `course` VALUES ('实现一个简单的数据双向绑定', '2018-04-16 19:14:18', '6', '张华挺');
INSERT INTO `course` VALUES ('ES6基础知识分享', '2018-04-18 19:14:18', '7', '臧悦超');
INSERT INTO `course` VALUES ('如何在老项目中使用vue', '2018-04-23 19:14:18', '8', '王怡新');
INSERT INTO `course` VALUES ('初识微信小程序', '2018-04-24 19:14:18', '9', '姚永芳');
INSERT INTO `course` VALUES ('eggjs介绍', '2018-04-24 19:14:18', '10', '孙雄鹰');
INSERT INTO `course` VALUES ('SSR（vue，egg）搭建UED平台', '2018-11-14 19:44:56', '11', '姚永芳');
INSERT INTO `course` VALUES ('VSCode插件开发', '2018-10-12 00:00:00', '12', '杨晟');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `nickname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '孙雄鹰', 'SNS', '草帽');
INSERT INTO `user` VALUES ('2', '李欣羿', 'SNS', '黑白');
