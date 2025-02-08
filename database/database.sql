create database storedb;
drop database storedb;
create table users(
	ID int primary key auto_increment,
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
	ID int primary key auto_increment,
	name varchar(50),
	category varchar(50),
	price decimal(15, 2),
	description varchar(500)
);

create table orders(
	ID int primary key,
	ID_user int,
	ID_product int,
	quantity int,
	foreign key (ID_user) references users(ID),
    foreign key (ID_product) references product(ID)
);

create table payment(
	ID int primary key auto_increment,
	ID_order int,
	type_payments varchar(50),
	delivery varchar(50),
	status varchar(50),
	time_date datetime,
    foreign key (ID_order) references orders(ID)
);

create table feedback(
	ID int primary key auto_increment,
    ID_product int,
	mark int,
	description varchar(300),
    foreign key (ID_product) references product(ID)
);

create table favorite(
	ID int primary key auto_increment,
    ID_user int,
	ID_product int,
	quantity int,
    foreign key (ID_user) references users(ID),
    foreign key (ID_product) references product(ID)
);

INSERT INTO product (name, category, price, description)
VALUES 
		('Уголок стальной 25х25', 'Уголок', '120', 'Уголок'),
		('Уголок стальной 32х32', 'Уголок', '160', 'Уголок'),
		('Уголок стальной 35х35', 'Уголок', '170', 'Уголок'),
		('Уголок стальной 40х40', 'Уголок', '210', 'Уголок'),
		('Уголок стальной 45х45', 'Уголок', '240', 'Уголок'),
		('Уголок стальной 50х50', 'Уголок', '270', 'Уголок');