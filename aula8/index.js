/* Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80 de altura e seu IMC é de 25.925.
Luiz Otávio nasceu em 1980. */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const pesoEMKG = 84;
const alturaEmMetros = 1.80;
let imc; // peso / (altura ^2)
let anoNascimento;

imc = peso / (altura*altura);
anoNascimento = 2020 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura
e seu IMC é de ${imc}. \n${nome} nasceu em ${anoNascimento}.`);