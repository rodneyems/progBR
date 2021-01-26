const express = require('express')
const router = express.Router()
const auth = require('../controllers/authController')

router.get('/', auth, (req,res)=>{
    if(req.user.admin){
        res.send("USUÁRIO ADMIN!!!")
    }else{
        res.send("USUÁRIO NÃO POSSUI PRIVILÉGIOS ADMIN!!!")
    }
})

module.exports = router