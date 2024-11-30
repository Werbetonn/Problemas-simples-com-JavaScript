const numeros = [10, 20, 30, 40, 50];

function somaArray(array) {
    let soma = 0;
    for (let numero of array) {
        soma += numero;
    }
    return soma;
}

const resultado = somaArray(numeros);
console.log(`A soma de todos os elementos do array é: ${resultado}`);