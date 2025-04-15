INSERT INTO students(student_id, password, first_name, last_name, email, year, major, degree, advisor_id) VALUES (
    ('test1234', 'password', 'Test', 'User', 'test@colorado.edu', 'Senior', 'Computer Science', 'BSCS' , 'umar1234'),
    ('joab1234', 'password','John', 'Applebee', 'joab1234@colorado.edu', 'Freshman', 'Psychology', 'BSPSYCH' , 'umar1234')
        ('coca9230','password', 'Coleman', 'Caldwell', 'coca9230@colorado.edu', 'Senior', 'Info Science', 'BSINFO' , 'eche1337')
        ('bpit2018', 'password','Brad', 'Pitt', 'bpit2018@colorado.edu', 'Sophomore', 'Business', 'BSBN' , 'eche1337')


)

INSERT INTO advisors (advisor_id, password, first_name, last_name, email, student_ids) VALUES (
    ('umar1234','password', 'Test', 'Advisor', 'umar1234@colorado.edu', ['test1234','joab1234'])
    ('eche1337', 'password','Onemore', 'Advisor', 'eche1337@colorado.edu', ['coca9230','bpit2018'])


)

INSERT INTO courses (course_id, course_name, credit_hours) VALUES (
    ('CSCI1300', 'Introduction to Computer Science', 3, NULL),
    ('CSCI2270', 'Data Structures', 4, ['CSCI1300']),
    ('CSCI3287', 'Database Systems', 3, ['CSCI1300', 'CSCI2270']),
    ('CSCI3753', 'Operating Systems', 3, ['CSCI3287']),
    ('CSCI 5828', 'Software Engineering', 4, ['CSCI3753', 'CSCI3287']),
);