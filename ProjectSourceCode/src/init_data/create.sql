DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS advisors;

CREATE TABLE students (
  identikey VARCHAR(20) PRIMARY KEY,
  password VARCHAR(60) NOT NULL
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(200) NOT NULL,
  year VARCHAR(15) NOT NULL,
  --advisor id assigned to student
  advisor_id VARCHAR(20) 
  taken_courses VARCHAR(50)[]
);
CREATE TABLE advisors (
  identikey VARCHAR(20) PRIMARY KEY,
  password VARCHAR(60) NOT NULL
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(200) NOT NULL,
  --array of students per advisor
  student_ids VARCHAR(20)[]
);


--student to advisor mapping. Will use this to 
This code will insert sample data into the tables `advisors`, `students_to_advisors`, `courses`, `student_courses`, and `prerequisites`. You can modify the values in the `INSERT INTO` statements to match your specific data.
DROP TABLE IF EXISTS students_to_advisors;
CREATE TABLE students_to_advisors (
  student_id INTEGER NOT NULL REFERENCES students (student_id),
  advisor_id INTEGER NOT NULL REFERENCES advisors (advisor_id)
);

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  course_id NUMERIC PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  credit_hours NUMERIC NOT NULL,
  prerequisites VARCHAR(50)[]
);

DROP TABLE IF EXISTS student_courses;
CREATE TABLE student_courses (
  course_id INTEGER NOT NULL REFERENCES courses (course_id),
  student_id INTEGER NOT NULL REFERENCES students (student_id)
);
  
DROP TABLE IF EXISTS prerequisites;
CREATE TABLE IF NOT EXISTS prerequisites (
  course_id INTEGER NOT NULL REFERENCES courses (course_id),
  prerequisite_id INTEGER NOT NULL REFERENCES courses (course_id)
);

