let progress = document.getElementById("testeProgress")
let value = 0

setInterval(() => {
    if( value < 101 ){
        progress.innerHTML = value + "%"
        progress.style.width = value + "%"
        value++
    }
}, 200);