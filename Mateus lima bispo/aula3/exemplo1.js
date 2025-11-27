const input = require('../input');

(async () => {

    console.log("Digite seu nome: ");
    let nome = await input();

    console.log("Digite sua idade:  ");
    let idade = await input();

    if (idade <= 0) {
        console.log("Idade invalida");
    }

    else {
        
        if (idade >= 18) {
            console.log(`Seja bem vindo ${nome}`);
        } else {

            console.log("menor de idade");

        }

    }






    console.log("SEJA BEM VINDO, VEJA SE VOCÊ PASSOU DE ANO EM MATEMATICA: \n\n")

    console.log("Digite a nota do seu primeiro bimestre: ")
    let n1 = Number(await input());

    console.log("Digite a nota do seu segundo bimestre: ")
    let n2 = Number(await input());

    console.log("Digite a nota do seu terceiro bimestre: ")
    let n3 = Number(await input());

    console.log("Digite a nota do seu quarto bimestre: ")
    let n4 = Number(await input());

    let media = (n1 + n2 + n3 + n4) / 4


    console.log(`Sua média é: ${media}\n\n`);


})()