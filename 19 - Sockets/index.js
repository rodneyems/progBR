const express = require("express")
const app = express()
const path = require("path")
const routes = require("./routes/routes")
const socket = require("socket.io")
require('dotenv').config()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))

app.use("/", routes)

const server = app.listen(process.env.PORT,()=>{
    console.log("Server running on port 5000")
})

const io = socket(server)

let id = 0

io.on('connection', (socket)=>{
    console.log( "New Connection")
    socket.emit('hello', { msg: `Seja Bem vindo ID ${id}` })
    id ++
    io.emit('hello', { msg: `ESSA É UMA MSG BROADCAST QUE INCLUI QUEM ESTA FAZENDO A REQUISICAO` })
    socket.broadcast.emit('hello', { msg: `ESSA É UMA MSG BROADCAST QUE NAAAAOOOO INCLUI QUEM ESTA FAZENDO A REQUISICAO` })
    socket.on('hello_client',(data)=>{
        console.log(data.msg)
        socket.emit("hello_client", { msg: "Tudo bem, estou conectado" })
    })

})