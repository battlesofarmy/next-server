const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const subCategorySchema = require('../schemas/subcategorySchema');
const SubCategoryModel = mongoose.model("Subcategory", subCategorySchema);

// Create a subCategory
router.post('/', async(req, res)=>{
    try{
        const result = await SubCategoryModel(req.body).save();
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})

// Get all subCategory
router.get('/', async(req, res)=>{
    try{
        const result = await SubCategoryModel.find();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Get subCategory by category id
router.get('/:id', async(req, res)=>{
    try{
        const result = await SubCategoryModel.find({"catId" : req.params.id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Delete products by Subcategories
router.delete('/:id', async(req, res)=>{
    try{
        const result = await SubCategoryModel.deleteOne({"subCatId" : req.params.id});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})


module.exports = router;