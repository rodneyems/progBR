const express = require("express")
const fs = require("fs")
const app = express()

let user = {
    id:0,
    name:"Rodney Martins",
    phone:"(11) 9 6219-2652"
}


function render(data, obj){
    for (let key in obj){
       data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data
}

app.get("/", (req, res)=>{
    fs.readFile("./index.rodneyM", "UTF8", (err, data)=>{
        if(!err){
            res.send(render(data, user))
        }
    })
})

app.listen(5000,()=>{
    console.log("SERVER RODANDO PORTA 5000")
})