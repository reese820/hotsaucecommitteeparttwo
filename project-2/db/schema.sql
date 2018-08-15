DROP DATABASE IF EXISTS stockscreener_db;
CREATE DATABASE stockscreener_db;

USE stocks_db;

CREATE TABLE stocks
(
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  ticker_symbol VARCHAR ( 40 ) NOT NULL,
  company_name VARCHAR (100) NOT NULL,
  CUSIP INT (10) NOT NULL
  PRIMARY KEY ( id ) 
);