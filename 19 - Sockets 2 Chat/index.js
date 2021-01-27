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
app.use("/grupo1", routes)
app.use("/grupo2", routes)

const server = app.listen(process.env.PORT,()=>{
    console.log("Server running on port 5000")
})

const io = socket(server)

const messages = {grupo1:[], grupo2:[]}

const grupo1 = io.of('/grupo1').on('connection',(socket)=>{
    socket.emit('update_messages', messages.grupo1)
    console.log("New Connection")
    socket.on('new_message',(data)=>{
        messages.grupo1.push(data)
        grupo1.emit('update_messages', messages.grupo1)
    })
})

const grupo2 = io.of('/grupo2').on('connection',(socket)=>{
    socket.emit('update_messages', messages.grupo2)
    console.log( "New Connection")
    socket.on('new_message',(data)=>{
        messages.grupo2.push(data)
        grupo2.emit('update_messages', messages.grupo2)
    })
})

// io.on('connection', (socket)=>{
//     socket.emit('update_messages', messages)
//     console.log( "New Connection")
//     socket.on('new_message',(data)=>{
//         messages.push(data)
//         io.emit('update_messages', messages)
//     })
// })

