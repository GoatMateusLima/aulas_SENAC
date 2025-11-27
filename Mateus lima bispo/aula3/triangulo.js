const input = require('../input.js');

( async () => {
    console.log("Digite o lado 1 ");
    let l1 = Number(await input())

    console.log("Digite o lado 2 ");
    let l2 = Number(await input())

    console.log("Digite o lado 3 ");
    let l3 = Number(await input())

    if(l1 <= 0 || l2 <= 0 || l3 <= 0){
        console.log("numeros negativos")
    }
    else if( l1 == l2 || l2 == l3 || l3 == l1){

        console.log("é um triangulo isosceles")
    } 
    else if( l1 != l2 && l2 != l3 && l3 != l1)

        console.log("é um triangulo escaleno")

    else (
        console.log("equilátero"))
})()