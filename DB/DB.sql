CREATE DATABASE IF NOT EXISTS DBCatShop;
-- DROP DATABASE IF EXISTS DBCatShop;

USE DBCatShop;

-- DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
    id INT auto_increment NOT NULL,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(100) NOT NULL,
    phoneNumber varchar(20) NOT NULL,
    sex char(1) NOT NULL,
    address varchar(100) NOT NULL,
    age int NOT NULL,
    dateRegister date NOT NULL,
    role varchar(5) NOT NULL,
    PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS cat;
CREATE TABLE IF NOT EXISTS cat (
    id INT auto_increment NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(500) NOT NULL,
    sex char(1) NOT NULL,
    age int NOT NULL,
    weight int NOT NULL,
    dateRegister date NOT NULL,
    PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS adoption;
CREATE TABLE IF NOT EXISTS adoption (
    id INT auto_increment NOT NULL,
    cat int NOT NULL,
    user int NOT NULL,
    status VARCHAR(20) NOT NULL,
    dateAdoption date NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(cat)
    REFERENCES cat(id),
    FOREIGN KEY(user)
    REFERENCES user(id)
);

-- SELECT * FROM user;
-- SELECT * FROM cat;
-- SELECT * FROM adoption;