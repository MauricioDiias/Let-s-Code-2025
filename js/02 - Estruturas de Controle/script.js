// ESTRUTURAS DE CONTROLE

//  ESTRUTURA CONDICIONAIS

// if
let x = 2;

if (false) {
  console.log("ok");
}

// if ,else

if (true) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// Exemplo Maior de Idade
let idade = 19;

if (idade >= 18) {
  console.log("Maior de Idade!");
} else {
  console.log("Menor de Idade!");
}

let diaSemana = 1;

if (diaSemana == 1) {
  console.log("Domingo");
} else if (diaSemana == 2) {
  console.log("Segunda Feira");
} else if (diaSemana == 3) {
  console.log("Terça Feira");
} else {
  console.log("Dia inválido");
}

// SWITCH
let dia = 2;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda Feira");
    break;
  case 3:
    console.log("Terça Feira");
    break;
  case 4:
    console.log("Quarta Feira");
    break;
  case 5:
    console.log("Quinta Feira");
    break;
  case 6:
    console.log("Sexta Feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}

// ESTRUTURA DE REPETIÇÃO

// FOR

// for (let numero = 0; numero < 10; numero += 1) {
//   console.log(numero);
// }

// EXEMPLOS

// alert("Olá");
// let nome = prompt("Qual o seu nome?");
// let quantidade = nome.length;

// if (nome.length == 0) {
//   alert("Você não digitou seu nome!");
// } else {
//   alert(`Bem-Vindo! ${nome} seu nome tem ${quantidade} letras`);
// }

// let a = Number(prompt("Digite um número"));
// let b = Number(prompt("Digite outro número"));

// let resultado = a + b;

// alert(resultado);

// let numero = Number(prompt("Digite um número"));
// let resultado;

// if (numero > 0) {
//   resultado = 1;
// } else if (numero < 0) {
//   resultado = 2;
// } else {
//   resultado = 3;
// }

// switch (resultado) {
//   case 1:
//     alert(` O número:${numero} é positivo`);
//     break;
//   case 2:
//     alert(` O número:${numero} é negativo`);
//     break;

//   default:
//     alert(`Você digitou o número ${numero} `);
//     break;
// }

// alert("Vamos Calcular dois números!");

// let a = Number(prompt("Digite o primeiro número"));
// let b = Number(prompt("Digite o segundo número"));

// let operacao = Number(
//   prompt(
//     `Digite o número referente a operação desejada
//     1 - Soma (+)
//     2 - Subtração (-)
//     `
//   )
// );

// switch (operacao) {
//   case 1:
//     alert(`O resultado da soma é ${a + b}`);
//     break;
//   case 2:
//     alert(`O resultado da subtração é ${a - b}`);
//     break;
// }

// alert("Vamos verificar se um número é par ou ímpar!");

// let numero = Number(prompt("Digite o número!"));

// let resultado = numero % 2 === 0;
// console.log("operação resto", numero % 2);
// console.log("resultado", resultado);
// if (resultado) {
//   alert(`O número ${numero} é par!`);
// } else {
//   alert(`O número ${numero} é ímpar!`);
// }

// alert("Vamos contar números");

// let numeroInicial = Number(prompt("Você quer comerçar por qual número?"));
// let numeroFinal = Number(prompt("Você quer contar até qual número?"));

// for (let numero = numeroInicial; numero <= numeroFinal; numero += 1) {
//   console.log(numero);
// }
