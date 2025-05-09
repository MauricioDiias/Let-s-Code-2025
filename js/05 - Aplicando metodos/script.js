// Principais métodos strings

const nome = "javascript";

console.log(nome.length);
// deixar as letras maiúsculas
console.log(nome.toLocaleUpperCase());
// deixar as letras minúsculas
console.log(nome.toLowerCase());

const sobreNome = " Dias ";
console.log(sobreNome);
//remove os espaços do inicio e do fim
console.log(sobreNome.trim());

const nomeCompleto = "mauricio dias";

console.log(nomeCompleto.split(""));

// verifica se existe
console.log(nomeCompleto.split("").includes(""));

const nomes = ["bia", "francisco", "pedro", "marcela", "fabricio"];

nomes.push("marcelo");

let addNome = "bia";

if (nomes.includes(addNome)) {
  console.log("Esse nome já existe!");
} else {
  nomes.push(addNome);
}

console.log(nomes);

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// Principais métodos array

// map

nomes.map((nome) => {
  console.log(nome);
});

const idades = [2, 6, 20, 15, 31, 17, 40, 29];

const dobrar = idades.map((idade) => {
  return idade * 2;
});

console.log(dobrar);

//fillter

const maiorIdade = idades.filter((idade) => {
  return idade > 18;
});
console.log(maiorIdade);

// sort()

const idadeOrdenada = idades.sort((a, b) => a - b);

console.log(idadeOrdenada);

// array reverso
const reverso = idadeOrdenada.reverse();

console.log(reverso);

// remove e adiciona em uma posição do array
console.log(nomes);
const nomeRetirado = nomes.splice(1, 1, "dias", "fabio");
console.log("Nomes Retirados:" + nomeRetirado);

console.log(nomes);

const index = nomes.indexOf("pedro");
console.log(index);
const novoNome = "mauricio";

const nomeRemovido = nomes.splice(index, 1, novoNome);

console.log(nomes);

//slice trás apartir do indice

console.log(nomes.slice(3));

const nomesFormatados = nomes.map((nome) => {
  return nome[0].toUpperCase() + nome.slice(1);
});

console.log(nomesFormatados);

let turmaNoite = [
  {
    nome: "Pedro ",
    sobreNome: "Zacarias",
    idade: 18,
    cidade: "Parnaíba",
    letsCode: true,
    notas: [10, 9, 8],
  },
  {
    nome: "Jonatas  ",
    sobreNome: "Portela",
    idade: 14,
    cidade: "Magalhães de Almeida",
    letsCode: true,
    notas: [10, 9, 9],
  },
  {
    nome: "Viviane",
    sobreNome: "Silva",
    idade: 19,
    cidade: "Parnaíba",
    letsCode: false,
    notas: [7, 6, 5],
  },
];

console.log(turmaNoite);

const maioIdade = turmaNoite.filter((aluno) => {
  return aluno.idade > 18;
});
console.log(maioIdade);

console.log("--- Lista de Alunos -");

turmaNoite.map((aluno) =>
  console.log(`
    Nome: ${aluno.nome} ${aluno.sobreNome}
    Idade: ${aluno.idade}
    Cidade: ${aluno.cidade}
    1° Nota: ${aluno.notas[0]}
    2° Nota: ${aluno.notas[1]}
    3° Nota: ${aluno.notas[2]}
    Média : ${aluno.notas.reduce((total, nota) => total + nota) / 3}

    `)
);

turmaNoite.map((aluno) =>
  console.log(aluno.notas.reduce((total, nota) => total + nota) / 3)
);

const alunosNotas = turmaNoite.map((a) => a.notas);

console.log(alunosNotas);

const medias = alunosNotas.map((notas) => {
  return notas.reduce((total, nota) => {
    return total + nota / notas.length;
  }, 0);
});

console.log(medias);

const div = document.getElementById("id");
div.innerHTML = turmaNoite.map(
  (aluno) =>
    `<ul>
      <li>
      Nome: ${aluno.nome} ${aluno.sobreNome}
      Idade: ${aluno.idade}
      Cidade: ${aluno.cidade}
      1° Nota: ${aluno.notas[0]}
      2° Nota: ${aluno.notas[1]}
      3° Nota: ${aluno.notas[2]}
      Média : ${aluno.notas.reduce((total, nota) => total + nota) / 3}
      </li><ul>
      `
);
