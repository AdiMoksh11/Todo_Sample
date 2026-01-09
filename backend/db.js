
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:dbUserPass@cluster0.kiojwsv.mongodb.net/NewTodoApp')

const todoSchema = new mongoose.Schema({
        title: String,
        description: String,
        completed: Boolean
    });

    const Todo = mongoose.model('todos', todoSchema);
 
module.exports = {
    Todo: Todo
};