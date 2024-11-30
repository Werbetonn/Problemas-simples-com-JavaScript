const numero = parseInt(prompt("Digite um número inteiro para a contagem regressiva:"));

if (numero) {
    console.log("Insira um número válido.");
} else {
    console.log(`Contagem regressiva a partir de ${numero}:`);

    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}