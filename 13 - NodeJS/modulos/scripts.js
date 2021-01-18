// // ARGUMENTOS
// let argumentos = process.argv.slice(2)
// // console.log(argumentos)
// function soma(x ,y){
//     return x + y
// }

// function multi(x ,y){
//     return x * y
// }

// let a = Number(argumentos[1])
// let b = Number(argumentos[2])
// let c = ""

// if (argumentos[0] == "m"){
//     c = multi(a, b)
// }else if (argumentos[0] == "s"){
//     c = soma(a, b)
// }else{
//     console.log("Opção inválida")
// }

// console.log(c)

// ########################

// MODULOS
// MODO 1
// let calc = require("./calc")

// // MODO 2
// let soma = require("./calc").soma
// let multi = require("./calc").multi

// let argumentos = process.argv.slice(2)
// // console.log(argumentos)

// let a = Number(argumentos[1])
// let b = Number(argumentos[2])
// let c = ""

// if (argumentos[0] == "m"){
//     // c = calc.multi(a, b)
//     c = multi(a, b)
// }else if (argumentos[0] == "s"){
//     // c = calc.soma(a, b)
//     c = soma(a, b)
// }else{
//     console.log("Opção inválida")
// }

// console.log(c)

// File System

let fs = require("fs")

// //readFile = lear arquivo (tem que pasar o encoding) writeFile = criar e escrever, appendFile = concat, unlink = apagar, rename = renomar

// fs.readFile("teste.txt", "UTF8", (error, data)=>{
//     if(error){
//         throw error
//     }
//     console.log(data)
// })

// fs.writeFile("teste.txt", "Hello World", (error)=>{
//     if(error){
//         throw error
//     }
//     console.log("Arquivo Criado com sucesso")
// })

