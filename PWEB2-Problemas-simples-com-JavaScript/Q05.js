const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

const numeros = [numero1, numero2, numero3];

numeros.sort((a, b) => a - b);

alert(`Os números em ordem crescente são: ${numeros.join(", ")}`);