const alunos = ['João', 'Maria', 'Jose'];

console.log(alunos);
console.log(alunos[2]);

alunos[0] = 'Mariele';
console.log(alunos);
alunos[3] = 'Luiz';
console.log(alunos);

console.log(alunos.length);

alunos.push('George');
console.log(alunos);
console.log(alunos.slice (0, 3));
console.log(alunos.slice (0, -1));

alunos.unshift('Luiza');
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

alunos.shift();
console.log(alunos);

delete alunos[1];
console.log(alunos[1]);


console.log(alunos[50]);

console.log(alunos instanceof Array);