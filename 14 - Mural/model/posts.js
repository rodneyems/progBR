module.exports = {
    posts:[
    ],
    getAll(){
        return this.posts
    },
    newPost(title,content){
        let id = genarateID()
        this.posts.push({id, title, content})
    }
}


function genarateID(){
    return Math.random().toString(36).substr(2,9)
}