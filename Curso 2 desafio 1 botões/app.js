const titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function verificarChute() {
    console.log("O botão foi clicado!");
}

function exibirAlerta() {
    alert("Eu amo JS");
}

function exibirPrompt() {
    const nomeDaCidade = prompt("Qual sua cidade favorita?");
    alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}

function soma() {
    const firstNumber = parseInt(prompt("Digite um número"));
    const secondNumber = parseInt(prompt("Digite outro número"));
    const result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`);
}