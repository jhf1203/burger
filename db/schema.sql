create database burgers_db;
use burgers_db;

create table burgers (
    id int auto_increment,
    burger_name varchar(50) not null,
    devoured boolean not null, 
    primary key(id)
);