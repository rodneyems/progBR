function startgame(){
    game.createCardsFromTechs()
    initCards()
}

function initCards(){
    let gameBoard = document.getElementById("gameBoard")
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''
        gameBoard.innerHTML = ''

        game.cards.forEach((card)=>{
            let cardElement = document.createElement("div")
            cardElement.id = card.id
            cardElement.classList.add("card")
            cardElement.dataset.icon = card.icon
            cardElement.addEventListener("click", flipCard)
            gameBoard.appendChild(cardElement)
            createCardContent(card, cardElement)
    })
}

function createCardContent(card, cardElement){
    createCardFace("cardFront", card, cardElement)
    createCardFace("cardBack", card, cardElement)
}

function createCardFace(face, card, element){
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)
    if(face === "cardFront"){
        let iconElement = document.createElement("img")
        iconElement.classList.add("icon")
        iconElement.src = card.icon
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = "&lt/&gt"
    }
    element.appendChild(cardElementFace)
}

function flipCard(){
    
    if (game.setCard(this.id)){
        this.classList.add("flip")
        if(game.secondCard){

            if(game.checkMatch()){
                game.clearCards()
                if (game.checkGameOver())
                    document.getElementById("gameOver").style.visibility = "visible"
               
            }else{
                setTimeout(()=>{
                    let firstCardView = document.getElementById(game.firstCard.id)
                    let secondCardView = document.getElementById(game.secondCard.id)
                    firstCardView.classList.remove("flip")
                    secondCardView.classList.remove("flip")
                    game.unflip()
                    game.clearCards()
                }, 1000)
                
            }
        }
    }
}

function restart(){
    startgame()
    document.getElementById("gameOver").style.visibility = "hidden"
}

startgame()
