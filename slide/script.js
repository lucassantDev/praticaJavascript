const divAzul = document.getElementById('azul')
const divAmarelo = document.getElementById('amarelo')
const divVerde = document.getElementById('verde')

const leftButton = document.getElementById('botaoEsquerdo');
const rightButton = document.getElementById('botaoDireito');
const middleButton = document.getElementById('retornoBotaoAmarelo')
const lastButton = document.getElementById('ultimoBotao');

divAmarelo.style.display = 'none';
divVerde.style.display = 'none';
leftButton.style.display = 'none';


function slideAzul(){
    divAzul.style.display = 'flex';
    divAmarelo.style.display = 'none';
    leftButton.style.display = 'none';
    lastButton.style.display = 'none';

    rightButton.style.display = 'block';
}

function slideAmarelo(){
    divAzul.style.display = 'none';
    divAmarelo.style.display = 'flex';
    leftButton.style.display = 'block';
    lastButton.style.display = 'block';

    rightButton.style.display = 'none ';
}

function slideVerde(){
    divAmarelo.style.display = 'none';
    divVerde.style.display = 'flex';
    lastButton.style.display = 'none';

    leftButton.style.display = 'none';
    middleButton.style.display = 'block';

}

function retornoBtnAmarelo(){
    divVerde.style.display = 'none';
    divAmarelo.style.display = 'flex';

    leftButton.style.display = 'block';
    lastButton.style.display = 'block';

    middleButton.style.display = 'none';

}
