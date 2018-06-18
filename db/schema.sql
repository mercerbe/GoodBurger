DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INT not null auto_increment PRIMARY KEY,
  burger_name VARCHAR(100) not null,
  devoured not null boolean default false,

);
