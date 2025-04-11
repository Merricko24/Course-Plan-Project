INSERT INTO students(student_id, first_name, last_name, email, year, major, degree, advisor_id) VALUES (
    ('test1234', 'Test', 'User', 'test@colorado.edu', 'Senior', 'Computer Science', 'BSCS' , 'umar1234'),
    ('joab1234', 'John', 'Applebee', 'joab1234@colorado.edu', 'Freshman', 'Psychology', 'BSPSYCH' , 'umar1234')
        ('coca9230', 'Coleman', 'Caldwell', 'coca9230@colorado.edu', 'Senior', 'Info Science', 'BSINFO' , 'eche1337')
        ('bpit2018', 'Brad', 'Pitt', 'bpit2018@colorado.edu', 'Sophomore', 'Business', 'BSBN' , 'eche1337')


)

INSERT INTO advisors (advisor_id, first_name, last_name, email, student_ids) VALUES (
    ('umar1234', 'Test', 'Advisor', 'umar1234@colorado.edu', ['test1234','joab1234'])
    ('eche1337', 'Onemore', 'Advisor', 'eche1337@colorado.edu', ['coca9230','bpit2018'])


)
