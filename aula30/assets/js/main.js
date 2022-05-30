/* exercicio exibir no navegador a data atual no formato:
segunda-feira, 7 de outubro de 2019
22:52 
- usar switch e date*/

/* MINHA SOLUÇÃO


const data = new Date();

 const diaSemanaTexto = data.toLocaleString("pt-BR", { weekday: "long"});
const mesTexto = data.toLocaleString("pt-BR", { month: "long"});//vai formar o maio

const hora = zeroAEsquerda(data.getHours());//vai formar o 20h
const minutos = zeroAEsquerda(data.getMinutes());//vai formar os minutos

const mensagem = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${hora}:${minutos}`;

function criaMensagem (mensagem){
    const titulo = document.querySelector('.container h1');
    titulo.innerHTML = mensagem;
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

criaMensagem(mensagem); */


/* SOLUÇAO PROFESSOR */

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });