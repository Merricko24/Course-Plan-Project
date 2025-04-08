const axios = require('axios')
var JSSoup = require('jssoup').default;
//In doing this scraper, I have realized it is more efficient to make the API calls work
//as best as possible for the data we need, rather than scraping the HTML and interacting with the page
// (something we could do through python).
// So, here is the API format:


//Call for the classes, with the KEYWORD parameter 
// https://classes.colorado.edu/api/?page=fose&route=search&keyword=KEYWORD


//Call for class details, with the CLASS_ID parameter
// NOTE: we pass the course ID in the headers, which is how the details for each course is fetched
//https://classes.colorado.edu/api/?page=fose&route=details


//GIVEN this api formatting that has been discovered, we can:
//1. Call the API with the keyword parameter to get a list of classes
//2. Get the course IDs of the class list and store them
//3. Call the API with the class ID parameter to get the details for each class
//4. Store the details in the database
//importance in API requests. We can use this to get 
axios.get('https://classes.colorado.edu/api/?page=fose&route=search&keyword=CSCI')

    .then((response) => {
        //console.log(response.data) // debug
        console.log(response)
        const soup = new JSSoup(response.data);
        //console.log(soup) // debug
        const classes = soup.findAll('div', 'course');
        //console.log(classes) // debug
        const classList = [];
        classes.forEach((course) => {
            //push each class into the classList array
            //this is so we can use it in the DB
            //and we can sort each section i.e className, courseCode, description
            const courseName = course.find('div', ).text;
            const courseCode = course.find('h5').text;
            const courseDescription = course.find('p').text;
            const courseLink = course.find('a').attrs.href;
            const classObj = {
                name: courseName,
                code: courseCode,
                description: courseDescription,
                link: courseLink
            }
            classList.push(classObj);
        });
        

    })
    .catch((error) => {
		console.error(error)
	});