const diaDaSemana = prompt ("Qual é o dia da semana?");
if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    alert ("Bom fim de semana!");
} else {
    alert ("Boa semana!");
}

const number = prompt ("Digite um numero")
if (number >= 0) {
    alert ("positivo");
} else if (number < 0) {
    alert ("negativo");
}

const pontuacao = prompt("Sua pontuação:");
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

const saldo = 5;
alert(`Seu saldo atual é de R$ ${saldo}.`);

const nome = prompt ("Insira seu nome:");
alert (`Bem vindo ${nome}!`);