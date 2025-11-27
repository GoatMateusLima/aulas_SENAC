const prompt = require('prompt-sync');
console.log("ola mundo");


 // comentario em uma linha

 /*comentario em bloco 
 */
const ola = "seja bem vindo ao nosso programa :) \n\n" ;
const divisao = "---------------------------------------------------- \n\n"
var age = 35 ;
var name = "mateus" ;

// O + usado para juncao de texto e uma concatenação

console.log(ola + divisao + "SEJA BEM-VINDO " + name);


/* Isso é uma interpolação, a crase é para interpolação, o $ é obrigtatorio para mostrar uym local de codigo */
console.log( `${ola} ${divisao} olá ${name},  voçê tem ${age}.`);




// somar duas variaveis

const variavel1 = 5;
const variavel2 = 3;

const resultado = variavel1 + variavel2;

console.log(`O resultado da soma ${variavel1} + ${variavel2} é ` + resultado)


console.log(divisao)




//fazendo ainda
const variavel3 = prompt("digite o primeiro numero");
const variavel4 = prompt("digite o segundo numero");



const result = variavel1 + variavel2;

console.log(`O resultado da soma ${variavel3} + ${variavel4} é ` + result)




