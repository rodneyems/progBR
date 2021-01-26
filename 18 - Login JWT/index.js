const express = require("express")
const app = express()
const mongoose = require('mongoose')
const path = require("path")
const routes = require("./routes/linkRoute")
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")

app.use(express.static(path.join(__dirname, "views")))  

app.use("/user", express.json(),userRoutes)
app.use("/admin", express.json(),adminRoutes)


app.get("/", routes)

require('dotenv').config()

mongoose.connect(process.env.URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

let db = mongoose.connection

db.on("error",()=>{console.log("Erro detectado")})

app.listen(process.env.PORT,()=>{
    console.log("Server running on port 5000")
})