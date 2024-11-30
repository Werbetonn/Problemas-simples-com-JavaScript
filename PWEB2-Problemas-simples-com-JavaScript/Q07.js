function inverterString(texto) {
    return texto.split("").reverse().join("");
}

const entrada = prompt("Digite uma string para inverter:");
const stringInvertida = inverterString(entrada);
alert(`A string invertida é: ${stringInvertida}`);