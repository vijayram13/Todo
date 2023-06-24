const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

// to get body elemet using post request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));

//middleware
app.use("/", require('./routes/route.js'));



//ejs setup
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));


//server listner
app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
  console.log(`Example app listening at http://localhost:${port}`);
});
