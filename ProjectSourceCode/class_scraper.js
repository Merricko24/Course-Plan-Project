const axios = require('axios')
var JSSoup = require('jssoup').default;

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
        

    })
    .catch((error) => {
		console.error(error)
	});