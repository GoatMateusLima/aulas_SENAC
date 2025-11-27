//importacao é quand estou trazendo para meu arquivo funcoes externas

const input = require('../input');

//Uma função anonima
//async fal que essa funcao é async e espera algo
(async () =>{

    console.log("Digite seu nome para entrar no banco:   ")

    let nome = await input()

    console.log("seja bem vindo ao Banco batatinha")
    console.log("Voce é o Usuario " +nome)

})()