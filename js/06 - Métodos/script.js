const alunos = [
  {
    nome: "Ana Silva",
    idade: 17,
    turma: "3A",
    notas: [8, 7, 9, 8.5],
    endereco: { rua: "Rua das Palmeiras, 123", cidade: "São Paulo" },
    ativo: true,
    faltas: 2,
  },
  {
    nome: "Bruno Costa",
    idade: 16,
    turma: "2B",
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
    idade: 18,
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

const mediasAlunos = alunos.map((aluno) => {
  let soma = aluno.notas.reduce((total, nota) => total + nota);
  let quantidade = aluno.notas.length;
  let media = soma / quantidade;
  aluno.media = media.toFixed(1);
  return aluno;
});
// console.log(mediasAlunos);

alunos.forEach((aluno) => (aluno.turno = "Noite"));
// console.log(alunos);

const alunosMaiores = alunos.filter((aluno) => aluno.idade > 17);
// console.log(alunosMaiores);

// const mediasAlunos = alunos.map((aluno) => {
//   let media =
//     aluno.notas.reduce((total, nota) => total + nota) / aluno.notas.length;
//   return {
//     nome: aluno.nome,
//     idade: aluno.idade,
//     media: media.toFixed(1),
//   };
// });

// console.log(mediasAlunos);

const alunosOrdenadoIdade = alunos.sort((a, b) => a.idade - b.idade);
// console.log(alunosOrdenadoIdade);

const alunosOrdenadoNome = alunos.sort((a, b) => a.nome.localeCompare(b.nome));
// console.log(alunosOrdenadoNome);

//find retorna so o primeiro que satisfaz a condição

const alunoFind = alunos.find((aluno) => aluno.idade > 17);
// console.log(alunoFind);

// retorne uma lista com os alunos ordanados pelo número de faltas
//do maio para o menor

const faltasOrdenadas = alunos.sort((a, b) => b.faltas - a.faltas);
// console.log(faltasOrdenadas);

const listaModificada = alunos.map((aluno) => {
  if (aluno.ativo === true) {
    aluno.ativo = "Ativo";
  } else {
    aluno.ativo = "Inativo";
  }
  return aluno;
});

console.log(listaModificada);

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

function adicionarAluno(aluno) {
  listaModificada.push(aluno);
}

adicionarAluno(novoAluno);

console.log("Lista depois do push", listaModificada);

//formulário
// lista de dados

//quero excluir um aluno da lista

function deletarAluno(novoAluno) {
  const listaNova = listaModificada.filter(
    (aluno) => aluno.nome !== novoAluno.nome
  );
  return listaNova;
}

console.log("Delete marcelo", deletarAluno(novoAluno));
