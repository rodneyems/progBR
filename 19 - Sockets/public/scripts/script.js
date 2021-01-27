const socket = io('http://localhost:5000')

socket.on('hello',(data)=>{
    console.log(data.msg)
    socket.emit("hello_client", { msg: "Tudo bem, estou conectado" })
})

fetch('/list').then(response => {
    return response.json();
}).then(data =>{
    let list = "<ul>"
    data.forEach(element =>{
        list += `<li>${element}</li>`
    })
    "</ul>"
    document.getElementById("list").innerHTML = list
})