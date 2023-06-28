//make connection to database
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp")
.then(() => console.log("Successfully connected...."))
.catch((err) => console.log(err));


