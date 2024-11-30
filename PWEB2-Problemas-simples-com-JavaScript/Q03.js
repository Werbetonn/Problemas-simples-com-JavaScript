const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const operacao = prompt("Digite a operação desejada (soma, subtração, multiplicação, divisão):");

let resultado;

switch (operacao) {
    case "soma":
        resultado = numero1 + numero2;
        break;
    case "subtração":
    case "subtracao":
        resultado = numero1 - numero2;
        break;
    case "multiplicação":
    case "multiplicacao":
        resultado = numero1 * numero2;
        break;
    case "divisão":
    case "divisao":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: divisão por zero!";
        }
        break;
    default:
        resultado = "Operação inválida!";
}

alert(`O resultado é: ${resultado}`);
