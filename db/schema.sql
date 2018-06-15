CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE(
  id not null INT auto_increment PRIMARY KEY,
  burger_name not null VARCHAR(100),
  devoured not null boolean default false,
  price not null INT
);
