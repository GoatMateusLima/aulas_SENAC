//pedir nome completo da pessoa e fazer formatacao pare primeira letra em maiusculo mesmo apos o espaco 

const input = require('../input')

function primeiraletramaiuculo(nome) {
    if (!nome) return nome;
    return nome.split(' ').map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()).join(' ');

}

(async () =>{

    let nome = await input();
    
    console.log(primeiraletramaiuculo(nome));
   

})()