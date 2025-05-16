const aluno = {};

aluno.nome = "Pedro";
aluno.idade = 27;
aluno.curso = "Let´scode";
aluno.notas = [5, 9, 10, 7];
aluno.media = function () {
  return this.notas.reduce((total, nota) => total + nota) / this.notas.length;
};
aluno.situacao = function () {
  if (this.media() > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};

console.log(aluno);

console.log(aluno.media());
console.log(aluno.situacao());

console.log("-------- Registro do Aluno ------- ");
console.log(`
    Aluno: ${aluno.nome},
    Idade: ${aluno.idade},
    Matriculado no Curso : ${aluno.curso},
    Obteve a média = ${aluno.media()},
    estando com a situação de: ${aluno.situacao()}
    `);
