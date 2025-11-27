/*
Escreva um programa que ´pergunta ao usuario um numero, apos isso sorteia um outro numero aleatorio, se o usuario acertar ele termina o programa, o usuario tem no maximo 10 tentativas no final fala se ele terminou ou se acabou a quantidade de tentativas. */

const input = require('../input');

(async () => {

    // valor de inicio | quantidade | ordem
    for (let i = 10 ; i > 0 && n1 == n2; i-- ) {
        
        console.log("Digite um numero 1 a 10:")
        let n1 = Number(await input());
        
        let n2 = Math.floor(Math.random() * 10)

        if( n1 == n2 ) {
            console.log("Os numeros sao iguais")
        }
        
        else {
            console.log("Os numeros sao diferentes")
        } 

    }
})();