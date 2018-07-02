const mongoose = require('mongoose');


const db = mongoose.connection;

db.once('open', ()=>{
    console.log('database is ready to connect...');
});

db.on('error', () => {
    console.log('Something went wrong while connecting to database..');
});


let Schema = mongoose.Schema;

let taskSchema = new Schema({
    taskId : {
        type : Number,
        required : true,
        unique : true
    },
    category : {
        type : String,
        required : true
    },
    completed : {
        type : String,
        required : true,
    },
    task : {
        type : String,
        required : true
    }
});


//create the model from the schema 

let todoModel = mongoose.model('task', taskSchema);

module.exports = todoModel;