DROP DATABASE IF EXISTS stockscreener_db;
CREATE DATABASE stockscreener_db;

USE stocks_db;

CREATE TABLE stocks
 ( id int(11) auto_increment not NULL,
  ticker_symbol VARCHAR(40) not null,
  companyName VARCHAR (100) not NULL,
  sector VARCHAR(40) not null,
  quote.close int(10) not null,
  previousClose int(10) not null,
  changePercent int(10) not null,
  ytdChange int(40) not null
  PRIMARY KEY (id)
);