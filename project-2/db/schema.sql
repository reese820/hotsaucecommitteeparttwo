DROP DATABASE IF EXISTS stockscreener_db;
CREATE DATABASE stockscreener_db;

USE stockscreener_db;

CREATE TABLE stocks(
  id int(11) auto_increment not NULL,
  ticker_symbol VARCHAR(40) not null,
  companyName VARCHAR (100) not NULL,
  previousClose int(10) not null,
  divYield int(10) not null,
  PRIMARY KEY (id)
);

select * from stocks;