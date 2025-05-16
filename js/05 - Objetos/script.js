// Objeto é uma estrutraa de dados que permite armazenar dados Composta por  pares chaves e valores
// essas chaves e valores formam propriedades e métodos

const aluno = {
  nome: "João",
  idade: 27,
};

//acessar as propriedades
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Nome: ${aluno["nome"]}`);
console.log(`Idade: ${aluno["idade"]}`);

// substituir o valor de uma propriedade
aluno.idade = 30;
console.log(`Idade Modificada: ${aluno.idade}`);

// adicionar uma propriedade
aluno.cidade = "Parnaíba";
console.log(`Cidade: ${aluno.cidade}`);

console.log(`Aluno:`, aluno);

// Criar um novo objeto
const aluno2 = new Object();
aluno2.nome = "Kelberis";
aluno2.idade = 25;
aluno2.cidade = "Parnaíba";

console.log(`Aluno2:`, aluno2);

//desestruturar
const idadeAluno = aluno.idade;
const idadeAluno2 = aluno2.idade;
console.log(`Idade do aluno: ${idadeAluno}`);
console.log(`Idade do aluno2: ${idadeAluno2}`);

const { idade } = aluno2;
console.log(`Idade do aluno2: ${idade}`);

// Objeto aninhado
const aluno3 = {
  nome: "João",
  idade: 27,
  cidade: "Maranhão",
  endereco: {
    rua: "Rua A",
    numero: 2356,
    residenciaPropria: true,
  },
};

console.log(
  `Edereço : Rua = ${aluno3.endereco.rua}, N = ${aluno3.endereco.numero} `
);

const endereco = aluno3.endereco;

console.log(`Edereço : Rua = ${endereco.rua}, N = ${endereco.numero} `);

const { rua, numero } = aluno3.endereco;

console.log(`Edereço : Rua = ${rua}, N = ${numero} `);

//  Adicionando notas
// notas por bimestre

aluno3.notas = [9, 5, 8, 7];

console.log(`Aluno3 com notas:`, aluno3);

// const { notas } = aluno3;

// console.log(`Notas do aluno3:`, notas);

// Métodos são funções relacionada a uma chave

aluno3.estudar = function () {
  return "Aluno está estudando...";
};

console.log(aluno3.estudar());

// this

aluno3.descansar = function () {
  return `O Aluno ${this.nome} está descansando..`;
};

console.log(aluno3.descansar());

// exemplo notas

aluno3.media = function () {
  let media =
    this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
  return console.log(media);
};

aluno3.media();

// pegar chaves de um objeto

console.log("chaves do aluno3", Object.keys(aluno3));
// acessando nome do aluno
// const nome = Object.keys(aluno3)[1];
// console.log(nome);
// console.log(aluno3[nome]);

// pegar os valores
console.log("valores do aluno3", Object.values(aluno3));
console.log(Object.values(aluno3)[2]);

// spread operator

console.log(`aluno 2:`, aluno2);

const aluno4 = { ...aluno2 };
console.log(`aluno 4:`, aluno4);

const notasBimestre = {
  notas: [8, 8, 9, 9],
  ano: 2025,
};

const aluno4Atualizado = { ...aluno2, ...notasBimestre };

console.log(`Aluno 4 Atualizado:`, aluno4Atualizado);

////

const { nome, notas } = { ...aluno2, ...notasBimestre };

console.log(nome, notas);
