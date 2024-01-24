function olaMundo() {
    console.log("Olá mundo!");    
}
olaMundo();

function hello(nome) {
    console.log(`Hello ${nome}!`);
}
hello("Tata");

function dobro(numero) {
   return numero * 2;   
}
const resultado = dobro(parseInt(Math.random() * 1000) + 1);
console.log(resultado);

function media(number1, number2, number3) {
    return (number1 + number2 + number3) / 3;
}
const result = media(5, 2, 8);
console.log(result);

function maior(a, b) {
    return a > b ? a : b;
} 
const oMaiorNumero = maior(18, 19);
console.log(oMaiorNumero);

function quadrado(number) {
    return number * number;
}
const resultad = quadrado(parseInt(Math.random() * 100) + 1);
console.log(resultad);