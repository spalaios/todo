var express = require('express');
var router = express.Router();
const Model = require('../models/tasks');
/* POST to add tasks to the list */
router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req);
    res.send('success');
});

//learn about CORS in detail...

module.exports = router;