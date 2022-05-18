//Tipos primitivos de dados
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> nao aponta para local nenhum na memória, é utilizado pelo JS
const sobrenomeAluno = null; //nulo -> nao aponta para local nenhum na memória, é utilizado pelo desenvolvedor
const aprovado = false; //boolean = true or false (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno);

/*
Operadores Aritméticos:
 + adição e concatenação
 - subtração
 * multiplicação
 / divisão 
 ** potenciaçao
 % resto
 */


console.log(num1 * num2);

/* 
Precedência:
()
**
* / %
+ - 
*/

/*
Operador de incremento:
contador++; -> incremento, soma 1 após executar uma ação
++contador; -> incremento, soma 1 antes de  executar uma ação
contador--; -> decremento, subtrai 1 após executar uma ação
--contador; -> decremento, subtrai 1 antes de  executar uma ação
*/

/*
Operadores de atribuição 
contador += valorDeIncremento; -> para ir incrementando com valores específicos
contador *= 2;
contador **= 10;
*/

/*Converter string em number:
num1 = parseInt ('5'); -> converte string em int
num2 = parseFloat (5.2); -> converte string em float
num = Number('5'); -> converte string em number