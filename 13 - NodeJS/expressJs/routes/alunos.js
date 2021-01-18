var express = require("express")
var router = express.Router()

let alunos = [
    {id:0, nome:"maria"},
    {id:1, nome:"paulo"},
    {id:2, nome:"marta"}
]

router.get("/alunos",(req,res)=>{
    res.json(JSON.stringify(alunos))
})

router.get("/aluno",(req,res,next)=>{
    console.log(req.body)
    let aluno = alunos[req.body.id]
    if (aluno){
        res.json(aluno)
    }else{
        next()
    }
})

router.get("/aluno/:id",(req,res,next)=>{
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    if (aluno){
        res.json(aluno)
    }else{
        next()
    }
})
//retorna com /

router.get("/aluno/all",(req,res)=>{
    res.json(JSON.stringify(alunos))
})

router.get("/aluno",(req,res)=>{
    console.log(req.query.id)
    let aluno = alunos[req.query.id]
    res.json(aluno)
})
//retorna com ?id=

module.exports = router