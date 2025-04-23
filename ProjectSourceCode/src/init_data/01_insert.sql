
 INSERT INTO students(identikey, password, first_name, last_name, start_term, advisor_id) VALUES 
 ('test2000', '$2a$10$eZ2.mCQqaWsGltXqL9bYMeXYR1yK3vlsRkLUC8TlotToZm3YRqroC', 'test', 'user', 'fa25', 'fesu3567' );


 INSERT INTO advisors (identikey, password, first_name, last_name, student_ids) VALUES
 ('fesu3567', '$2a$10$eZ2.mCQqaWsGltXqL9bYMeXYR1yK3vlsRkLUC8TlotToZm3YRqroC', 'test', 'advisor', ARRAY['test2000']);
 INSERT INTO courses (course_id, course_name, credit_hours, term) VALUES 
('CSCI1300', 'Introduction to Computer Science', 3, 'fa25'),
('CSCI2270', 'Data Structures', 4, 'fa25'),
('CSCI3287', 'Database Systems', 3, 'sp26'),
('CSCI3753', 'Operating Systems', 3, 'fa26'),
('CSCI5828', 'Software Engineering', 4, 'sp26'),
('CSCI2300', 'Numeric Systems', 4, 'fa25'),
('MATH1400', 'Software Engineering', 4, 'sp26'),
('CSCI1010', 'Computational Thinking', 3, 'fa25'),
('CSCI1200', 'Introduction to Python', 3, 'sp26'),
('CSCI1500', 'Web Development Fundamentals', 3, 'fa26'),
('CSCI2100', 'Machine Organization', 4, 'fa25'),
('CSCI2400', 'Principles of Cybersecurity', 3, 'sp26'),
('CSCI2600', 'Artificial Intelligence Basics', 3, 'sp26'),
('CSCI3001', 'Algorithm Analysis', 4, 'fa25'),
('CSCI3105', 'Functional Programming', 3, 'sp26'),
('CSCI3200', 'Mobile App Development', 3, 'fa26'),
('CSCI3300', 'Cloud Computing', 4, 'fa25'),
('CSCI3400', 'Parallel and Distributed Systems', 4, 'sp26'),
('CSCI3600', 'Computer Graphics', 3, 'fa26'),
('CSCI3700', 'Blockchain Technologies', 3, 'fa25'),
('CSCI3800', 'Natural Language Processing', 3, 'sp26'),
('CSCI4000', 'Advanced Machine Learning', 4, 'fa26'),
('CSCI4100', 'Quantum Computing Fundamentals', 3, 'fa25'),
('MATH1500', 'Discrete Mathematics', 4, 'fa25'),
('MATH2300', 'Linear Algebra for CS', 4, 'sp26'),
('MATH2700', 'Probability and Statistics', 4, 'fa26'),
('MATH3100', 'Numerical Analysis', 3, 'fa25');


     

INSERT INTO student_courses (identikey, course_id, course_name, credit_hours,  term) VALUES 
('test2000', 'CSCI1300', 'Intro to computer science', 3, 'fa25'),
('test2000', 'CSCI2270', 'Data something', 4, 'sp26');


 INSERT INTO advisor_notes (student_identikey, advisor_identikey, note_text) VALUES
 ('test2000', 'fesu3567', 'Student is on track to graduate Fall 2025.');
-- ('abab5380', 'fesu3567', 'Discussed switching majors from MechE to Comp Sci.'),
-- ('anmo3456', 'fesu3567', 'Student expressed interest in research opportunities. Sent follow-up email with available faculty contacts.');
