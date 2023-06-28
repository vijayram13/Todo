const express = require('express');
const app = express();
const port = 5000;

// to get path directory
const path = require('path');

//static files
app.use(express.static('./assets'));

// to get body elemet using post request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

//middleware
app.use("/", require('./routes/route.js'));

const db = require('./config/mongoose');

//ejs setup
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));


//server listner
app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
  console.log(`Todo App listening at http://localhost:${port}`);
});
