create database hotel_mangement_system;

use test;

CREATE TABLE `Customers` (
  `cust_id` int(11) NOT NULL auto_increment,
  `fName` varchar(100) NOT NULL,
  `age` int(3) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY  (`id`)
);