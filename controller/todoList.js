const todoList = require('../controller/todoList');
const list = require('../model/list');

//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

//GET HTTP method to /todoList
router.get('/',(req,res) => {
    list.getAllLists((err, lists)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();
        }
    });
});

//POST HTTP method to /todoList
router.post('/', (req,res,next) => {
    let newList = new list({
        description: req.body.description,
        isChecked: req.body.isChecked,
        dueDate: req.body.dueDate
    });
    list.addList(newList,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

//DELETE HTTP method to /todoList. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
    //access the parameter which is the id of the item to be deleted
    let id = req.params.id;
    //Call the model method deleteListById
    list.deleteListById(id,(err,list) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
        }
        else if(list) {
            res.json({success:true, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;