//le o peso e a altura
//calcula o IMC
//informa o imc na tela e uma mensagem com fundo verde
//caso peso vazio ou invalido uma mensagem com fundo vermelho
//caso altura vazia ou invalida uma mensagem com fundo vermelho


function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    let imc = 0;

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('#input-1').value);
        const altura = Number(form.querySelector('#input-2').value);

        imc = (peso / (altura ** 2));

        if (Number.isNaN(peso) || peso === 0) {
            resultado.innerHTML = `<p>Peso inválido!</p>`
        } else if (Number.isNaN(altura) || altura === 0) {
            resultado.innerHTML = `<p>Altura inválida!</p>`
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
            } else {
                resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3) </p>`;
        }
        
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();