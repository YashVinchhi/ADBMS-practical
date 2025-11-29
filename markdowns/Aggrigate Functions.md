### 1. List out region wise country count. (oehr_countries).
```SQL
SELECT region_id, COUNT(*) AS country_count FROM oehr_countries GROUP BY region_id;
```
### 2. Find out the maximum average salary of jobs. (oehr_jobs).
```SQL
SELECT MAX((max_salary + min_salary)/2) AS max_avg_salary FROM oehr_jobs;
```
### 3. Find a minimum salary job with a job title. (oehr_jobs).
```SQL
SELECT job_title, min_salary FROM oehr_jobs ORDER BY min_salary ASC FETCH FIRST 1 ROWS ONLY;
```
### 4. Find out maximum salary job with job title (oehr_jobs).
```SQL
SELECT job_title, max_salary FROM oehr_jobs ORDER BY max_salary DESC FETCH FIRST 1 ROWS ONLY;
```
### 5. List out types of job_id with count. (oehr_job_history).
```SQL
SELECT job_id, COUNT(*) AS count FROM oehr_job_history GROUP BY job_id;
```
### 6. List out different types of order modes with count (oehr_orders).
```SQl
SELECT order_mode, COUNT(*) AS count FROM oehr_orders GROUP BY order_mode;
```
### 7. Show average order amount (oehr_orders).
```SQl
SELECT AVG(order_total) AS avg_order_amount FROM oehr_orders;
```
### 8. List out orders which are placed in between 1st January 2021 and 31st December 2023 (oehr_orders).
```SQl
SELECT * FROM oehr_orders WHERE order_date BETWEEN DATE '2021-01-01' AND DATE '2023-12-31';
```
### 9. List out all different memories descriptions and names from products. (oehr_product_description).
```SQl
SELECT DISTINCT product_name, product_description FROM oehr_product_descriptions;
```
### 10. Find orderable products from product information (oehr_product_information).
```SQl
SELECT * FROM oehr_product_information WHERE orderable = 'Y';
```
### 11. Find out supplier id of the supplier which supplies maximum items to store. (oehr_product_information).
```SQl
SELECT supplier_id, COUNT(*) AS item_count FROM oehr_product_information GROUP BY supplier_id ORDER BY item_count DESC FETCH FIRST 1 ROWS ONLY;
```
### 12. Find out the average list price of all types of memory. (oehr_product_information).
```SQl
SELECT memory_size, AVG(list_price) AS avg_price FROM oehr_product_information GROUP BY memory_size;
```
### 13. Find the average salary of the employee. (oehr_employees).
```SQl
SELECT AVG(salary) AS avg_salary FROM oehr_employees;
```
### 14. Show the employee details which are having a maximum salary. (oehr_employees).
```SQl
SELECT * FROM oehr_employees WHERE salary = (SELECT MAX(salary) FROM oehr_employees);
```
### 15. Show the employee details which are having minimum salary. (oehr_employees).
```SQl
SELECT * FROM oehr_employees WHERE salary = (SELECT MIN(salary) FROM oehr_employees);
```
### 16. Show job_id count for employees for each job id. (oehr_employees).
```SQl
SELECT job_id, COUNT(*) AS employee_count FROM oehr_employees GROUP BY job_id;
```
### 17. List out customer count for each city. (oehr_customers).
```SQl
SELECT city, COUNT(*) AS customer_count FROM oehr_customers GROUP BY city;
```
### 18. What is the average credit limit of the customers? (oehr_customers).
```SQl
SELECT AVG(credit_limit) AS avg_credit_limit FROM oehr_customers;
```
### 19. Show customers counts for each territory. (oehr_customers).
```SQl
SELECT territory_id, COUNT(*) AS customer_count FROM oehr_customers GROUP BY territory_id;
```
### 20. List out all unique cities where customers are living. (oehr_customers).
```SQl
SELECT DISTINCT city FROM oehr_customers;
```
### 21. Find out the top 5 minimum salary jobs with job titles. (oehr_jobs).
```SQl
SELECT job_title, min_salary FROM oehr_jobs ORDER BY min_salary ASC FETCH FIRST 5 ROWS ONLY;
```
### 22. Find out top 3 maximum salary job with job title (oehr_jobs).
```SQl
SELECT job_title, max_salary FROM oehr_jobs ORDER BY max_salary DESC FETCH FIRST 3 ROWS ONLY;
```

