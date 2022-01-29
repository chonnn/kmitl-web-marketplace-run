create database mkp_web;

create table mkp_web.product
(
	id varchar(10) not null
		primary key,
	name varchar(60) null,
	description varchar(200) null,
	price DOUBLE(10,2) null
);