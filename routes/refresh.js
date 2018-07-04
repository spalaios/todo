var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Model = require('../models/tasks');


router.get('/', (req, res, next) => {
    Model.find({})
         .exec()
         .then((results) => {
            console.log(results); 
            res.status(200).send(results);
            // res.send('data from database is sent...');   
         }).catch((err) => {
             console.log('something went wrong while searching from the database');
             res.send('data from database not found...');  
         });
});



module.exports = router;