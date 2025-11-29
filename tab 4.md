### 1.  Find out the id of the region which is having maximum countries.
```SQL
SELECT region_id FROM oehr_countries GROUP BY region_id ORDER BY COUNT(*) DESC FETCH FIRST 1 ROWS ONLY;
```

### 2.  Find out the city from which maximum customers are there.
```SQL
SELECT city FROM oehr_locations GROUP BY city ORDER BY COUNT(*) DESC FETCH FIRST 1 ROWS ONLY;
```
### 3.  Which language is spoken by the maximum number of customers?
```SQL
SELECT nls_language FROM oehr_customers GROUP BY nls_language ORDER BY COUNT(*) DESC FETCH FIRST 1 ROWS ONLY;
```
### 4.  Find out the list of the customers who are having credit limits in range of +- 500 of average credit.
```SQL
SELECT * FROM OEHR_CUSTOMERS WHERE credit_limit BETWEEN '-500' AND '500';
```
### 5.  List all unique surnames of customers.
```SQL
SELECT DISTINCT cust_last_name FROM oehr_customers;
```
### 6.  Find out the postal code for which maximum numbers of customers are there in the database.
```SQL
SELECT postal_code FROM oehr_customers GROUP BY postal_code ORDER BY COUNT(*) DESC FETCH FIRST 1 ROWS ONLY;
```
### 7.  Find out the average credit limit of SWITZERLAND customers.
```SQL
SELECT AVG(credit_limit) FROM oehr_customers WHERE NLS_TERRITORY = 'SWITZERLAND';
```
### 8.  Find out the minimum credit limit of ITALY  customers.
```SQL
SELECT MIN(credit_limit) AS min_credit FROM oehr_customers WHERE NLS_TERRITORY = 'ITALY';
```

### 9.  List out all postal codes of Indian customers.
```SQL
SELECT DISTINCT postal_code FROM oehr_customers WHERE NLS_TERRITORY = 'INDIA';
```
### 10. Find out employees which are recruited in 2018.
```SQL
SELECT * FROM oehr_employees WHERE EXTRACT(YEAR FROM hire_date) = 2018;
```
### 11. Find out average salary of employees who are recruited in 2021.
```SQL
select avg(salary) from oehr_employees where hire_date > '01-01-2021' ;
```
### 12. Find out the maximum salary of employees who are recruited in 2019.
```SQL
select max(salary) as from oehr_employees where hire_date > '01-01-2019' ;
```
### 13. Find out the list of employees who are having salaries in the range of +- 500 of average salary.
```SQL
select
```
### 14. Find out the product id for which maximum stock is available.
```SQL
SELECT quantity FROM oehr_order_items GROUP BY quantity ORDER BY quantity DESC FETCH FIRST 1 ROWS ONLY;
```
### 15. What is the average quantity of each warehouse?
```SQL
select avg(quantity_on_hand),product_id,warehouse_id from  oehr_inventories group by warehouse_id
```
### 16. Find out total items available in each warehouse.
```SQL
select count(*) from oehr_order_items
```
### 17. Find out the count of orders placed in the year 2022.
```SQL
-- place holder for SQL query
```
### 18. How many customers have placed direct orders?
```SQL
-- place holder for SQL query
```

### 19. What is the average amount of online orders?
```SQL
-- place holder for SQL query
```
### 20. Which sales representative has completed maximum orders.
```SQL
-- place holder for SQL query
```
### 21. Find out the customer id of the customer who has placed maximum numbers of orders.
```SQL
-- place holder for SQL query
```
### 22. How many different keyboards are available in the product?
```SQL
-- place holder for SQL query
```
### 23. Find out the supplier ids who supplies items related to printing.
```SQL
-- place holder for SQL query
```
### 24. What is the average list price of an 'under development' product?
```SQL
-- place holder for SQL query
```
### 25. What is the average price of products which belong to the display category
```SQL
-- place holder for SQL query
```