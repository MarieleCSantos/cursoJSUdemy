//Troque os valores das variáveis atribuindo uma à outra

let varA = 'A'; //deverá receber B
let varB = 'B'; //deverá receber C
let varC = 'C'; //deverá receber A

/* let temp = varC;
varC = varA;
varA = varB;
varB = temp;
 */
//Outra forma mais moderna de resolver:
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);