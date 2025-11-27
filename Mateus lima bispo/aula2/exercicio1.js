const input = require('../input');

( async() =>{

    console.log("---------------Digite seu nome:------------------- ");
    let name = await input();

    console.log("--------------Digite sua idade:------------------- ");
    let idade = await input();

    console.log("--------------Digite seu CPF:------------------- ");
    let cpf = await input();

    console.log("--------------Digite Nome da sua Mãe:------------- ");
    let mae = await input();

    console.log("--------------Digite seu celular:------------------- ");
    let celular = await input();

    console.log("----------------------DADOS:---------------------- \n")
    console.log(`NOME: ${name}  || IDADE: ${idade} anos \n`);
    console.log(`CPF: ${cpf}  || NOME DA MÃE: ${mae} || CELULAR: ${celular} \n\n\n`);


})()