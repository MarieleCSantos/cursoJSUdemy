const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML = `O seu nome é ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.replaceAll(" ", "").length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é "${nome[1]}" <br/ >`;
document.body.innerHTML += `O índice da última letra "a" no seu nome é ${nome.indexOf("a")} <br/ >`;
document.body.innerHTML += `O índice da última letra "a" no seu nome é ${nome.lastIndexOf("a")} <br/ >`;
document.body.innerHTML += `As 3 últimas letras do seu nome são ${nome.slice(-3)} <br/ >`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br/ >`;
document.body.innerHTML += `Seu nome todo em maiúsculas fica ${nome.toUpperCase()} <br/ >`;
document.body.innerHTML += `Seu nome todo em minúsculas fica ${nome.toLowerCase()} <br/ >`;

/* document.body.innerHTML = "um texto <br />";

document.body.innerHTML += "mais um texto"; */
