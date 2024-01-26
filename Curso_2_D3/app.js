function calculaIMC(peso, alturaMetros){
    return peso / (alturaMetros * alturaMetros);
  }
const result = calculaIMC(50, 1.65);
console.log(result);  

  function calcularFatorial(a) {
    if (a == 0 || a == 1) {
        return 1
    }
    return a * calcularFatorial(a - 1);
}
const resultFatorial = calcularFatorial(7);
console.log(resultFatorial);

function converterDolar (real) {
    const conversao = real * 4.80;
    return conversao.toFixed(2);
}
const resultadoConversao = converterDolar (5.4541541);
console.log(resultadoConversao);

function areaEPerimetroSalaRetangular (altura, largura) {
    const area = largura * altura;
    const perimetro = 2 * (largura + altura);
    console.log(area);
    console.log(perimetro);
}
const resultareaEPerimetroSalaRetangular = areaEPerimetroSalaRetangular(5, 2);

function areaEPerimetroSalaCircular (r) {
    const areaCirculo = 3.14 * (r * r);
    const perimetroCirculo = 2 * 3.14 * r;
    console.log(areaCirculo);
    console.log(perimetroCirculo);
}
const resultareaEPerimetroSalaCircular = areaEPerimetroSalaCircular(3);

function tabuada(Numer) {
    for (let i = 1; i <= 10; i++) {
        const resultadoTabuada = Numer * i;
        console.log(resultadoTabuada)
    }
}
tabuada(15);