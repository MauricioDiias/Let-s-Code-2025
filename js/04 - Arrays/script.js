//ARRAY ou lista

let nome = ["Bia", "Marcos", "Francisco", "Pedro"];

let idade = [15, 25, 20, 23, 14];
console.log(nome);
console.log(idade);

// Tamanho do array
console.log(nome.length);
console.log(idade.length);

// indexOf()

console.log(nome.indexOf("Bia"));

// acessando

console.log(nome[0], nome[1], nome[3]);

// Adicionando elemento

nome[4] = "Mauricio";
console.log(nome);
console.log(nome.length);

nome[nome.length] = "Jonatas";
console.log(nome);
console.log(nome.length);

// Métodos de Array
//Adicionando na última posição
nome.push("Gérlison");
console.log(nome);

//Adicionando na primeira posição
nome.unshift("Helena");
console.log(nome);
//Removendo o primeiro
nome.shift();
console.log(nome);
// Remove o último
nome.pop();

for (let i = 0; i < nome.length; i++) {
  console.log(`${i + 1}° Aluno(a) = ${nome[i]} com a idade = ${idade[i]}`);
}

// Objetos

let aluno = {
  nome: "Pedro ",
  sobreNome: "Zacarias",
  idade: 18,
  cidade: "Parnaíba",
  letsCode: true,
};

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.sobreNome);
console.log(aluno.idade);
console.log(aluno.cidade);
console.log(aluno.letsCode);

let turmaNoite = [
  {
    nome: "Pedro ",
    sobreNome: "Zacarias",
    idade: 18,
    cidade: "Parnaíba",
    letsCode: true,
  },
  {
    nome: "Jonatas  ",
    sobreNome: "Portela",
    idade: 14,
    cidade: "Magalhães de Almeida",
    letsCode: true,
  },
  {
    nome: "Viviane",
    sobreNome: "Silva",
    idade: 19,
    cidade: "Parnaíba",
    letsCode: false,
  },
];

console.log(turmaNoite);

// Quantos alunos eu tenho na Turma Noite

console.log(turmaNoite.length);

// Quem é o primeiro da lista

console.log(turmaNoite[0]);
console.log(turmaNoite[0].letsCode);

// Quem é o segundo?

console.log(turmaNoite[1]);
//qual o seu nome
console.log(turmaNoite[1].nome);
console.log(turmaNoite[1].idade);

console.log(turmaNoite[1].nome);

let part = null;
if (turmaNoite[2].letsCode === true) {
  part = "está participando";
} else {
  part = "não está participando";
}

console.log(
  `O Primeiro Aluno: ${turmaNoite[2].nome}, comm a idade ${turmaNoite[2].idade} ele ${part}`
);

turmaNoite.push({
  nome: "Helena",
  sobreNome: "Gomes",
  idade: 27,
  cidade: "Parnaíba",
  letsCode: true,
});

function adicionarNivia() {
  turmaNoite.push({
    nome: "Nivia",
    sobreNome: "Marcela",
    idade: 29,
    cidade: "Codó",
    letsCode: true,
  });
}

adicionarNivia();

function adicionarAluno(nome, sobreNome, idade, cidade, letsCode) {
  turmaNoite.push({
    nome,
    sobreNome,
    idade,
    cidade,
    letsCode,
  });
}

adicionarAluno("João Pedro", "Diniz", 28, "Buriti dos Lopes", true);
adicionarAluno("João Pedro2", "Diniz", 28, "Buriti dos Lopes", true);
adicionarAluno("João Pedro3", "Diniz", 28, "Buriti dos Lopes", true);

function substituir(posicao) {
  turmaNoite[posicao] = {
    nome: "Maria",
    sobreNome: "Marcela",
    idade: 29,
    cidade: "Codó",
    letsCode: true,
  };
}

substituir(3);

console.log(`
    *** LISTA DE ALUNOS ***
    `);
for (i = 0; i < turmaNoite.length; i = i + 1) {
  console.log(
    `
            Nome - ${turmaNoite[i].nome} 
            Idade - ${turmaNoite[i].idade} 
            Cidade - ${turmaNoite[i].cidade}
            Aulas - ${turmaNoite[i].letsCode === true ? "Presente" : "Faltou"}
            `
  );
}
