// EX 1
let imgLike = document.getElementById("like")

imgLike.addEventListener("click", function(){
    imgLike.src = "unlike.png"
})

// EX 2

let imgLike2 = document.getElementById("like2")

imgLike2.addEventListener("click", function(){
    let lastImage = imgLike2.getAttribute("src")
    imgLike2.setAttribute("src", "unlike.png")
    console.log(lastImage)
})

// EX 3

let lista = document.getElementById("lista")
let num = parseInt(lista.getAttribute("num"))
let conteudo = ""

for (let i = 1; i <= num; i++){
    conteudo += "<li> ITEM NÚMERO:    " + i + "</li>"
}

lista.innerHTML = conteudo;

// EX 4 (DATA)

let lista2 = document.getElementById("lista2")
let num2 = parseInt(lista2.dataset.num2)
let conteudo2 = ""

for (let i = 1; i <= num2; i++){
    conteudo2 += "<li> ITEM NÚMERO:    " + i + "</li>"
}
lista2.innerHTML = conteudo2

// VIDEO






