// ##################################################
// Promise permite vc executar um código e continuar o código caso tenha alguma função que demore algum tempo para você obter o resultado
// ##################################################
// let usuario = ["adriano", "marcia", "jose"]

// function inserirUsr(nome){
//     return new Promise((resolve, reject) => {

//         setTimeout(function(){
//             usuario.push(nome);

//             let error = true

//             if (error){
//                 resolve()
//             }else{
//                 reject({
//                     msg:"TESTE",
//                     nome:"RODNEY"
//                 })
//             }
//         }, 5000)
//         console.log("AQUI DENTRO")
//     })
// }

// function listarUsr(){
//     console.log(usuario)
// }

// console.log("AQUI VEM ANTES")
// inserirUsr("Rodney").then(listarUsr).catch((error)=>{console.log(error.nome) })
// console.log("AQUI VEM DEPOIS")

// Outra forma de executar a promise
// console.log("AQUI VEM ANTES")
// async function executar(nome){
//     await inserirUsr(nome)
//     listarUsr()
// }

// executar("Rodney")
// console.log("AQUI VEM DEPOIS")

// ##################################################
// Mesmo código, mas sem promise
// ##################################################

// let usuario = ["adriano", "marcia", "jose"]

// function inserirUsr(nome){
//         setTimeout(function(){
//             usuario.push(nome);
//         }, 5000)
//         console.log("AQUI DENTRO")
// }

// function listarUsr(){
//     console.log(usuario)
// }

// console.log("AQUI VEM ANTES")
// inserirUsr("Rodney")
// listarUsr()
// console.log("AQUI VEM DEPOIS")
// listarUsr()

// ##################################################
// FILTER
// ##################################################

// function novoAluno(nome, idade){
//     return { nome, idade } 
// }

// let alunos = [
//     novoAluno("mario", 23),
//     novoAluno("joao", 45),
//     novoAluno("tavares", 29),
//     novoAluno("johnny", 35)
// ]
// let alunosComMenos30 = alunos.filter((oi) => {return oi.idade > 30})
// console.log(alunosComMenos30)

// // ##################################################
// // Gera um novo array com os itens filtrados
// // ##################################################

// let alunoIdade = alunos.map((aluno) => {return aluno.nome + " tem " + aluno.idade + " anos"})

// console.log(alunoIdade)

// // ##################################################
// // .slice para array (copiar sem trazer referencia) e Object.assign({},x) para copiar um objet sem trazer ref
// // ##################################################

// let alunoA = [ "rodney", "marcio" ]

// let alunoB = alunoA

// console.log("ALUNOB", alunoB, "ALUNO A ", alunoA)

// alunoB.push("NOVO")

// console.log("ALUNOB",alunoB, "ALUNO A ", alunoA)

// // SLICE (...)

// let alunoA1 = [ "rodney", "marcio" ]

// // let alunoB1 = alunoA1.slice()
// let alunoB1 = [... alunoA1]


// console.log("ALUNOB1", alunoB1, "ALUNO A1 ", alunoA1)

// alunoB1.push("NOVO")

// console.log("ALUNOB1", alunoB1, "ALUNO A1 ", alunoA1)

// // Object.assign

// alunoObj = {
//     nome: "Rodney", idade: 25
// }
// // alunoObj2 = alunoObj
// alunoObj2 = Object.assign({},alunoObj)
// console.log(alunoObj, "-------" , alunoObj2)
// alunoObj2.idade = 99
// console.log(alunoObj, "-------" , alunoObj2)


// function novoAluno(nome, idade){
//     return { nome, idade } 
// }
// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("Joao", 45),
//     novoAluno("Tavares", 29),
//     novoAluno("Johnny", 35)
// ]

// function nomeIdade (alunosArray) {
//     novoArray = []
//     for (aluno of alunosArray){
//         novoArray.push(aluno.nome + " tem " + aluno.idade + " anos")
//     }
//     console.log(novoArray)
// }
// nomeIdade(alunos)

// function simulacaoReduce (alunosArray, inicio) {
//     let resultadoReduce = inicio
//     for (aluno of alunosArray){
//         resultadoReduce += aluno.nome
//     }
//     console.log(resultadoReduce)
// }
// simulacaoReduce(alunos, "teste")

let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

let vlrDol = 0 

fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        vlrDol = data.rates.BRL
    })

function conveter(){
    let dol = document.getElementById("real").value
    let convertido = (dol *= vlrDol)
    document.getElementById("convertido").innerText = "Valor em R$: " + convertido.toFixed(2)

}

let nome = ""

if (nome == ""){
    throw "ACABEI DE INVENTAR UM ERRO"
}

try{
    console.log(nome)
}catch(err){
    console.log("EXISTE O SEGUINTE ERRO: " + err)
}finally{
    console.log("SEMPRE VOU TE MANDAR UM")
}
console.log("boa noite")


// let squares = document.querySelectorAll(".square")

// squares.forEach((square) => {
//     square.addEventListener("click", handClick)
// })
// for ( square of squares ){
//     square.addEventListener("click", handClick)
//     console.log(square)
// }