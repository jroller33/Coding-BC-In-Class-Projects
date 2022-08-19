DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;


-- done --
CREATE TABLE biographies (
    id INT NOT NULL,
    name VARCHAR(100)
);

-- to run:
-- source schema.sql; 
-- use books_db;
-- show tables;
-- desc biographies; // shows structure of db