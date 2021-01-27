const express = require('express')
const router = express.Router()

let list = ["primeiro", "primeiro2", "primeiro3"]
setTimeout(()=>{
    list.push("Joao")
    console.log(list)

}, 5000)

router.get('/list', (req,res)=>{
    res.send(list)
})

router.get('/', (req,res)=>{
    res.render('index')
})

module.exports = router
