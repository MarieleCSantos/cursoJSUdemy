/* const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + tresHoras + umDia); */

//const data = new Date(2019, 3, 20, 15, 14, 27, 500);

/* const data = new Date('2019-04-20 20:20:59');

console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); //mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0 é domingo, 6 é sábado

console.log(Date.now()); */

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);