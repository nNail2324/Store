create database storedb
drop database storedb
create table users(
	ID int primary key,
	password varchar(50),
	phone_number varchar(50),
	email varchar(100),
	name varchar(50),
	surname varchar(50),
	city varchar(50),
	street varchar(50),
	house_number int,
	apartment_number int
);

create table product(
	ID int primary key,
	name varchar(50),
	category varchar(50),
	price decimal(15, 2),
	description varchar(500)
);

create table orders(
	ID int primary key,
	ID_user int foreign key references users(ID),
	ID_product int foreign key references product(ID),
	quantity int
);

create table payment(
	ID int primary key,
	ID_order int foreign key references orders(ID),
	type_payments varchar(50),
	delivery varchar(50),
	status varchar(50),
	time_date datetime
);

create table feedback(
	ID int primary key,
	ID_product int foreign key references product(ID),
	mark int,
	description varchar(300)
);

create table favorite(
	ID int primary key,
	ID_user int foreign key references users(ID),
	ID_product int foreign key references product(ID),
	quantity int
);