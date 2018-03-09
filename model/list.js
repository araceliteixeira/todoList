//Require mongoose package
const mongoose = require('mongoose');

//Define TodoListSchema with description, isChecked, date
const Schema = mongoose.Schema;
const TodoListSchema = Schema({
    description: {
        type: String,
        required: true
    },
    isChecked: Boolean,
    dueDate: {
        type: String
    }
});
const TodoList = mongoose.model('TodoList', TodoListSchema );
module.exports = TodoList;

//TodoList.find() returns all the lists
module.exports.getAllLists = (callback) => {
    TodoList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

//Here we need to pass an id parameter to TodoList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    TodoList.remove(query, callback);
}