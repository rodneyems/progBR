let squares = document.querySelectorAll(".square")
let placarPlayer1 = document.getElementById("placar1")
let placarPlayer2 = document.getElementById("placar2")

document.addEventListener("DOMContentLoaded",()=>{
    squares.forEach((square) => {
        square.addEventListener("click", handClick)
    })
})

function handClick(elemento){
    let position =  elemento.target.id
    handleMove(position)
    updateSquare(position)
}

function updateSquare(elemento){
        let square = document.getElementById(elemento)
        let symbol = board[elemento]
        if (square != "" && square != null && gameOver == false ){
            square.innerHTML =  `<div class='${symbol}'></div>`
        }
        if (isWin() == true){
            document.getElementById("reset").style.transform = "rotateX(360deg)"
            document.getElementById("reset").style.backgroundColor = "black"
            document.getElementById("reset").style.color = "white"
            squaresVencedores.forEach((pos)=>{
                squares[pos].classList.add("squareWins")
            })
            atualizaPlacar()
            gameOver = true
        }
}

function atualizaPlacar(){
    placarPlayer1.innerText = placarP1
    placarPlayer2.innerText = placarP2
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        let symbol = board[square.id]
        if( symbol != "" ){
            square.innerHTML =  ""
        }
    })
    document.getElementById("vencedor").innerText = ""
    squaresVencedores.forEach((pos)=>{
        squares[pos].classList.remove("squareWins")
    })
    document.getElementById("reset").style.backgroundColor = "white"
    document.getElementById("reset").style.color = "black"
    document.getElementById("reset").style.transform = "rotateY(0deg)"


    reset()
}