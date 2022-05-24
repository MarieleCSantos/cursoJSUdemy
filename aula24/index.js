//Entre 0 e 11h fale bom dia
//Entre 12h e 17h fale boa tarde
//Entre 18h e 23h fale boa noite

const hora = 13;

if (hora >= 0 && hora <= 11){
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('boa noite')
} else {
    console.log('ola');
}

const tenhoGrana = NaN;

if (tenhoGrana){
    console.log('Vou sair de casa');
}