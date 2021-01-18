const express = require("express")
const path = require("path")
const app = express()
const PORT = 5000
const routes = require("./routes/routes")



app.use("/route", routes)

app.use(express.static(path.join(__dirname, "public")))


app.listen(PORT, ()=>{
    console.log("Server running on port: ", PORT)
})