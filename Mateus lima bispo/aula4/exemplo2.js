const input = require('../input');

(async () => {

    let i = 0;

    do { //uso o do while quando quero que o programa execute apenas uma vez
        console.log('quer continuar');
        continuar = await input();
        console.log("I: " + i);
        i ++;

    } while (continuar == "sim" && i < 10)
        console.log("ACABOU: interator = " +i)
})();



// iterator = iterator + 1
// i = i + 1
// i += 1
// i ++