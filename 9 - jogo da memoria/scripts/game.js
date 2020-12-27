let game = {
    techs: ["angular","css","html","javascript","nodejs","python"],
    cards: [],
    shuffleCards: function (cards){
        let currentIndex = this.cards.length
        let randomIndex = 0
        while ( currentIndex != 0 ){
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex --
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    },
    createCardsFromTechs: function (){
        this.cards = []
        for (tech of this.techs){
            this.cards.push(this.createPairFromTech(tech))
        }
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards(this.cards)
    },
    createPairFromTech: function (tech){
        return [{
            id: this.createIdWithTech(tech),
            icon:"icons/"+tech+".png",
            flipped:false
        },{
            id: this.createIdWithTech(tech),
            icon:"icons/"+tech+".png",
            flipped:false,
        }]
    },
    createIdWithTech: function (tech){
        return tech + parseInt(Math.random() * 1000)
    },
    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id){
        let card = this.cards.filter(card=>card.id===id)    

        if (card[0].flipped || this.lockMode){
            return false
        }

        if(!this.firstCard){
            this.firstCard = card[0]
            this.firstCard.flipped = true
            console.log(this.firstCard)
            return true
        }else{
            this.secondCard = card[0]
            this.secondCard.flipped = true
            this.lockMode = true
            return true
        }
    },
    checkMatch: function(){
        return this.firstCard.icon == this.secondCard.icon
    },
    clearCards: function(){
        this.firstCard = null
        this.secondCard = null
        this.lockMode = false
    },
    unflip: function(){
        this.firstCard.flipped = false
        this.secondCard.flipped = false
    },
    checkGameOver: function(){
        return this.cards.filter(card => !card.flipped).length == 0
    }
}