//faca uma agenda telefonica, pede nome e telefone de cada pessoa e enquanto o usuario falar que quer cadastrar um novo numero ele vai cadstrando na lista, no final exibe a lista completa.

const input = require("../input");



(async () => {

    let agenda = []

    do {

        console.log("me fale um nome e um telefone\n")

        console.log("NOME: ")
        let nome = await input()

        console.log("telefone: ")
        let telefone = await input()


        agenda.push({ nome: nome, telefone: telefone });
        console.log(agenda)

        console.log("DESEJA CADAASSTRAR UM NOVO NUMERO?")
        continuar = await input()

    } while (continuar == "sim" && agenda.length<=4);


})();