let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with champ model

let Champ = require('../models/champ');
let champController = require('../controller/champ')

// read operations
//get route for the champ list

router.get('/', champController.displayChampList);

// add opertaion
// get route for displaying the add-page -- create operation
router.get('/add', champController.displayAddPage);
// post route for processing the add page --  create operation
router.post('/add', champController.processAddPage);

// edit opertaion
// get route for displaying the edit operation -- update operation
router.get('/edit/:id', champController.displayEditPage);
// post route for processing the edit operation --  update operation
router.post('/edit/:id', champController.processEditPage);

// Delete operation 
// get to perform delete operation -- deletion
router.get('/delete/:id', champController.performDelete);


module.exports=router;