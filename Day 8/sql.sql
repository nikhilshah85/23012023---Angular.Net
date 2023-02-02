create database NGshoppingDB

use NGshoppingDB

create table ProductDetails
(
	pId int primary key,
	pName varchar(20),
	pCategory varchar(20),
	pPrice int,
	pIsInStock bit
)

insert into ProductDetails values(101,'Pepsi','Cold-Drink',50,1)
insert into ProductDetails values(102,'Nike','Sports',50,1)
insert into ProductDetails values(103,'Appy','Cold-Drink',50,0)
insert into ProductDetails values(104,'Puma','Sports',50,1)
insert into ProductDetails values(105,'Reebok','Sports',50,1)
insert into ProductDetails values(106,'NBalance','Sports',50,0)

select  *from ProductDetails
