const express = require('express');
const homeController = require('../controller/controller.js');
const router = express.Router();
router.get('/', homeController.home)

router.get('/about', homeController.about);



router.post('/create-task', homeController.formdata);


module.exports = router;