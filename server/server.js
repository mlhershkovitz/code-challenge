//const requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//choose port
const PORT = 5000;

//uses
//connecting the apps (that were installed) being used
app.use( bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

//tell the server to start listening on specific port
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});//end listener

//make string a variable (neater)
let string = 'The button was clicked.'

//GET request
app.get('/string', (req, res) => {
    console.log('in server GET request for string');
    res.send(string);    
}); //end get request
