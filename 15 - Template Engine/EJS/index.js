const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")

let usersMap = [
    {
        id:0,
        name:"Rodney Eneas Martins Silva", 
        phone:"(11)9 6219-2652"
    },
    {
        id:1,
        name:"Martinha Cassiano", 
        phone:"(11)9 5445-6777"
    },
    {
        id:2,
        name:"Ana Carolina", 
        phone:"(11)9 4458-9855"
    },
] 

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("index", {users:usersMap})
})
app.get("/about",(req,res)=>{
    res.render("about", {users:usersMap})
})

app.listen(5000,()=>{
    console.log("Servidor rodando porta 5000")
})