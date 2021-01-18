document.addEventListener("DOMContentLoaded",()=>{updatePosts()})

function updatePosts(){
    fetch("http://192.168.100.10:5000/route/all").then((res)=>{
        return res.json()
    }).then(json=>{
        let posts = JSON.parse(json)
        let postList = ""
        console.log(posts)
        if (posts[0]){
            posts.forEach((post=>{
                let postElement = `    
                <div class="post" id="${post.id}">
                    <div class="titleCard">${post.title}</div>
                    <div class="descCard">${post.content}</div>
                </div>
                `
                postList += postElement
            }))
            document.getElementById("posts").innerHTML = postList
        }else{
            let postElement = `    
            <div class="post" id="semID">
                <div class="titleCard">Sem posts</div>
                <div class="descCard">;)</div>
            </div>
            `
            document.getElementById("posts").innerHTML = postElement
        }
    })
}


function newPost(){
    let title = document.getElementById("title").value
    let desc = document.getElementById('desc').value.replaceAll("\n","<br>");
    let post = {title:title , content:desc}
    if (title == "" || desc == ""){
        return alert("Preencha todos ou campos")
    }
    const options = {
        method:"POST",
        headers: new Headers({"content-type":"application/json"}),
        body:JSON.stringify(post)
    }
    console.log(options.body)
    fetch("http://192.168.100.10:5000/route/new", options).then(()=>{
        updatePosts()
        document.getElementById("title").value = ""
        desc = document.getElementById("desc").value = ""
    })
}
