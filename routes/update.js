var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Model = require('../models/tasks');


//learn how to use put request in rest api

router.post('/', (req, res, next) => {
    console.log(req.body);
    // update the database as per the data received from the update request
    let updateObjects = req.body;
    // convert the tasks in updateObject to an array first
    let updateArray = [];
    for(const key of Object.keys(updateObjects)){
        updateArray.push(updateObjects[key]);
    }
    // console.log(updateArray);
    updateArray.forEach((value) => {
        console.log('Testing value ',value['taskId']);

    })

    res.status(200).send('PUT request accepted...');
});















module.exports = router;

