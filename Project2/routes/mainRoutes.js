const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

//GET /index: send the user to the index/home page
router.get('/', controller.index);

//GET /contact : send the user to the contact page
router.get('/contact' , controller.contact );

//GET /about : send the user to the about page
router.get('/about' , controller.about );

module.exports = router;