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

// const p = new Product({
//     name: 'Green Apple',
//     price: 1.99,
//     category:'fruit'
// })

// p.save()
//     .then(p =>{
//         console.log(p)
//     })
//     .catch(e =>{
//         console.log('error')
//         onsole.log(e)
// })

const seedProducts = [
    {
        name: 'Yellow Apple',
        price: 1.99,
        category:'fruit'
    },
    {
        name: 'Milk',
        price: 4.99,
        category:'dairy'
    },
    {
        name: 'Seedless Watermelon',
        price: 3.99,
        category:'fruit'
    },
    {
        name: 'Celery',
        price: 1.99,
        category:'vegetable'
    },
    {
        name: 'Carrot',
        price: 2.99,
        category:'vegetable'
    }
    
]


Product.insertMany(seedProducts)
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
})