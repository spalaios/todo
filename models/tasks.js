const mongoose = require('mongoose');


const db = mongoose.connection;

db.on('once', ()=>{
    console.log('database is ready to connect...');
});

db.on('error', () => {
    console.log('Something went wrong while connecting to database..');
});


let Schema = mongoose.Schema;

let taskSchema = new Schema({
    taskId : Number,
    category : String,
    completed : Boolean,
    task : String
});


//create the model from the schema 

let todoModel = mongoose.model('task', taskSchema);

module.exports = todoModel;