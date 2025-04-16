DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS advisors;

CREATE TABLE students (
  identikey VARCHAR(20) PRIMARY KEY NOT NULL,
  password VARCHAR(60) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(200),
  year VARCHAR(15),
  advisor_id VARCHAR(20),
  taken_courses VARCHAR(50)[]
);
CREATE TABLE advisors (
  identikey VARCHAR(20) PRIMARY KEY NOT NULL,
  password VARCHAR(60) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(200),
  --array of students per advisor
  student_ids VARCHAR(20)[]
);


--This code will insert sample data into the tables `advisors`, `students_to_advisors`, `courses`, `student_courses`, and `prerequisites`. You can modify the values in the `INSERT INTO` statements to match your specific data.
DROP TABLE IF EXISTS students_to_advisors;
CREATE TABLE students_to_advisors (
  student_id VARCHAR(20) NOT NULL REFERENCES students (identikey),
  advisor_id VARCHAR(20) NOT NULL REFERENCES advisors (identikey)
);

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  course_id VARCHAR(20) PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  credit_hours NUMERIC NOT NULL,
  prerequisites VARCHAR(50)[]

);




