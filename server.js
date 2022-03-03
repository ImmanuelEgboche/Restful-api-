const express = require('express')
const app = express()
const cors = require('cors')
const port = 4232
app.use(express.json())
app.use(cors())



const model = require('../model/quotes')
const quoteRoutes = require("./controller/controller")
app.use('/quotes', quoteRoutes)

app.get('/random', (req, res) => {
    console.log('app get')
    let num = Math.random() * 15
    rannum = Math.floor(num)
    const ans = model.findById(rannum)
    res.send(ans)
})

app.get('/rats', (req, res) =>{
    res.send('rats')
})

app.get('/rats/mice', (req, res) =>{
    res.send('mice')
})
app.listen(port, () => {
    console.log(`Server starting on Port ${port}`)
})

module.exports = app;