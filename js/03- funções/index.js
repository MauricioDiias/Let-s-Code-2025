// if (2 > 10) {
//   console.log("Sim 2 é maior que 1");
// }

// let idade = 25;

// if (idade >= 18) {
//   console.log("Maior de idade");
// } else {
//   console.log("Menor de idade");
// }

// for (let numero = 1; numero <= 5; numero = numero + 1) {
//   console.log(numero);
// }

// let total = 0;
// for (let numero = 1; numero <= 5; numero = numero + 1) {
//   total = total + numero;
// }
// console.log(total);

// for (let n = 1; n <= 10; n++) {
//   if (n % 2 === 0) {
//     console.log(`O número ${n} é PAR`);
//   } else {
//     console.log(`O número ${n} é IMPAR`);
//   }
// }

// for (let n = 0; n <= 10; n += 1) {
//   console.log(`2 x ${n} = ${2 * n}`);
// }

// for (let valor = 1; valor <= 10; valor++) {
//   console.log(`TABUADA DO ${valor}`);
//   for (let n = 0; n <= 10; n += 1) {
//     console.log(`${valor} x ${n} = ${valor * n}`);
//   }
// }

// FUNÇÕES

function escreverNome() {
  console.log("Let´s Code");
}

escreverNome();

const printar = (x, y) => {
  console.log(x, y);
};

function somar(n1, n2) {
  n1 = Number(n1);
  n2 = Number(n2);

  console.log(`O Resultado da soma de ${n1} + ${n2} = ${n1 + n2} `);
}

somar("2", "3");

const mult2 = (n) => {
  return n * 2;
};

const mult3 = (n) => {
  return n * 3;
};
console.log(mult2(2));
console.log(mult3(2));

function parOuImpar(n) {
  if (n % 2 === 0) {
    console.log(`O número ${n} é PAR`);
  } else {
    console.log(`O número ${n} é IMPAR`);
  }
}

parOuImpar(2);
parOuImpar(4);
parOuImpar(3);
parOuImpar(9);

function contarAte(numeroInicial, numeroFinal) {
  for (let n = numeroInicial; n <= numeroFinal; n += 1) {
    console.log(n);
  }
}

console.log("---------");
contarAte(1, 20);

console.log("---------------");
contarAte(-8, 15);

console.log("---------------");
contarAte(-2, 2);
