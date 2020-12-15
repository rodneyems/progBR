//Pop-up página
// alert("Hello World")

// ################  Types of datas  ################
/* 
Booleam = True or False
Null = Vazio
Undefined = Indefinido
Number = Número
String = Cadeia de caractéres

var hw = "Hello World";
hw = "Hello modified";

var concString1 = "abc";

console.log(hw);
console.log(concString1 + "DEF")
*/

// ################  Types of operators  ################
/*
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Módulo (resto da divisão)
++ Incremento
-- Decremento
*/

// ################  Types of comparation  ################
/*
== igual a
=== tipo e valor igual
!= diferente
!== não igual type/valor
> maior que
< menor que
>= maior ou igual
<= menor ou igual
*/

// ################  Types of logics  ################
/*
&& and
|| or
// negativo
*/

// ################  Types of conditional structures  ################
/*
############### IF
if (2 > 3)
    maior
else
    menos

if (2 > 3){
    maior
    faça isso
    faça isso
}

else{
    menos
    faça isso
    faça isso
}

############## SWITCH

var nota = 5;

switch(nota) {
    case 5:
        Nota baixa
        break
    case 6:
        Nota baixa ainda
        break
    case 7:
        nota mediana
        break
    default:
        sua nota esta fora da média
}

*/

// ################  Types of Loops  ################
/*
for(var i = 0; i < 10; i++){
    console.log(i)
}

while(i < 10){
    console.log()
    i++
}
*/

// ################  Array  ################
/*
    var lista = ["x","y","z"]
*/

// ################  Function  ################
/*
function(){

}

*/

/*
var aluno{
    nome:"Rodney",
    notas:[5,9,9,10]
    estado:"SP"
    media: function(n1,n2){
        return (n1 + n2) / 2
    }
}

console.log(alunos.media(notas[0], notas[0]))

var aluno{
    nome:"Rodney",
    notas:[5,9,9,10]
    estado:"SP"
    media: function(n1,n2){
        return (this.notas[0] + this.notas[1]) / 2
    }
}
O this sempre vai se referir ao objeto em questão. Podendo ser colocado numa função a 
parte para ser utilizado por diversos objetos, sem precisar alterar muito código

console.log(alunos.media(notas[0], notas[0]))


*/

/*
var calcMedia = function calcMedia(){
    return (this.nota1 + this.nota2) / 2;
}

function criarAluno(name, n1, n2){
    return{
        nome: name,
        nota1: n1,
        nota2: n2,
        media: calcMedia
        }
    }
var turma = [
    criarAluno("Paulo", 8 , 7),
    criarAluno("Marcos", 5 , 7),
    criarAluno("Victor", 8 , 4),
    criarAluno("João", 9 , 7),
]

for (aluno of turma){
    console.log (aluno.nome + " - " + aluno.media())
}

*/ 