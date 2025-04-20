-- --password is 'password', encrypted is $2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy
-- INSERT INTO students(identikey, password, first_name, last_name, email, year, advisor_id, taken_courses) VALUES 
--     ('mann2000', '$2a$10$9nMrE/.5V0iVuDfeMvt1IeOOBjCWwZe8olbtdgqb3WnxmUfRACa7y', 'man', 'name', 'test@colorado.edu', 'Senior',  'umar1234', ARRAY[]::VARCHAR(50)[]),
--     ('joab1234', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','John', 'Applebee', 'joab1234@colorado.edu', 'Freshman',  'umar1234', ARRAY['CSCI1300']::VARCHAR(50)[]),
    -- ('coca9230','$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy', 'Coleman', 'Caldwell', 'coca9230@colorado.edu', 'Senior',  'eche1337', ARRAY['CSCI1300', 'CSCI2270']::VARCHAR(50)[]),
    -- ('bpit2018', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','Brad', 'Pitt', 'bpit2018@colorado.edu', 'Sophomore', 'eche1337', ARRAY[]::VARCHAR(50)[]);


-- INSERT INTO advisors (identikey, password, first_name, last_name, email, student_ids) VALUES 
--     ('umar1234','$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy', 'Test', 'Advisor', 'umar1234@colorado.edu', ARRAY['test1234', 'joab1234']::VARCHAR(50)[]),
--     ('eche1337', '$2a$10$J54.q/9R8ohVOM/e22z5FOxZp/CWHfyHfK0r14c0ew81q1yNFDQyy','Onemore', 'Advisor', 'eche1337@colorado.edu', ARRAY['coca9230', 'bpit2018']::VARCHAR(50)[]);

 INSERT INTO courses (course_id, course_name, credit_hours, term) VALUES 
('CSCI1300', 'Introduction to Computer Science', 3, 'fa24'),
('CSCI2270', 'Data Structures', 4, 'fa24'),
('CSCI3287', 'Database Systems', 3, 'sp24'),
('CSCI3753', 'Operating Systems', 3, 'su24'),
('CSCI 5828', 'Software Engineering', 4, 'sp25'),
('CSCI 2300', 'Numeric Systems', 4, 'fa23'),
('MATH 1400', 'Software Engineering', 4, 'sp24'),
('CSCI1010', 'Computational Thinking', 3, 'fa23'),
('CSCI1200', 'Introduction to Python', 3, 'sp24'),
('CSCI1500', 'Web Development Fundamentals', 3, 'su24'),
('CSCI2100', 'Machine Organization', 4, 'fa24'),
('CSCI2400', 'Principles of Cybersecurity', 3, 'sp25'),
('CSCI2600', 'Artificial Intelligence Basics', 3, 'su25'),
('CSCI3001', 'Algorithm Analysis', 4, 'fa23'),
('CSCI3105', 'Functional Programming', 3, 'sp24'),
('CSCI3200', 'Mobile App Development', 3, 'su24'),
('CSCI3300', 'Cloud Computing', 4, 'fa24'),
('CSCI3400', 'Parallel and Distributed Systems', 4, 'sp25'),
('CSCI3600', 'Computer Graphics', 3, 'su25'),
('CSCI3700', 'Blockchain Technologies', 3, 'fa23'),
('CSCI3800', 'Natural Language Processing', 3, 'sp24'),
('CSCI4000', 'Advanced Machine Learning', 4, 'su24'),
('CSCI4100', 'Quantum Computing Fundamentals', 3, 'fa24'),
('MATH1500', 'Discrete Mathematics', 4, 'fa23'),
('MATH2300', 'Linear Algebra for CS', 4, 'sp24'),
('MATH2700', 'Probability and Statistics', 4, 'su24'),
('MATH3100', 'Numerical Analysis', 3, 'fa24');

     

INSERT INTO student_courses (identikey, course_id, term) VALUES 
('test2000', 'CSCI1300', 'fa24'),
('test2000', 'CSCI2270', 'sp24');
