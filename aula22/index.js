//Operadores lógicos

//&&
const expressaoAnd = console.log(true && true && false);

//||
const expressaoOr = console.log(true || false);


const usuario = 'Luiz';
const senha = 123456;

const vaiLogar1 = usuario === 'Luiz' && senha === 12345;
console.log(vaiLogar1);


const vaiLogar2 = usuario === 'Luiz' || senha === 12345;
console.log(vaiLogar2);

console.log(!true);