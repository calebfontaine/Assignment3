let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with champ model
let Champ = require('../models/champ');

module.exports.displayChampList = (req,res,next)=>{
    Champ.find((err, champlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('champ/list',{
                title:'Champ',
                Champlist: champlist
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('champ/add',{title:'Add champ'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newchamp = Champ ({
        "Name":req.body.Name,
        "Region":req.body.Region,
        "Role":req.body.Role,
        "Title":req.body.Title,
        "Price":req.body.Price
    });
    Champ.create(newchamp,(err,champ) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Champ-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Champ.findById(id,(err, champToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('Champ/edit',{title:'Edit champ', Champ:champToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updatechamp = Champ({
        "_id":id,
        "Name":req.body.Name,
        "Region":req.body.Region,
        "Role":req.body.Role,
        "Title":req.body.Title,
        "Price":req.body.Price
    });
    Champ.updateOne({_id:id},updatechamp,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Champ-list');
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id = req.params.id;
    Champ.deleteOne({_id:id},(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Champ-list');
        }
    });
}