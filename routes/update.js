var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Model = require('../models/tasks');


//learn how to use put request in rest api

router.put('/', (req, res, next) => {
    console.log(req.body);
    
    let taskId = req.body.taskId;
    let completed = req.body.completed;

    Model.update({taskId : taskId}, {$set : {completed : completed}}, {new : true})
         .exec()
         .then((result) => {
            console.log('Tasks complete status updated...');
            res.status(200).send('Updated successfully...');
         }).catch((err) => {
             res.status(500).send('Something went wrong while updating database...');
            console.log('Something went wrong while updating database...', err);
         });
});

module.exports = router;

