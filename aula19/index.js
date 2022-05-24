let a = 1;
let b = a;

console.log(a, b);
a = 3;
console.log(a, b);

let c = [1, 2, 3];
let d = c;
let e = [...c];

console.log(c, d, e);
c.push(4);
console.log(c, d, e);

//---------------------
const f = {
    nome: "Luiz",
    sobrenome: "Otavio"
};
const g = {...f};

f.nome = "Joao";

console.log(f, g);