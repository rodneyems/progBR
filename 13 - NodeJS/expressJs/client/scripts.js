const url = "http://localhost:5000/"
function get(){
    fetch(url, {
        method:"get"
    }).then(res => {
        return res.text()
    }).then(html=>{
        console.log(html)
    })

    
}
function post(){
    fetch(url, {
        method:"post"
    }).then(res => {
        return res.text()
    }).then(html=>{
        console.log(html)
    })
}
function put(){
    fetch(url, {
        method:"put"
    }).then(res => {
        return res.text()
    }).then(html=>{
        console.log(html)
    })
}
function del(){
    fetch(url, {
        method:"delete"
    }).then(res => {
        return res.text()
    }).then(html=>{
        console.log(html)
    })
}
