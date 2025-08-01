const express = require('express')
const app = express()
const path = require('path')
let ejs = require('ejs');
const mongoose = require('mongoose');

const Product = require('./Models/products')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
    console.log('Mongo CONNECTION OPEN!')
})
.catch((e)=>{
    console.log('Oh no Mongo Error')
    console.log(e)
})

app.set('vies', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products',async(req, res)=>{
    const products = await Product.find({})
    res.render('products/index', {products} )
} )

app.get('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    console.log(product)
    res.render('products/show',{product} )
    
})

app.listen(3000, ()=>{
    console.log('Connection Has Been Made On Port 3000!')
})

