//ARRAY ou lista

let nomes = ["Bia", "Marcos", "Francisco", "Pedro", "Marcela", "Francisca"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let misturado = ["Maurcio", 56, true];

// lista de nomes
console.log(nomes);

// Primeiro elemento
console.log(nomes[0]);

// acessando um elemento pelo índice
console.log(nomes[3]);

// tamanho do array ou lista
console.log("Tamanho do array de nomes:", nomes.length);

// acessando o último elemento pelo índice
console.log(nomes[nomes.length - 1]);

// indexOf()

console.log("index da Bia:", nomes.indexOf("Bia"));

// Adicionando elemento na última posição
nomes[nomes.length] = "Mauricio";
console.log(nomes);

// substituido um nome

nomes[1] = "Jonatas";

console.log(nomes);

// substituir com um valor
let i = nomes.indexOf("Francisca");

nomes[i] = "Zacarias";

console.log(nomes);

// Percorro esse array

console.log(nomes[1]);

console.log("===== Lista de Nomes com for =====");
// for (let i = 0; i < nomes.length; i = i + 1) {
//   console.log(nomes[i]);
// }

// concatenando valores

// for (let i = 0; i < nomes.length; i = i + 1) {
//   console.log(`index:${i} valor: ${nomes[i]}`);
// }

// trazer posições dos valores

// for (let i = 0; i < nomes.length; i = i + 1) {
//   console.log(`${i + 1}° ${nomes[i]}`);
// }

// Métodos de Array
//Adicionando na última posição
nomes.push("Gérlison");

console.log(nomes);

// //Adicionando na primeira posição
nomes.unshift("Helena");
console.log(nomes);

console.log("Removido primeiro elemento");
// //Removendo o primeiro
let primeiroRemovido = nomes.shift();
console.log(nomes);
console.log("Primeiro elemento removido foi:", primeiroRemovido);

// // Remove o último
console.log("Removido último elemento");

let ultimoRemovido = nomes.pop();
console.log(nomes);
console.log("Último elemento removido foi:", ultimoRemovido);

let nomesRemovidos = [];
// Adicionando elementos em uma segunda lista
nomesRemovidos.push(primeiroRemovido);
console.log(`${primeiroRemovido} Adicionado!`);
nomesRemovidos.push(ultimoRemovido);
console.log(`${ultimoRemovido} Adicionado!`);

console.log("==== Lista de Nomes Removidos ====");
console.log(nomesRemovidos);

// metodo de Percorrer um array
console.log("==== Lista com forEach ====");

nomes.forEach((valor) => console.log(valor));
nomes.forEach((nome, index) => console.log(`index:${index} valor: ${nome}`));
nomes.forEach((nome, index) => console.log(`${index + 1}º ${nome}`));

// map()
console.log(numeros);
console.log("==== lista de números com map ===");
// listando os numeros
numeros.map((numero) => console.log(numero * 2));

//criando um novo array
let dobro = numeros.map((numero) => numero * 2);
console.log(dobro);

// filter

let pares = numeros.filter((numero) => numero % 2 === 0);
let impar = numeros.filter((numero) => numero % 2 !== 0);
console.log("lista de Numeros", numeros);
console.log("Lista de números pares", pares);
console.log("Lista de números impares", impar);

// filtrando a listra dobro

let menorQ8 = dobro.filter((n) => n < 8);
let maiorQ8 = dobro.filter((n) => n > 8);
let maiorQ4eMenorQ14 = dobro.filter((n) => n > 4 && n < 14);
console.log("lista Dobro", dobro);
console.log("números menor que 8", menorQ8);
console.log("números maior que 8", maiorQ8);
console.log("números maior que 4 e menor que 14", maiorQ4eMenorQ14);

// slice fatiar

console.log("lista de Numeros", dobro);

let maior_4_menor_14 = dobro.slice(2, 6);

console.log(maior_4_menor_14);
