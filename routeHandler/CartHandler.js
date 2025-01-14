const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cartSchema = require('../schemas/cartSchema');
const CartModel = mongoose.model("Cart", cartSchema);

// Creat a cart
// router.post('/', async(req, res)=>{
//     try{
//         const result = await CartModel(req.body).save();
//         res.status(200).send(result);

//     }catch(err){
//         res.status(500).send(err.message);
//     }
// });

// Get cart items by email
router.get('/:email', async(req, res)=>{
    try{
        const result = await CartModel.find({email : req.params.email});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Get single cart item by id --- not workgin amr dom ta bair koira lailo :)
router.post('/', async(req, res)=>{
    console.log(_id , email);
    try{
        // const result = await CartModel.find({ "subCatId": req.params.id });
        const { _id, email }  = req.body;
        const result = await CartModel.find({ email : email,  _id : _id});

        if (result.length === 0) {
            // Insert product in db
            const insertCart = await CartModel(req.body).save();
            res.status(200).send(insertCart);

          } else {
            // Increase the product Count
            const updateItem = await CartModel.findOneAndUpdate(
                { email : email, _id : _id }, 
                { $inc: {count : 1} }, 
                { new : true }
            );
            res.status(200).send(updateItem);
          }


    }catch(err){
        res.status(500).send(err.message);
    }
})




module.exports = router;