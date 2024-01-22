console.log("Boas vindas!");

const nome = "Darc";
console.log(`Olá ${nome}!`);
alert(`Olá, ${nome}!`);

const linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagem);

const valor1 = 5;
const valor2 = 2;
const resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual à ${resultadoSoma}.`);
const resultadoSubtração = valor1 - valor2;
console.log(`A diferença entre o valor ${valor1} e ${valor2} é igual à ${resultadoSubtração}.`);

const idade = prompt("Qual sua idade?");
function validarIdade(idade) {
    if (idade < 18) {
        console.log("É menor de idade");
    } else {
        console.log("É maior de idade");
    };
}

const numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let number = 1;
while (number <= 10) {
    console.log(number);
    number++;    
}

const nota = 10;
if (nota >= 7) {
    console.log("Aprovado");
} else { 
    console.log("Reprovado");
}

const math = Math.random();
console.log(math);

let mathInteiro = parseInt(Math.random() * 10) + 1;
console.log(mathInteiro);

let mathInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(mathInteiroAleatorio);