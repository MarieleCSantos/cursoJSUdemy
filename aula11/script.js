alert('Nossa mensagem'); //abre popup com uma mensagem, podemos usar também:
window.alert('outra mensagem');

window.confirm('aceita cookies?'); //abre pop com duas opções de resposta e retorna um boolean "cancelar" (false), "ok" (true)

window.prompt('digite seu nome'); //abre pop com espaço para digitação

//Podemos armazenar o retorno de uma função em uma variável:
const nome = window.prompt('digite seu nome');
alert(nome);
