//import express library
const express = require('express');

// import controller.js file from controller
const homeController = require('../controller/controller.js');

// import router from express
const router = express.Router();

//homepage  routes
router.get('/', homeController.home)

//deletepage routes (to delete document)
router.get('/task', homeController.task);

//createtask routes (to get form submission data)
router.post('/create-task', homeController.formdata);

// export router
module.exports = router;