const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', (req,res)=>{
    res.json({message:'Welcome to my api.'})
})

app.use('/products', (req,res)=>{
    res.json({message:'List of products'})
})

module.exports = app 
