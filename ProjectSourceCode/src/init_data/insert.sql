-- --password is 'password', encrypted is $2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy
-- INSERT INTO students(identikey, password, first_name, last_name, email, year, advisor_id, taken_courses) VALUES 
--     ('mann2000', '$2a$10$9nMrE/.5V0iVuDfeMvt1IeOOBjCWwZe8olbtdgqb3WnxmUfRACa7y', 'man', 'name', 'test@colorado.edu', 'Senior',  'umar1234', ARRAY[]::VARCHAR(50)[]),
--     ('joab1234', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','John', 'Applebee', 'joab1234@colorado.edu', 'Freshman',  'umar1234', ARRAY['CSCI1300']::VARCHAR(50)[]),
    -- ('coca9230','$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy', 'Coleman', 'Caldwell', 'coca9230@colorado.edu', 'Senior',  'eche1337', ARRAY['CSCI1300', 'CSCI2270']::VARCHAR(50)[]),
    -- ('bpit2018', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','Brad', 'Pitt', 'bpit2018@colorado.edu', 'Sophomore', 'eche1337', ARRAY[]::VARCHAR(50)[]);


-- INSERT INTO advisors (identikey, password, first_name, last_name, email, student_ids) VALUES 
--     ('umar1234','$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy', 'Test', 'Advisor', 'umar1234@colorado.edu', ARRAY['test1234', 'joab1234']::VARCHAR(50)[]),
--     ('eche1337', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','Onemore', 'Advisor', 'eche1337@colorado.edu', ARRAY['coca9230', 'bpit2018']::VARCHAR(50)[]);

 INSERT INTO courses (course_id, course_name, credit_hours) VALUES 
     ('CSCI1300', 'Introduction to Computer Science', 3),
     ('CSCI2270', 'Data Structures', 4),
     ('CSCI3287', 'Database Systems', 3),
     ('CSCI3753', 'Operating Systems', 3),
     ('CSCI 5828', 'Software Engineering', 4);
