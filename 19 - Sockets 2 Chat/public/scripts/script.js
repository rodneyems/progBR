const room = window.location.pathname.replace(/\//g, '')
const socket = io(`http://192.168.1.254:5000/${room}`)
let user = null

socket.on('update_messages',(messages)=>{
    console.log(messages)
    updateMessages(messages)
})
function updateMessages(messages){
    const divMessages = document.getElementById("messages")
    let list_messages = '<ul>'
    messages.forEach(message =>{
        list_messages += `<li>${message.user}: ${message.msg}</li>`
    })
    list_messages += '</ul>'

    divMessages.innerHTML = list_messages
}

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector("#msgForm")
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        if (!user){
            return alert("Digite o nome de usuário")
        }
        const message = document.forms['msgForm']['messageType'].value
        document.forms['msgForm']['messageType'].value = ''
        socket.emit('new_message', { user: user , msg: message} )
        console.log(message)
    })

    const userForm = document.querySelector("#userForm")
    userForm.addEventListener('submit', (event)=>{
        event.preventDefault()
        user = document.forms['userForm']['userName'].value
        userForm.parentNode.removeChild(userForm)
    })
})