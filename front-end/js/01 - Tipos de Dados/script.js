// TIPOS DE DADOS
// STRING

console.log("hello World!");
console.log("MAURICIO");
console.log(`ALVARO`);
console.log("DIAS");

// NUMBER
console.log(2);
console.log(10);

// BOOlEAN  (verdadeiro,falso) = (true,false)
console.log(true);
console.log(false);

// VARIÁVEIS

// DECLARAR, CRIAR UMA VARIÁVEL

var x = "Hello";
let y = 56;
const z = true;

x = "World";
console.log(x);

const PI = 3.16;

console.log(typeof PI);
console.log(typeof z);

let k;

console.log(k);

let h = null;

console.log(h);

// OPERADORES ARITMÉTICOS

// Soma +

console.log(2 + 3);
console.log(7 + 5);
console.log(9 + 0);

let numeroA = 1;
let numeroB = "2";
console.log(numeroA + numeroB);

console.log("1" + "1");
let primeiroNome = "Mauricio";
let ultimoNome = " Dias";

console.log(primeiroNome + " " + "Alvaro de " + " " + ultimoNome);
console.log(`${primeiroNome} Alvaro de ${ultimoNome}`);

// menos -
let one = 1;
let two = 2;

console.log(5 - 1);
console.log(two - one);

// multiplicação *
console.log(5 * 1);

// Divisão /
console.log(8 / 1);

// Potênciação **
console.log(3 ** 2);

// Resto da divisão
console.log(13 % 5);

console.log("-------- Atribuição ---------");
// Atribuição  = += -= *= /=

let numero = 4;
console.log(numero);

numero = 5;
console.log(numero);

numero = numero + 2;
console.log(numero);

numero += 3;

console.log(numero);

// COMPARAÇÃO
//  = ATRIBUIÇÃO
// == IGUAL (valor)
console.log("2" == 2);
// === ESTRITAMENTE IGUAL  (valor e tipo)
console.log("2" === 2);

// != DIFERENTE (valor)
console.log("2" != 2);

// !==  ESTRITAMENTE DIFERENTE (valor e tipo)
console.log("2" !== 2);

console.log("----Resultado----");
console.log(4 !== 4);

// > Maior que

console.log("--Maior--");
console.log(5 > 4);

// < Menor que
console.log("--Menor--");
console.log(5 < 4);

// >= Maior ou Igual
console.log("--Maior ou Igual--");
console.log(5 >= 4);
console.log(4 >= 4);

// <= Menor ou Igual

console.log("--Menor ou Igual--");
console.log(5 <= 4);
console.log(4 <= 4);

// OPERADORES LÓGICOS

console.log("---Lógicos---");
// E  &&
console.log("------ E -----");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("------ OU -----");
// OU ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// NEGAÇÃO !

console.log("---NÃO---");

console.log(!true);
console.log(!false);
