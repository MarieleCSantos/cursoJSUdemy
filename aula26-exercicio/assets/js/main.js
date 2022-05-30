//le o peso e a altura
//calcula o IMC
//informa o imc na tela e uma mensagem com fundo verde
//caso peso vazio ou invalido uma mensagem com fundo vermelho
//caso altura vazia ou invalida uma mensagem com fundo vermelho

/* function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    let imc = 0;

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('#input-1').value);
        const altura = Number(form.querySelector('#input-2').value);

        imc = (peso / (Math.pow(altura, 2)));

        if (Number.isNaN(peso) || peso === 0) {
            resultado.innerHTML = `<p>Peso inválido!</p>`
            resultado.style.background="red";
        } else if (Number.isNaN(altura) || altura === 0) {
            resultado.innerHTML = `<p>Altura inválida!</p>`
            resultado.style.background="red";
        } else {
            if (imc < 18.5) {
                resultado.innerHTML = `<p>Seu IMC é ${imc} (abaixo do peso) </p>`;
            } else if (imc >= 18.5 && imc < 25) {
                resultado.innerHTML = `<p>Seu IMC é ${imc} (peso normal) </p>`;
            } else if (imc >= 25 && imc < 30) {
                resultado.innerHTML = `<p>Seu IMC é ${imc} (sobrepeso) </p>`;
            } else if (imc >= 30 && imc < 35){
                resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1) </p>`;
            } else if (imc >= 35 && imc < 40){
                resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2) </p>`;
            } else if (imc >= 40){
                resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3) </p>`;
            } else {
                resultado.innerHTML = `<p>Erro</p>`;
            }
            resultado.style.background="cyan";

        }
        
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo(); */



const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#input-1');
    const inputAltura = event.target.querySelector('#input-2');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    } 
    
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc); 

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;
    setResultado(msg, true);

});

function getNivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc>=40) return nivel[5];
    if (imc>=35) return nivel[4];
    if (imc>=30) return nivel[3];
    if (imc>=25) return nivel[2];  
    if (imc>=18.5) return nivel[1];
    if (imc<18.5) return nivel[0];    
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (mensagem, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

/* resultado.appendChild(p); //com esta linha é possível criar um novo elemento filho dentro da div resultado */