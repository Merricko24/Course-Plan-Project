INSERT INTO students(identikey, password, first_name, last_name, email, year, advisor_id, taken_courses) VALUES 
    ('test1234', 'password', 'Test', 'User', 'test@colorado.edu', 'Senior',  'umar1234', ARRAY[]::VARCHAR(50)[]),
    ('joab1234', 'password','John', 'Applebee', 'joab1234@colorado.edu', 'Freshman',  'umar1234', ARRAY['CSCI1300']::VARCHAR(50)[]),
    ('coca9230','password', 'Coleman', 'Caldwell', 'coca9230@colorado.edu', 'Senior',  'eche1337', ARRAY['CSCI1300', 'CSCI2270']::VARCHAR(50)[]),
    ('bpit2018', 'password','Brad', 'Pitt', 'bpit2018@colorado.edu', 'Sophomore', 'eche1337', ARRAY[]::VARCHAR(50)[]);


INSERT INTO advisors (identikey, password, first_name, last_name, email, student_ids) VALUES 
    ('umar1234','password', 'Test', 'Advisor', 'umar1234@colorado.edu', ARRAY['test1234', 'joab1234']::VARCHAR(50)[]),
    ('eche1337', 'password','Onemore', 'Advisor', 'eche1337@colorado.edu', ARRAY['coca9230', 'bpit2018']::VARCHAR(50)[]);

INSERT INTO courses (course_id, course_name, credit_hours) VALUES 
    ('CSCI1300', 'Introduction to Computer Science', 3),
    ('CSCI2270', 'Data Structures', 4),
    ('CSCI3287', 'Database Systems', 3),
    ('CSCI3753', 'Operating Systems', 3),
    ('CSCI 5828', 'Software Engineering', 4);
