const todoList = require('../controller/todoList');

//Routing all HTTP requests to /todoList to todoList controller
//app.use('/todoList',todoList);

//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

//GET HTTP method to /todoList
router.get('/',(req,res) => {
    res.send("GET");
});

//POST HTTP method to /todoList

router.post('/', (req,res,next) => {
    res.send("POST");

});

//DELETE HTTP method to /todoList. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
    res.send("DELETE");

})

module.exports = router;