const axios = require('axios')
var JSSoup = require('jssoup').default;

axios.get('https://classes.colorado.edu/api/?page=fose&route=search&keyword=CSCI')

    .then((response) => {
        //console.log(response.data) // debug
        console.log(response)
        

    })
    .catch((error) => {
		console.error(error)
	});