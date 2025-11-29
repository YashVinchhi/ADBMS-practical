### Create the Categories Table
```SQL

CREATE TABLE Categories (
    CategoryID NUMBER PRIMARY KEY,
    CategoryName VARCHAR(50) NOT NULL
);
```
###  Create the Products Table
```SQL

CREATE TABLE Products (
    ProductID NUMBER PRIMARY KEY,
    ProductName VARCHAR(50) NOT NULL,
    CategoryID NUMBER,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
```
###  Create the Suppliers Table
```SQL

CREATE TABLE Suppliers (
    SupplierID NUMBER PRIMARY KEY,
    SupplierName VARCHAR(50) NOT NULL,
    ProductID NUMBER,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
```
###  DATA INSERTATION
```SQL

INSERT INTO Categories (CategoryID, CategoryName) VALUES (1, 'Fruits')
INSERT INTO Categories (CategoryID, CategoryName) VALUES (2, 'Berries')
INSERT INTO Categories (CategoryID, CategoryName) VALUES (3, 'Dried Fruits')
INSERT INTO Categories (CategoryID, CategoryName) VALUES (4, 'Seasonal Fruits');
```
```SQL
INSERT INTO Products (ProductID, ProductName, CategoryID) VALUES (1, 'Apple', 1)
INSERT INTO Products (ProductID, ProductName, CategoryID) VALUES (2, 'Banana', 1)
INSERT INTO Products (ProductID, ProductName, CategoryID) VALUES (3, 'Cherry', 2)
INSERT INTO Products (ProductID, ProductName, CategoryID) VALUES (4, 'Date', 3);
```
```SQL
INSERT INTO Suppliers (SupplierID, SupplierName, ProductID) VALUES (1, 'Supplier A', 1)
INSERT INTO Suppliers (SupplierID, SupplierName, ProductID) VALUES (2, 'Supplier B', 2)
INSERT INTO Suppliers (SupplierID, SupplierName, ProductID) VALUES (3, 'Supplier C', 4);  
```

### 1. Retrieve all categories and their products using a **LEFT JOIN**.
```SQL
place holder for SQL query
```
### 2. Find all products and corresponding suppliers (if available) using a **LEFT JOIN**.
```SQL
place holder for SQL query
```


### 3. List all categories and the products that belong to them using a **RIGHT JOIN**.
```SQL
place holder for SQL query
```


### 4. Get a list of all suppliers and their product details using a **RIGHT JOIN**, if any.
```SQL
place holder for SQL query
```


### 5. Retrieve the category name, product name, and supplier name for all records, ordered by category name
```SQL
place holder for SQL query
```


### 6. Retrieve a list of all products and their suppliers, including those without matching records in either table using a **FULL OUTER JOIN**.
```SQL
place holder for SQL query
```


### 7. Which categories do not have any associated products?
```SQL
place holder for SQL query
```


### 8. List all products that do not have suppliers listed.
```SQL
place holder for SQL query
```


### 9. Get the count of products for each category
```SQL
place holder for SQL query
```


### 10. Find the categories that have more than or at least 2 products.
```SQL
place holder for SQL query
```