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

// Baseado nessa aula faça 10 desafios resolvidos sobre o contéudo passado
// faça um enuciado para esse conjunto de desafios
// Desafio: Crie um programa que armazene informações pessoais e faça operações com elas.

//Lista de tarefas: tipos de dados

// 1. Crie uma variável chamada "nome" e atribua seu nome a ela. Depois, imprima o valor da variável no console.
let nome = "Mauricio";
console.log(nome);
// 2. Crie uma variável chamada "idade" e atribua sua idade a ela. Depois, imprima o valor da variável no console.
let idade = 30;
console.log(idade);
// 3. Crie uma variável chamada "altura" e atribua sua altura a ela. Depois, imprima o valor da variável no console.
let altura = 1.75;
console.log(altura);
// 4. Crie uma variável chamada "peso" e atribua seu peso a ela. Depois, imprima o valor da variável no console.
let peso = 70;
console.log(peso);
// 5. Crie uma variável chamada "ehEstudante" e atribua um valor booleano a ela (true ou false). Depois, imprima o valor da variável no console.
let ehEstudante = true;
console.log(ehEstudante);
// 6. Crie uma variável chamada "nota" e atribua uma nota a ela. Depois, imprima o valor da variável no console.
let nota = 8.5;
console.log(nota);
// 7. Crie uma variável chamada "cidade" e atribua o nome da sua cidade a ela. Depois, imprima o valor da variável no console.
let cidade = "São Paulo";
console.log(cidade);
// 8. Crie uma variável chamada "estado" e atribua o nome do seu estado a ela. Depois, imprima o valor da variável no console.
let estado = "São Paulo";
console.log(estado);
// 9. Crie uma variável chamada "pais" e atribua o nome do seu país a ela. Depois, imprima o valor da variável no console.
let pais = "Brasil";
console.log(pais);
// 10. Crie uma variável chamada "ehMaiorDeIdade" e atribua um valor booleano a ela (true ou false) com base na sua idade. Depois, imprima o valor da variável no console.
let ehMaiorDeIdade = idade >= 18;
console.log(ehMaiorDeIdade);
// 11. Crie uma variável chamada "temperatura" e atribua a temperatura atual a ela. Depois, imprima o valor da variável no console.
let temperatura = 25;
console.log(temperatura);
// 12. Crie uma variável chamada "ehVerão" e atribua um valor booleano a ela (true ou false) com base na temperatura atual. Depois, imprima o valor da variável no console.
let ehVerao = temperatura >= 30;
console.log(ehVerao);
// 13. Crie uma variável chamada "ehChuvoso" e atribua um valor booleano a ela (true ou false) com base na previsão do tempo. Depois, imprima o valor da variável no console.
let ehChuvoso = false;
console.log(ehChuvoso);
// faça desafios usando operadores aritméticos, comparação e lógicos
// 14. Crie duas variáveis chamadas "a" e "b" e atribua valores numéricos a elas. Depois, imprima a soma, subtração, multiplicação e divisão dessas variáveis no console.
let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
// 15. Crie uma variável chamada "resultado" e atribua a soma de "a" e "b" a ela. Depois, imprima o valor da variável no console.
let resultado = a + b;
console.log("Resultado:", resultado);
// faça desafio com operadores lógicos
// 16. Crie duas variáveis chamadas "x2" e "y2" e atribua valores booleanos a elas. Depois, imprima o resultado da operação lógica "x2 && y2" no console.
let x2 = true;
let y2 = false;
console.log("Resultado:", x2 && y2);
// 17. Crie duas variáveis chamadas "p" e "q" e atribua valores booleanos a elas. Depois, imprima o resultado da operação lógica "p || q" no console.
let p = true;
let q = false;
console.log("Resultado:", p || q);
// 18. Crie uma variável chamada "ehEstudanteMaiorDeIdade" e atribua um valor booleano a ela (true ou false) com base na sua idade e se você é estudante. Depois, imprima o valor da variável no console.
let ehEstudanteMaiorDeIdade = ehEstudante && ehMaiorDeIdade;
console.log("Resultado:", ehEstudanteMaiorDeIdade);
// 19. Crie uma variável chamada "ehVerãoOuChuvoso" e atribua um valor booleano a ela (true ou false) com base na temperatura atual e se está chuvoso. Depois, imprima o valor da variável no console.
let ehVeraoOuChuvoso = ehVerao || ehChuvoso;
console.log("Resultado:", ehVeraoOuChuvoso);
// 20. Crie uma variável chamada "ehMaiorDeIdadeEEstudante" e atribua um valor booleano a ela (true ou false) com base na sua idade e se você é estudante. Depois, imprima o valor da variável no console.
let ehMaiorDeIdadeEEstudante = ehMaiorDeIdade && ehEstudante;
console.log("Resultado:", ehMaiorDeIdadeEEstudante);
