DROP TABLE IF EXISTS users;
CREATE TABLE users(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(60) NOT NULL
);

DROP TABLE IF EXISTS courses;
CREATE TABLE courses(
    course_id NUMERIC PRIMARY KEY,
    course_code VARCHAR(50) NOT NULL,
    credit_hours INT NOT NULL,
    max_enrollment INT,
    current_enrollment INT DEFAULT 0,
    start_date DATE,
    end_date DATE,
    start_time TIME,
    end_date TIME,
    days VARCHAR(50),
    status VARCHAR(50) DEFAULT 'Open'
);