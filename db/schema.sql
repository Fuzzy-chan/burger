
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

 CREATE TABLE burgers (
     id int not null AUTO_INCREMENT,
     burger_name VARCHAR(50) not null,
    devoured boolean DEFAULT false,
     PRIMARY KEY (id)
 );

SELECT * FROM burgers;