const alunos = [
  {
    nome: "Pedro",
    idade: 27,
    curso: "Let´scode",
    notas: [5, 9, 10, 7],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Ana",
    idade: 22,
    curso: "Let´scode",
    notas: [8, 7, 9, 6],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Lucas",
    idade: 25,
    curso: "Let´scode",
    notas: [6, 5, 7, 8],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Mariana",
    idade: 24,
    curso: "Let´scode",
    notas: [10, 9, 8, 10],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "João",
    idade: 23,
    curso: "Let´scode",
    notas: [4, 6, 5, 7],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Beatriz",
    idade: 21,
    curso: "Let´scode",
    notas: [9, 8, 7, 9],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Carlos",
    idade: 26,
    curso: "Let´scode",
    notas: [6, 7, 6, 8],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Fernanda",
    idade: 28,
    curso: "Let´scode",
    notas: [10, 10, 9, 10],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Rafael",
    idade: 20,
    curso: "Let´scode",
    notas: [5, 6, 7, 5],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
  {
    nome: "Juliana",
    idade: 29,
    curso: "Let´scode",
    notas: [8, 9, 8, 7],
    media: function () {
      return (
        this.notas.reduce((total, nota) => total + nota) / this.notas.length
      );
    },
    situacao: function () {
      return this.media() > 7 ? "Aprovado" : "Reprovado";
    },
  },
];

// Exemplo de uso:
// alunos.forEach((aluno) => {
//   console.log(
//     `${aluno.nome} - Média: ${aluno
//       .media()
//       .toFixed(1)} - Situação: ${aluno.situacao()}`
//   );
// });

const alunosAprovados = alunos.filter(
  (aluno) => aluno.situacao() === "Aprovado"
);
const alunosReprovados = alunos.filter(
  (aluno) => aluno.situacao() === "Reprovado"
);

console.log(`Quantidade de alunos:`, alunos.length);
console.log(`Quantidade de alunos Aprovados:`, alunosAprovados.length);
console.log(`Quantidade de alunos Reprovados:`, alunosReprovados.length);

console.log("----- Alunos Aprovados------- ");
alunosAprovados.forEach((aluno) =>
  console.log(`${aluno.nome} - ${aluno.media()}`)
);
console.log("----- Alunos Reprovados------- ");
alunosReprovados.forEach((aluno) =>
  console.log(`${aluno.nome} - ${aluno.media()}`)
);
