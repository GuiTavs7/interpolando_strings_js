// 1) CONCATENANDO STRINGS DO JEITO ANTIGO

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return "Primeiro Nome: " + primeiroNome + ", Último Nome: " + ultimoNome + ", Idade: " + idade;
}

console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));

// 2) USANDO INTERPOLAÇÃO DE STRINGS

const interpolandoStrings = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`;
}

console.log(interpolandoStrings("Ricardo", "Dias", 35));

// 3) INTERPOLANDO COM FUNÇÕES

console.log(`${imprimirInformacoesPessoa("Guilherme", "Tavares", 21)}, ele é um DevQuester`);

// 4) USANDO EXPRESSÕES (ARITMÉTICAS, BOOLEANAS/LÓGICAS, ETC)

console.log(`Soma = ${10 + 20}`);