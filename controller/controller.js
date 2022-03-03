const express = require('express')
const router = express.Router()

const Q = require('../../model/quotes');


router.get('/', (req, res) => {
    const allQuotes = Q.all;
    res.send(allQuotes)
});

router.get('/:id', (req, res) => {
    try{
        const quoteId = parseInt(req.params.id);
        const quote = Q.findById(quoteId - 1);
        res.send(quote);
    } catch (err){ 
        console.error(err.message)
        res.status(404).send(err.message)
    }
});

router.put('/add',(req, res)=> {
    console.log('put request ran')
    res.send("put request")
})

router.delete('/delete',(req, res)=> {
    res.send('delete request made')
})

router.post('/post',(req, res) => {
    res.send("post request made")
})

module.exports = router;