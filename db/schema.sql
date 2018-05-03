DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id int NOT NULL auto_increment,
    burger varchar(255) NOT NULL,
		devoured BOOLEAN NOT NULL DEFAULT 0,
    primary key (id)
);

