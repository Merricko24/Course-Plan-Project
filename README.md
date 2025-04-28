# Course-Plan-Project

## 0. Team Number  
**4**  

## 1. Team Name  
**The Advisors**  

## 2. Project Name  
**Schedules4U**  

## 3. Team Members  

### Merrick Oleszek:  
  - **Github:** @Merricko24  
  - **Email:** meol4367@colorado.edu  

### Xiaobo Gonaver:  
  - **Github:** @x1aobog  
  - **Email:** xigo2260@colorado.edu  

### Adlai Kohn:  
  - **Github:** @adko9071  
  - **Email:** adko9071@colorado.edu  

### Calvin Hawks:  
  - **Github:** @CalvinHawks  
  - **Email:** caha9859@colorado.edu  

### Jaqueline Serrano:  
  - **Github:** @Jackie995  
  - **Email:** jase9895@colorado.edu  

### Coleman Caldwell:  
  - **Github:** @ccald27  
  - **Email:** coca9230@colorado.edu  

## 4. Application Name  
**Course Planner**  

## 5. Application Description  
We have decided to create an application that helps students efficiently plan their academic journey by allowing them to create a structured course roadmap based on their completed and required coursework. Users will be able to register using their email address to securely log in and access their personalized academic plans. Upon registration, they can input details about the courses they have already completed, including course codes, names, and availability.  

With this information, the application may be able to generate a customized semester-by-semester course map in the form of a flowchart to ensure users can stay on track to graduate on time while meeting all their degree requirements.  

To ensure our application is different from any other scheduling applications, we want to add a feature that recommends classes to users based on courses they have already completed. To do this, we could populate a database with the users' data, such as the classes they have previously taken, as selected/collected on the registration page. Then, in the `index.js` file, we can use a `fetch` API to get class recommendations based on the classes previously taken (stored in the database). In an HTML file, we will display these results on the front end for the user.  

The feature would identify and show which courses users qualify for based on their prerequisites and offer them accordingly. For high-demand courses, we could use this existing database to make an SQL query to select high-demand courses based on enrollment count (i.e., how many times that class appears in a student's classes-taken database). This result could then be displayed on the front end for the user.  

## 6. Features  
- Class search  
- Footer  
- Semester-by-semester planning (assuming all classes offered every fall/spring semester are always available with no deviation)  
- Suggest future classes based on classes already taken  
- Login page - email, password (only `@colorado.edu`)  
- Logout page - message confirming logout, navigate back to login page  
- Web crawler to gather data (class data and major requirements)  
- Registration page - select your major and classes you've taken  
- Plan page - horizontal scrolling of all your semesters  
- Credits for each class  
- Class hours and semester availabilities  
- Flowchart side-scrolling style course planner  
- Ability to add more semesters as needed  
- **Advisor Collaboration Mode** - Lets advisors see and comment on class choice/graduation plans while maintaining a degree of separation between advisor and student (as per the premise of the website)  

## 7. Technology Stack
- For this project, we used Github to plan, track, and collaborate on our website
- We used VSCode as our code editor, which ensured quick and easy updates and progress
- We used Docker Desktop to simplify the building and running of our application
- We used mySQL to build the database that drives our website
- We used html and javascript to implement our website

## 8. Prerequisites to run the application
- All you need to run the application is the link to the website. No other software except for a browser are required.

## 9. Running the application locally
- All you need to run the application locally is:
- Any code editor (VSCode, terminal)
- Docker Desktop
- any browser to access localhost

## Instructions to run the application locally
- Open VSCode or an editor of your choice
- Enter command "docker compose up"
- Open a web browser of your choice and type in localhost:300/
- Now you will be in the homepage of our app, Schedules4U

## 10. Audience  
- Students who need help planning their semester’s courses for the near or distant future  
- Students who need class recommendations  
- Students who need to see what they should/have to take and see their course plans to the end of college  

## 11. Vision Statement  
**Ensuring students can plan out their degree requirements and stay on track to graduate.**  

## 12. Development Methodology  
- Use a **Kanban board** to keep track of user stories  
- Use **Agile methodology** to track and delegate tasks  
- Check in periodically to see how user-assigned stories are progressing  

## 13. Communication Plan  
- We plan to communicate on a **Discord server** named: *CSCI 3308 Group Project*  
- We plan to make sub-channels to discuss and document various parts of the project  

## 14. Meeting Plan  
- **Fridays at 4:30 PM - 4:45 PM** with TA over Zoom  
- **Tuesdays at 12 PM** for group work time in person

## Link to Application
https://course-plan-project.onrender.com/register 