
drop database bamsondb;
create database bamsondb;

use  bamsondb;

create table products(
item_id integer(100) null,
product_name varchar(50) null,
department_name varchar(50) null,
price integer(100)null,
stogk_quantity integer(100)null
);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (1, 'Six Of Crows ', 'Book', 18.99, 20);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (2, ' the legend of zelda: breath of the wild', 'video games', 59.99, 50);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (3, 'fantastic beasts and where to find them ', 'tv and movis', 15.00, 2);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (4, 'bracelet ', 'jewelry', 14.99, 5);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (5, 'Choker ', 'jewelry', 12.95, 89);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (6, 'the wicked deep ', 'book', 12.59, 8);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (7, 'Tunic Blouse ', 'clothing', 14.99, 9);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (8, ' Cold Shoulder  Dress Pockets ', 'clothing', 18.88, 4);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (9, 'headphones ', 'musick', 63.00, 9);

INSERT INTO products (item_id, product_name, department_name, price,stogk_quantity )
VALUES (10, ' Microsoft Surface Book 2 ', 'electronics', 12.95, 6);

