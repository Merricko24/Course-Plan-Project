# Course-Plan-Project
0. ## Team Number: 4
1. ## Team Name: The Advisors
2. ## Project Name: Schedules4U

3. ## Team Members:

### Merrick Oleszek:
  * Github: @Merricko24
  * Email: meol4367@colorado.edu 

### Xiaobo Gonaver:
  * Github: @x1aobog 
  * Email: xigo2260@colorado.edu 

### Adlai Kohn
  * Github: @adko9071
  * Email: adko9071@colorado.edu 

### Calvin Hawks:
  * Github: @CalvinHawks
  * Email: caha9859@colorado.edu

### Jaqueline Serrano:
  * Github: @Jackie995
  * Email: jase9895@colorado.edu 

### Coleman Caldwell:
  * Github: @ccald27
  * Email: coca9230@colorado.edu 

4. ## Application Name: Course Planner

5. ## Application Description: 
We have decided to create an application that helps students efficiently plan their academic journey by allowing them to create a structured course roadmap based on their completed and required coursework. Users will be able to register using their email address to securely login and access their personalized academic plans. Upon registration, they can input details about the courses they have already completed, including course codes, names, and availability.

With this information, the application may be able to generate a customized semester-by-semester course map in the form of a flowchart to ensure users can stay on track to graduate on time while meeting all their degree requirements. To ensure our application is different from any other scheduling applications, we want to add a feature that recommends classes to users based on courses they have already completed, as required when signing up for the website. To do this we could populate a database with the users data, such as the classes they have previously taken as selected/collected on the registration page. Then in the index.js file use a fetch API to get class recommendations based on the classes previously taken (stored in the database). In an HTML file show these results on the front end to the user. The feature would identify and show which courses you could qualify for based on your prerequisites and offer them to you. For high demand courses, we could use this existing database to make an SQL query to select whatever amount of high demand courses there are based on the enrollment count (ie how many times that class pops up in a students classes-taken database). This result could then be printed on the front end for the user to see. 

## Features:
  * Class search
  * Footer 
  * Semester by semester planning: assuming that all classes offered every fall/spring semester are always offered (no deviation) 
  * Suggest future classes based on classes already taken 
  * Login page - email, password (only @colorado.edu)
  * Logout page - message confirming logout, navigate back to login page
  * Web crawler to gather data (class data and major requirements)
  * Registration page - select your major and classes you've taken
  * Plan page- horizontal scrolling of all your semesters
  * Credits for each classes
  * Class hours and semester availabilities
  * Class ratings?
  * Ratemyprofessor api? Not public but found some resources we can use to make it. Flow-chart side scrolling style course planner
  * Can add more semesters as needed
  * “Advisor collaboration mode”, lets advisors see and comment on class choice/graduation plan while maintaining a degree of separation between advisor and student(? As per the premise of the website)

6. ## Audience: 
Students who need help planning their semester’s courses for the near or distant future, need class recommendations, need to see what they should/have to take, and see their course plans to the end of college.

7. ## Vision Statement: 
Ensuring students can plan out their degree requirements and stay on track to graduate.
8. ## Version Control: Repository: https://github.com/Merricko24/Course-Plan-Project

9. ## Development Methodology: Use a kanban board to keep track of user stories. Use agile methodology to track/delegate building the site. Check in periodically to see how user assigned stories are going		

10. ## Communication Plan: We plan to communicate on a Discord server named: CSCI 3308 Group Project. We plan to make sub-channels to discuss and document various parts of the project.

11. ## Meeting Plan: Friday’s at 4:30pm-4:45pm with TA over zoom and Tuesday’s at 12 for group work time in-person.
