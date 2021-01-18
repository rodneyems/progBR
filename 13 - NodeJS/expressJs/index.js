const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
var aluno = require("./routes/alunos.js") 
const app = express()
const PORT = 5000

console.log(aluno)

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/site",express.static(path.join(__dirname,"client")))

app.use("/", aluno)

app.get("/",(req,res)=>{
    res.send("Hello World :D GEEEEEEEET")
})

app.post("/",(req,res)=>{
    res.send("Hello World :D POSTTTTTTT")
})
app.put("/",(req,res)=>{
    res.send("Hello World :D PUTTTTTTTT")
})
app.delete("/",(req,res)=>{
    res.send("Hello World :D DELETEEEEE")
})


app.listen(PORT, ()=>{
    console.log("Server Running")
})




















// app.get("/",(req,res,next)=>{
//     res.send("Hello World :D GEEEEEEEET")
//     next()
// },(req,res)=>{
//     console.log("Hello World :D ASSDASDASDSAD")
// })
//Na requisição anterior eu fiz duas midwares, porém é preciso do paremetro next()
//Poderiam estar em variaveis e só serem executadas


// let alunos = [
//     {id:0, nome:"maria"},
//     {id:1, nome:"paulo"},
//     {id:2, nome:"marta"}
// ]

// app.get("/alunos",(req,res)=>{
//     res.json(JSON.stringify(alunos))
// })

// app.get("/aluno",(req,res,next)=>{
//     console.log(req.body)
//     let aluno = alunos[req.body.id]
//     if (aluno){
//         res.json(aluno)
//     }else{
//         next()
//     }
// })

// app.get("/aluno/:id",(req,res,next)=>{
//     console.log(req.params.id)
//     let aluno = alunos[req.params.id]
//     if (aluno){
//         res.json(aluno)
//     }else{
//         next()
//     }
// })
// //retorna com /

// app.get("/aluno/all",(req,res)=>{
//     res.json(JSON.stringify(alunos))
// })

// app.get("/aluno",(req,res)=>{
//     console.log(req.query.id)
//     let aluno = alunos[req.query.id]
//     res.json(aluno)
// })
// //retorna com ?id=