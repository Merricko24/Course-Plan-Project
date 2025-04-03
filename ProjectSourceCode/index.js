app.get('/welcome', (req, res) => {
    res.json({status: 'success', message: 'Welcome!'});
  });


// *****************************************************
// <!-- Section 5 : Start Server-->
// *****************************************************
// starting the server and keeping the connection open to listen for more requests
module.exports = app.listen(3000);
console.log('Server is listening on port 3000');