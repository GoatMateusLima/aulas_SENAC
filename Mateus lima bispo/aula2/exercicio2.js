// le 3 numeros soma os 2 primeiros e multipla o total com o terceiro

const input = require('../input');

(async() =>{

    console.log("SEJA BEM<_VINDO AO NOSSO PROGRAMA\n");
    console.log("--------------------------------\n");
    console.log("Primeiramente digite seu nome: ");
    let nome = await input();
    console.log("--------------------------------\n");

    console.log("Digite o primeiro numero: ");
    let n1 = Number(await input());

    console.log("Digite o segundo numero: ");
    let n2 = Number(await input());

    console.log("Digite o terceiro numero: ");
    let n3 = Number(await input());
    console.log("--------------------------------\n");


    let calculo =  n1 + n2 ;
    let result = calculo * n3 ;

    console.log(`Realizamos todo processo de identificação e agora iremos realizar a conta, só um momento.\n`)

    console.log(`Seja bem vindo ${nome}\n`);

    console.log(`Realizamos a operacao e o resultado é: ${result}\n\n`);

})();