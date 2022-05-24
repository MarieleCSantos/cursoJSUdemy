/* const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25
};

console.log(pessoa1.nome); */

//---------------------------
/* 
function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 30);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);

console.log(pessoa1.nome, pessoa2.idade); */

//---------------------------

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`)
    },

    falaIdade(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.falaIdade();
pessoa1.incrementaIdade();
pessoa1.falaIdade();