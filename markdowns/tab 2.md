
```SQL
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    Age INT,
    Major VARCHAR(100),
    FacultyID INT
);
```
```SQL
CREATE TABLE Faculty (
    FacultyID INT PRIMARY KEY,
    FacultyName VARCHAR(100),
    Department VARCHAR(100)
);
```

```SQL
INSERT INTO Student (StudentID, StudentName, Age, Major, FacultyID) VALUES
(1, 'Alice', 20, 'Computer Science', 101),
(2, 'Bob', 22, 'Mechanical Engineering', 102),
(3, 'Charlie', 21, 'Physics', 103),
(4, 'David', 23, 'Mathematics', 104),
(5, 'Eva', 22, 'Chemistry', 101);
```

```SQL
INSERT INTO Faculty (FacultyID, FacultyName, Department) VALUES
(101, 'Dr. Smith', 'Computer Science'),
(102, 'Dr. Johnson', 'Mechanical Engineering'),
(103, 'Dr. Brown', 'Physics'),
(104, 'Dr. White', 'Mathematics'),
(105, 'Dr. Green', 'Chemistry');
```

### 1.    List the names of students who are majoring in the same department as Dr. Smith.
```SQL
--place holder for SQL query
```
### 2.    Find the faculty name who has the youngest student.
```SQL
--place holder for SQL query
```
### 3.    List the names of students who have the same major as the faculty member with FacultyID 103.
```SQL
--place holder for SQL query
```
### 4.    Find the names of faculties who do not have any students.
```SQL
--place holder for SQL query
```
### 5.    List the names of students who are older than the average age of students.
```SQL
--place holder for SQL query
```
### 6.    Find the faculty who is advising the student named 'Charlie'.
```SQL
--place holder for SQL query
```
### 7.    List the names of students who are in the same department as 'Bob'.
```SQL
--place holder for SQL query
```
### 8.    Find the names of faculties who have students majoring in 'Chemistry'.
```SQL
--place holder for SQL query
```
### 9.    List the names of students who are advised by the faculty member of the 'Mathematics' department.
```SQL
--place holder for SQL query
```
### 10.    Find the average age of students majoring in 'Computer Science'.
```SQL
--place holder for SQL query
```
