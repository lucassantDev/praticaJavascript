const botaoClicado = document.getElementById('botao-clicado');

botaoClicado.addEventListener('click', () => {
    alert('Funcionando');

    // div para adiconar comentario
    let divComentar = document.getElementById('adicionar-comentario');
    divComentar.style.display = 'flex';

    // x para remover div de comentario
    let xParaSair = document.getElementById('sair');
    xParaSair.style.cursor = 'pointer'
    xParaSair.addEventListener('click', () => {
        divComentar.style.display = 'none';

    })

})



