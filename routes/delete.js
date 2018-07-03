var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Model = require('../models/tasks');



router.delete('/', (req, res, next) =>{
    console.log(req.body);
    let taskId = req.body.taskId;

    Model.findOneAndRemove({taskId : taskId})
        .exec()
        .then((result) => {
            console.log('Task deleted successfully....');
        }).catch((err) => {
            console.log('Error while delete task from database..');
        });

    res.send('delete req accepted...');
});






module.exports = router;