require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = process.env.URI;

// Middleweres
app.use(express.json());

// Router Handlers 
const productHandler = require('./routeHandler/productHandler')
const subcategoryHandler = require('./routeHandler/subcategoryHandler')
const categoryHandler = require('./routeHandler/categoryHandler');
const cartHandler = require('./routeHandler/CartHandler');

// Category Handler
app.use('/category', categoryHandler);

// Sub Category Handler
app.use('/subcategory', subcategoryHandler);

// Product Handler
app.use('/products', productHandler);

// Cart Handler
app.use('/cart', cartHandler);


mongoose.connect(uri)
.then(()=> console.log("Successfully Connected"))
.catch((err)=> console.log("Mongoose Error: ", err));


app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(5000, ()=>{
    console.log("Server Running in port 5000");
})