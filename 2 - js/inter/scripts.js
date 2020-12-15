// Adicionar texto via JS
// document.body.innerHTML = document.body.innerHTML + "<h1> Esse é um texto adicionado via JS </h1>" 

// Selecioanndo um id
// let p1 = document.getElementById("p1")
// console.log(p1)

// Selecioanndo uma class
// let paragrafo = document.getElementsByClassName("paragrafo")
// console.log(paragrafo)

// Selecionando pela TAG
// let p = document.getElementsByTagName("p")
// console.log(p)

// Modificando textos com JS
// let p = document.getElementById("p1")
// p.innerHTML = "<h1> Mudei a tag</h1>"
// p.innerText = "<h1> Não mudei a tag </h1>"
// p.textContent = "<h1> Não mudei a tag, mas no console eu consigo ver tudo</h1>"

// Modificar uma classe
// let p = document.getElementById("p1")
// p.className = "paragrafo2"

//SEU NOME AQUI 
// function changeH1(suaInput) {
//     let h1 = document.getElementsByTagName("h1")[0] // Zero primeiro elemento
//     h1.innerText = suaInput.value
// }

// function hideH1(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     h1.style.display = "none"
// }

// function unhideH1(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     h1.style.display = "block"
// }

// function sizeH1(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     let style = window.getComputedStyle(h1).getPropertyValue('font-size');
//     let fontsize = parseInt(style)
//     h1.style.fontSize = (fontsize + 1) + "px"
// }

// function unsizeH1(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     let style = window.getComputedStyle(h1).getPropertyValue('font-size');
//     let fontsize = parseInt(style)
//     h1.style.fontSize = (fontsize - 1) + "px"
// }
// function mouseOver(color){
//     color.style.backgroundColor = "red"    
// }

// function mouseOut(color){
//     color.style.backgroundColor = "rgb(20, 3, 255)"
// }


// // TESTE EVENT LISTENNER
// let changeText = document.getElementById("teste")
// changeText.addEventListener("mouseover", mudarText)
// changeText.addEventListener("mouseout", mudarText2)
// function mudarText(){
//     this.innerText = "SURPRISE"
// }
// function mudarText2(){
//     this.innerText = "WOW SURPRISE"
// }
// // Round arredonda o numero 5.5 = 6 5.4 = 5
// let n = Math.round(Math.random()*10)
// console.log(n)

// JSON
// Stringfy é string, parse objeto
// let a = {
//     nome: "Rodney",
//     nota: 8.5
// }
// let b = JSON.stringify(a)
// let a2 = '{"nome": "Rodney", "nota": 7}'
// let b2 = JSON.parse(a2)
// console.log(a)
// console.log(b)
// console.log(a2)
// console.log(b2)

// TESTE COM LOCAL STORAGE
// getItem = pega uma chave, setItem = configura uma chave, clear limpa todas, remove remove uma cahve
// Voce pode armazerar apenas strings (entao vale para o stringfy e dps vc volta com o parse)
// onload = function() {
//     let nameBanner = localStorage.getItem("nameBanner")
//     let h1 = document.getElementById("nameBanner")
    
//     if ( nameBanner != null ){
//         h1.innerHTML = nameBanner
//     }else {
//         h1.innerHTML = "DIGITE SEU NOME :D"
//     }

// }

// function atualizar(a){
//     let atualizar = a.value;
//     console.log(atualizar)

//     let h1 = document.getElementById("nameBanner")
//     h1.innerHTML = atualizar

//     localStorage.setItem("nameBanner", atualizar)
// }

// SORTEIO
// function mouseOver(color){
//     color.style.backgroundColor = "red"    
// }
// function mouseOut(color){
//     color.style.backgroundColor = "rgb(20, 3, 255)"
// }
// function sorteio(color){
//     color.style.backgroundColor = "red"
//     let numberPossibilities = 9
//     let numberDrawn = Math.round(Math.random() * numberPossibilities + 1)
//     document.getElementById("n").innerText = numberDrawn
// }

// TIMERS
// var number = 0
// var count

// function preparado(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     h1.innerText = "PREPARADO"
// }

// function countAdd(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     h1.innerText += " " + number
//     number ++
// }

// function preparar(){
//     setTimeout(preparado, 2000)
// }

// function iniciar(){
//     let h1 = document.getElementsByTagName("h1")[0]
//     if ( h1.innerText == "PREPARADO" ){
//         count = setInterval(countAdd, 1000)
//     }else{
//         alert("Você precisa estar preparado")
//     }
// }

// function parar(){
//     clearInterval(count)
//     number = 0
// }
