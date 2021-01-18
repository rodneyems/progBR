const express = require("express")
const router = express.Router()
const cors = require("cors")
const bodyParser = require("body-parser")
const posts = require("../model/posts")
const options = {
    origin: "http://localhost:5000"
}
router.use(cors())

router.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", bodyParser.json(), (req, res)=>{
    let title = req.body.title
    let content = req.body.content
    posts.newPost(title,content)
    res.send("Post ADD")
})

module.exports = router