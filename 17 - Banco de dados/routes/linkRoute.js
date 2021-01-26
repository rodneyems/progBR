const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')
const path = require('path')

router.get('/all', linkController.allLinks)

router.get('/', (req,res)=>{res.render('index', {error:null, body:{}})})

router.get('/:title', linkController.redirect)

router.delete('/:id', linkController.deleteLink)

router.delete('/', express.json(), linkController.deleteLink)

router.post('/', express.urlencoded({ extended:true }), linkController.addLink)

module.exports = router