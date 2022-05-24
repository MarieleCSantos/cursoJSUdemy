/* Regras para constantes:
Não podemos criar constantes com palavras reservadas
Constantes devem ter nomes significativos
Nao pode começar o nome de uma constante com número (mas pode conter números)
Nao podem conter espaços os traços
camelCase
case-sensitive
Não podemos modificar o valor de uma constante, deve ser ao mesmo tempo declarada e definida
Nao usar var, usar const (var é mais antigo) */

const nome = 'Joao';

const primeiroNumero = 5;
const segundoNumero = 10;

//Podemos atribuir valores de uma variável a outras:
const conta = primeiroNumero * segundoNumero; 
console.log(conta);

console.log(typeof(primeiroNumero));