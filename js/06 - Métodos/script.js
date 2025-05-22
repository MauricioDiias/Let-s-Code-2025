const alunos = [
  {
    nome: "Ana Silva",
    idade: 25,
    turma: "3A",
    notas: [8, 7, 9, 8.5],
    endereco: { rua: "Rua das Palmeiras, 123", cidade: "São Paulo" },
    ativo: true,
    faltas: 2,
  },
  {
    nome: "Bruno Costa",
    idade: 16,
    turma: "2A",
    notas: [6, 7.5, 7, 6.5],
    endereco: { rua: "Avenida Central, 456", cidade: "Rio de Janeiro" },
    ativo: true,
    faltas: 5,
  },
  {
    nome: "Carla Mendes",
    idade: 18,
    turma: "3A",
    notas: [9, 9.5, 10, 9],
    endereco: { rua: "Travessa das Flores, 78", cidade: "São Paulo" },
    ativo: false,
    faltas: 1,
  },
  {
    nome: "Daniel Oliveira",
    idade: 17,
    turma: "3B",
    notas: [5, 6, 5.5, 7],
    endereco: { rua: "Rua da Praia, 101", cidade: "Salvador" },
    ativo: true,
    faltas: 8,
  },
  {
    nome: "Elisa Ferreira",
    idade: 16,
    turma: "2B",
    notas: [8.5, 9, 7.5, 8],
    endereco: { rua: "Alameda dos Anjos, 202", cidade: "Belo Horizonte" },
    ativo: true,
    faltas: 0,
  },
  {
    nome: "Felipe Almeida",
    idade: 20,
    turma: "3A",
    notas: [7, 6.5, 8, 7.5],
    endereco: { rua: "Rua Principal, 303", cidade: "Curitiba" },
    ativo: false,
    faltas: 3,
  },
];

// map cria um novo array

const nomesDosAlunos = alunos.map((aluno) => aluno.nome);
// console.log(nomesDosAlunos);
// alunos.map((aluno) => {
//   console.log(`Nome : ${aluno.nome},  Faltas : ${aluno.faltas}`);
// });

// alunos.forEach((aluno) =>
//   console.log(`Nome : ${aluno.nome},  Faltas : ${aluno.faltas}`)
// );

// Criando uma nova estrutura

// const alunosNomeTurma = alunos.map((aluno) => ({
//   nome: aluno.nome,
//   turma: aluno.turma,
// }));

// console.log(alunosNomeTurma);

// // forEach;
// alunos.forEach((aluno) => {
//   console.log(`Nome : ${aluno.nome},  Faltas : ${aluno.faltas}`);
// });

// Reduce
// const notas = [1, 5, 6, 9];
// const somaDasNotas = notas.reduce((total, nota) => total + nota);
// console.log(somaDasNotas);

const mediasAlunos = alunos.map((aluno) => {
  let soma = aluno.notas.reduce((total, nota) => total + nota);
  let quantidade = aluno.notas.length;
  let media = soma / quantidade;
  aluno.media = Number(media.toFixed(2));
  return aluno;
});

// alunos.forEach((aluno) => {
//   console.log(`Nome : ${aluno.nome},  Média : ${aluno.media}`);
// });

// alunos.forEach((aluno) => {
//   if (aluno.turma === "2A" || aluno.turma === "3A") {
//     aluno.turno = "Noite";
//   } else {
//     aluno.turno = "Tarde";
//   }
// });

// Operador Ternário
alunos.forEach((aluno) => {
  aluno.turma === "2A" || aluno.turma === "3A"
    ? (aluno.turno = "Noite")
    : (aluno.turno = "Tarde");
});

// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome},  Turma: ${aluno.turma} Turno : ${aluno.turno}`
//   );
// });

// Filter

const alunosMaioresDeIdade = alunos.filter((aluno) => aluno.idade >= 18);
// console.log(alunosMaioresDeIdade);
// alunosMaioresDeIdade.forEach((aluno) => {
//   console.log(`Nome : ${aluno.nome}, Idade: ${aluno.idade} `);
// });

//Sort()

// let numeros = [1, 5, 3, 15, 59, 25];

// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// let letras = ["G", "a", "b", "F"];
// console.log(letras.sort((a, b) => a.localeCompare(b)));
// console.log(letras.sort((a, b) => b.localeCompare(a)));

// console.log("Alunos por idade");
// alunos.sort((a, b) => a.idade - b.idade);

// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
//   );
// });
// console.log("--------------------");
// alunos.sort((a, b) => b.idade - a.idade);

// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
//   );
// });
// console.log("--------------------");

// console.log("Alunos por Média");
// alunos.sort((a, b) => a.media - b.media);

// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
//   );
// });
// console.log("--------------------");

// alunos.sort((a, b) => b.media - a.media);

// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
//   );
// });

// console.log("Alunos ordenados por Nome");

alunos.sort((a, b) => a.nome.localeCompare(b.nome));
alunos.forEach((aluno) => {
  // console.log(
  //   `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
  // );
});

//find retorna so o primeiro que satisfaz a condição

const alunoFind = alunos.find((aluno) => aluno.idade >= 18);

// console.log(alunoFind);

// retorne uma lista com os alunos ordanados pelo número de faltas
//do maio para o menor

const faltasOrdenadas = alunos.sort((a, b) => b.faltas - a.faltas);
// console.log(faltasOrdenadas);
// alunos.forEach((aluno) => {
//   console.log(
//     `Nome : ${aluno.nome}, Idade:${aluno.idade}  Média : ${aluno.media}`
//   );
// });

const listaModificada = alunos.map((aluno) => {
  if (aluno.ativo === true) {
    aluno.ativo = "Ativo";
  } else {
    aluno.ativo = "Inativo";
  }
  return aluno;
});

// Ações de adicionar ou remover usando métodos

let novoAluno = {
  nome: "Marcelo Dias",
  idade: 18,
  turma: "3A",
  notas: [9, 9.5, 10, 9],
  endereco: { rua: "Travessa das Flores, 78", cidade: "São Paulo" },
  ativo: "Inativo",
  faltas: 1,
  media: "9.4",
  turno: "Noite",
};

// alunos.forEach((aluno, index) => {
//   console.log(`${index + 1} Nome : ${aluno.nome}, Idade:${aluno.idade}  `);
// });

function adicionarAluno(aluno) {
  alunos.push(aluno);
}

adicionarAluno(novoAluno);

// alunos.forEach((aluno, index) => {
//   console.log(`${index + 1} Nome : ${aluno.nome}, Idade:${aluno.idade}  `);
// });

// console.log(novoAluno.nome);

// const listaAtualizada = alunos.filter((aluno) => aluno.nome !== novoAluno.nome);
// const alunoDeletado = alunos.filter((aluno) => aluno.nome === novoAluno.nome);
// console.log("Alunos");
// alunos.forEach((aluno, index) => {
//   console.log(`${index + 1} Nome : ${aluno.nome}, Idade:${aluno.idade}  `);
// });

// console.log("Lista atualizada");

// listaAtualizada.forEach((aluno, index) => {
//   console.log(`${index + 1} Nome : ${aluno.nome}, Idade:${aluno.idade}  `);
// });

// console.log("Aluno Deletado");

// alunoDeletado.forEach((aluno, index) => {
//   console.log(`${index + 1} Nome : ${aluno.nome}, Idade:${aluno.idade}  `);
// });

// const alunosTarde = alunos.filter((aluno) => aluno.turno === "Tarde");

// const alunosNoite = alunos.filter((aluno) => aluno.turno === "Noite");

// console.log("------- Alunos Tarde------");
// alunosTarde.forEach((aluno) =>
//   console.log(` nome: ${aluno.nome} Turno:${aluno.turno}  `)
// );
// console.log("------- Alunos Noite------");

// alunosNoite.forEach((aluno) =>
//   console.log(` nome: ${aluno.nome} Turno:${aluno.turno}  `)
// );

function deletarAluno(alvo) {
  const alunoDeletado = alunos.filter((aluno) => aluno.nome === alvo.nome);
  return alunoDeletado;
}

console.log("Delete marcelo", deletarAluno(novoAluno));
