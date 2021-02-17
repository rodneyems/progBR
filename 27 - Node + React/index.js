const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const videos = [
    'IC8qPpnD0uE',
    'ZSM3w1v-A_Y',
    'RB-RcX5DS5A'
]

app.use(express.static(path.join(__dirname,'front/build')))

app.get('/api/videos',(req,res)=>{
    res.send(videos)
})
if (process.env.NODE_ENV != 'development'){
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'front/build/index.html',(error)=>{
            res.status(500).send(error)
        }))
    })
}

app.listen(5000,()=>{
    console.log('Running on port 3000')
})