let umaString = 'Um texto';
console.log(umaString);

//podemos usar aspas dentro de aspas escapando:
let outraString = "Outro \"texto\"";
console.log(outraString);

//podemos dar tab dentro da string:
let maisUmaString = "\tParágrafo";

//podemos inserir uma barra dentro da string:
let novaString = "um \\texto";

//strings sao indexadas, começando em zero:
console.log(umaString[5]);
//outra opção
console.log(umaString.charAt(5));
//se pegarmos um index que não existe retornará undefined:
console.log(umaString[10]);

//Outro método strings:
console.log(umaString.indexOf('texto'));
//podemos também buscar a partir de uma posição:
console.log(umaString.indexOf('texto', 2));

console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.replace('Um', 'Outro'));

console.log(umaString.length);

let string = "O rato roeu a roupa do rei de roma.";
console.log(string.slice(2, 5));

console.log(string.slice(-3));

console.log(string.split(' '));

console.log(string.toUpperCase());
console.log(string.toLowerCase());
