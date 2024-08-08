create table products(
	product_id serial primary key,
	product_name varchar(50),
	price numeric
	);

insert into products(product_name,price)
	values('tv',20000),
	('mobile',10000),
	('laptop',50000),('monitor',25000);



create table products_backup(
	product_id int primary key,
	product_name varchar(50),
	price numeric
	);

create or replace function backup_and_delete_product()
returns trigger as $$
begin
insert into products_backup(product_id,product_name,price)
values(old.product_id,old.product_name,old.price);
return old;
end;
$$ language plpgsql;

create trigger before_delete_product
before delete on products
for each row
execute function backup_and_delete_product();


delete from products
where product_id=7;

select * from products

select * from products_backup
