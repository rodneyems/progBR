const express = require("express")
const path = require("path")
const nodeMailer = require("nodemailer")
const app = express()

app.use("/", express.static(path.join(__dirname, "views")))

app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.sendFile()
})
const transporter = nodeMailer.createTransport({
    host:"smtp.gmail.com",
    port:"587",
    secure:false,
    auth:{
        user:"EMAIL_ORIGEM",
        pass:"SENHA_EMAIL_ORIGEM"
    }
})

app.post("/contato", (req, res)=>{
    let emailTo = req.body.to
    let subject = req.body.subject
    let content = req.body.content

    

    transporter.sendMail({
        from:"EMAIL_ORIGEM",
        to:`${emailTo}, "EMAIL_DESTINO"`,
        cc:"EMAIL_COPIA",
        subject:subject,
        text:content
    }).then(info=>{
        console.log(info)
        res.send("Msg enviada com sucesso")
    }).catch(err=>{
        console.log(err)
        res.send("Mensagem não enviada")
    })
})

app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})