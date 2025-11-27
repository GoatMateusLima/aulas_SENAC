const input = require('../input');

(async () => {
    console.log("Seja bem vindo a nossa maquina de refri:\n\n")

    //----------------------------------------------------

    console.log("[42] Refrigerante \n[41] Doce \n")
    let id = await input();

    if (id == 42) {
        console.log("conheca nossos refri:\n\n")

        let id_refri = Number(await input());
        console.log("Qual refri voce quer(digite o numero)?\n\n [1]COCA \n [2]Fanta \n [3]CACO")

        if (id_refri = 1 || 2 || 3) {
            console.log("Digite o valor do produto:")

            let valor = Number(await input());

            if (id == 42 && valor >= 5) {
                console.log("tome sua coca")
            } else (
                console.log("Valor nao processado")
            )

        } else (
            console.log("Error")
        );
    } 
    
    else if (id == 41) {

        console.log("conheca nossos doces")

        let id_doce = Number(await input());
        console.log("Qual refri voce quer(digite o numero)?\n\n [1]COCA \n [2]Fanta \n [3]CACO")

        if (id_doce = 1 || 2 || 3) {
            console.log("Digite o valor do produto:")

            let valor_doce = Number(await input());

            if (id_doce == 42 && valor_doce >= 5) {
                console.log("tome sua coca")
            } else (
                console.log("Valor nao processado")
            )

        } else (console.log("Error"));
    }

})()




