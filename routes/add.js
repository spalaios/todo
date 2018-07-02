var express = require('express');
var router = express.Router();
const Model = require('../models/tasks');
const random = require('random-js')();



/* POST to add tasks to the list */
router.post('/', function(req, res, next) {
    console.log(req.body);
    // console.log(req);
    // generate a taskId for each task
    let randomValue = random.integer(1,100000);
    console.log('Random value is '+randomValue);
    const taskId = randomValue;
    const category = req.body.category.trim();
    const task = req.body.task.trim();
    const completed = req.body.completed.trim();

    const model = new Model({
        taskId : taskId,
    category : category,
    completed : task,
    task : task
    });

    model.save()
        .then((result) => {
            console.log('result save successfully', result);    
        }).catch((err) => {
            console.log('error while saving data successfully', err);
        });

    res.status(201).send('success');
});

//learn about CORS in detail...

module.exports = router;