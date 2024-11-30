const nome = prompt("Qual é o seu nome?");
const idade = parseInt(prompt("Quantos anos você tem?"));

if (idade >= 18) {
    alert(`Olá, ${nome}! Você é maior de idade.`);
} else {
    alert(`Olá, ${nome}! Você é menor de idade.`);
}