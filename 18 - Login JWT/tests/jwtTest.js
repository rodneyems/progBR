const jwt = require('jsonwebtoken')

const user = {
    id:"20",
    name:"joao",
    username:"joao@hotmail.com",
    password:"123456"
}

const secret = "123456787ytrdfghjkjhgfer56yu"


// const token = jwt.sign({id:user.id, username:user.username},secret, {expiresIn: 50})

// console.log(token)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGhvdG1haWwuY29tIiwiaWF0IjoxNjA4NzYxMjE5LCJleHAiOjE2MDg3NjEyNjl9.MTvRbIW7fThoaTumMUIY3msvWblAYdVvu7PeKJdSeUM"

const validData = jwt.verify(token,secret)

console.log(validData)