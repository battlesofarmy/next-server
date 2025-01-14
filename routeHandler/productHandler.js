const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const productSchema = require('../schemas/productSchema');
const ProductModel = mongoose.model("Product", productSchema);

// Create =================================================

// Add a new product
router.post('/add', async(req, res)=>{
    try{
         const result = await ProductModel(req.body).save();
         res.status(200).send(result);
 
    }catch(err){
         res.status(500).send(err.message);
    }
 })
  

// Get =================================================

// Get all products
router.get('/', async(req, res)=> {
    try{
        const result = await ProductModel.find({});
        res.send(result);
        // res.status(200).send(result);

    }catch(err){
        res.send("Server Error: ", err);
    }
});

// Get products by id
router.get('/:id', async(req, res)=>{
    try{
        const result = await ProductModel.find({"_id" : req.params.id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Get products by Categories
router.get('/categories/:id', async(req, res)=>{
    try{
      const result = await ProductModel.find({"catId" : req.params.id});
      res.status(200).send(result);

    }catch(err){
      res.status(500).send(err);
    }
})

// Get products by subcatagories
router.get('/subcategory/:id', async(req, res)=>{
    try{
        const result = await ProductModel.find({"subCatId" : req.params.id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


// Delete =================================================

// Delete products by categories
router.delete('/categories/:id', async(req, res)=>{
    try{
        const result = await ProductModel.deleteMany({"catId" : req.params.id});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})

// Delete products by Subcategories
router.delete('/subcategories/:id', async(req, res)=>{
    try{
        const result = await ProductModel.deleteMany({"subCatId" : req.params.id});
        res.status(200).send(result);

    }catch(err){
        res.status(500).send(err.message);
    }
})

// Delete a product by id
router.delete('/:id', async(req, res)=>{
    try{
        const result = await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
        
    }catch(err){
        res.status(500).send(err.message);
    }
})




module.exports = router;