const model = require('../models/connection');

// Renders the home page
exports.index = (req, res)=>{
    res.render('./Main/index');
 };

 // Renders the contacts page
 exports.contact = (req, res)=>{
    res.render('./Main/contact');
 };

 // Renders the about page
 exports.about = (req, res)=>{
    res.render('./Main/about');
 };