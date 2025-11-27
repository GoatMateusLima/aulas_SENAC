const input = require('../input');

(async() =>{
    let continuar = "sim"
    
    //Em javascript ele armazena uma varivavel vazia como undefine(não definido)

    while(continuar == "sim"){
        console.log('quer continuar');
         continuar = await input();


    } 
})();