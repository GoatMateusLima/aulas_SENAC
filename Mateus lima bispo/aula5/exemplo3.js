// chamamos de estrutura, objeto anonimo dicionario
let dado = {
    //chave: valo

    nome: "mateus lima",
    idade:23,
    endereco: "joao alencar de kdasj"
}

console.log(dado)


// para colocar dados dentro do user

let user = []
user.push(dado)
console.log(user)

/*dado.nome = "hugo"
dado.endereco = "joao nomes da silva"
user.push(dado)*/

user.push({
    nome: "Felipe",
    idade: 389,
    endereco: "rua caminhão"
})


user.push({
    nome:"ola",
    idade:22,
    endereco: "ajsdjasj"
})
console.log(user)