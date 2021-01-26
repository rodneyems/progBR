const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginValidate, registerValidate } = require('./validate')



const userController = {
    register:async function (req,res){

        const {error} = registerValidate(req.body)
        console.log(error)
        if (error){return res.status(400).send(error)}

        const checkUser = await User.findOne({email: req.body.email})
        if (checkUser) return res.status(400).send('O email ja existe')
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password) 
        })

        try{
            const savedUser = await user.save()
            res.send(savedUser)
        }catch(error){
            res.status(400).send(error)
        }
    },
    login:async function (req,res){

        const { error } = loginValidate(req.body)
        if (error){return res.status(400).send(error)}

        const checkUser = await User.findOne({email: req.body.email})
        if (!checkUser) return res.status(400).send('O email ou password incorreto')
        
        const passwordAndUser = bcrypt.compareSync(req.body.password, checkUser.password)
        if (!passwordAndUser) return res.status(400).send('O email ou password incorreto')
        
        const token = jwt.sign({_id:checkUser._id, admin: checkUser.admin}, process.env.TOKEN_SECRET)
        res.header('authorization-token', token)
        res.send("Usuário logado")
    }
}



module.exports = userController