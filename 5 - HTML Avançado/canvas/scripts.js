// METEDO 1 NAO INDICADO
let player = document.getElementById("player")

let xInit = 0
let yInit = 0

function moverPlayer(x, y){
    let posX = x + "px"
    let posY = y + "px"

    player.style.top = posX
    player.style.left = posY

}

setInterval(function(){
    if (xInit != 450){
        moverPlayer(xInit++, yInit++)
    }else{
        xInit = 0
        yInit = 0
    }

}, 10)

// CANVAS 
// LINHA
let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")
ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineTo(500,0)
ctx.stroke()

// RETANGULO
ctx.fillStyle = "blue"
ctx.fillRect(200, 250 ,100, 200)

// PATH
tela2 = document.getElementById("tela2")
ctx2 = tela2.getContext("2d")

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.strokeStyle = "red"
ctx2.moveTo(10,10)
ctx2.lineTo(400,300)
ctx2.stroke()

ctx2.beginPath()
ctx2.lineWidth = 4
ctx2.strokeStyle = "blue"
ctx2.fillStyle = "green"
ctx2.moveTo(50,10)
ctx2.lineTo(300,300)
ctx2.lineTo(200,300)
ctx2.fill()
ctx2.closePath()
ctx2.stroke()

// CIRCULO COM ANIMAÇÃO

let tela3 = document.getElementById("tela3")
let ctx3 = tela3.getContext("2d")
let reverso = 0
circle = {
    x: 0,
    y: 390,
    raio: 50,
    start: 0,
    final: 0
}

function drawCircle(c){
    ctx3.beginPath()
    ctx3.rect(0,0,500,500)
    ctx3.fillStyle = "gray"
    ctx3.fill()
    ctx3.beginPath()
    ctx3.fillStyle = "black"
    ctx3.strokeStyle = "blue"
    ctx3.arc(c.x,c.y,c.raio,c.start,c.final)
    ctx3.fill()
    ctx3.stroke()

}

drawCircle(circle)

setInterval(function(){
    if (circle.final < 2 * Math.PI){
        circle.final += 0.1
        circle.x += 7
    }else{
        circle.x = 0
        circle.final = 0
    }
    drawCircle(circle)
}, 50)

// IMAGENS

let tela4 = document.getElementById("tela4")
let ctx4 = tela4.getContext("2d")
let img = document.getElementById("scorpions")

img.onload = desenharImg

function desenharImg(){
    ctx4.drawImage(this, 20, 30, this.naturalWidth / 2, this.naturalHeight / 2)
}