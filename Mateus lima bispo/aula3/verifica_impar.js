const input = require('../input');


( async () => {

    console.log("Verifique se seu numero é impar\n\n");

    console.log("Digite aqui: ")
    let num = Number( await input ());
    

    if(num % 2 == 0){
        console.log("Seu numero é par")

    } else if( num == 0) { 
        console.log("Seu numero é par")
        }
      else {
        console.log("é impar")
      }


})()