const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const categorySchema = require('../schemas/categorySchema');
const CategoryModel = mongoose.model("Category", categorySchema);

// Create a category
router.post('/', async(req, res)=>{
    try{
        const result = await CategoryModel(req.body).save();
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})

// Get all category
router.get('/', async(req, res)=>{
    try{
        const result = await CategoryModel.find();
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})

// Delete a category
router.delete('/:id', async(req, res)=>{
    try{
        const result = await CategoryModel.deleteOne({"catId" : req.params.id});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message)
    }
})


module.exports = router;