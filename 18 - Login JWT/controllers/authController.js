const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    const token = req.header('authorization-token')
    if(!token) return res.status(401).send("Acesso não autorizado")
    try {
        const tokenVerify = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = tokenVerify
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send("Acesso não autorizado")
    }
}