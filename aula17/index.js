function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao("Mariele");
console.log(variavel);


/* function soma(x, y){
    const soma = x + y;
    return soma
}

console.log(soma(2,4)); */

function soma(x = 1, y = 2){
    const soma = x + y;
    return soma
}

console.log(soma(2,4));

const raiz = function(n1){
    return n1 ** 0.5;
};

console.log(raiz(25));

const potencia2 = n2 => n2 ** 2;

console.log(potencia2(4));