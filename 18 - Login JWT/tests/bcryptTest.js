const bcrypt = require('bcryptjs')

const password = "Meu Pass "

// Criando

// const salt = bcrypt.genSaltSync(14)
// const cryptedPass = bcrypt.hashSync(password, salt)
// console.log(cryptedPass)


// Comparando

const dbSavedPass = "$2a$14$oqPJlY7R1Ix1p0ivjgg4AON7ilK76x5vZqwFeY4sjq6aCLSjI7I.e"
console.log(bcrypt.compareSync(password,dbSavedPass))
