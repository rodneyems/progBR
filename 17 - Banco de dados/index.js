const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const linkRoute = require("./routes/linkRoute")

mongoose.connect("mongodb://localhost/newlinks", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

let db = mongoose.connection

db.on("error",()=>{console.log("Erro detectado")})


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', linkRoute)


app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})