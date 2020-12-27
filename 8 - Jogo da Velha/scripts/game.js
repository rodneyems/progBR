let board = ["","","","","","","","",""]
let playerTime = 1
let symbols = ["x","o"]
let gameOver = false
let placarP1 = 0
let placarP2 = 0
let squaresVencedores = []


function handleMove(position){

    if (board[position] == ""){
        board[position] = symbols[playerTime]
            if (playerTime == 0){
                playerTime = 1
            }else{
                playerTime = 0
            }
    }
}
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function isWin(){
    for ( possibilidade of winStates){
        let pos1 = possibilidade[0]
        let pos2 = possibilidade[1]
        let pos3 = possibilidade[2]

        if( board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != "" && gameOver == false){
                squaresVencedores = possibilidade
                if (playerTime == 0){
                    placarP1 ++
                }else{
                    placarP2 ++
                }
                return true
        }
    }
    return false
}

function reset(){
    playerTime = 1
    board = ["","","","","","","","",""]
    gameOver = false
}