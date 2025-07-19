ADDcomentarios = []

const divComentar = document.getElementById('adicionar-comentario');

// funcao para limpar o campo de comentario!
function limparTexto(texto){
   let campo = document.querySelector(texto);
   if (campo){
        return campo.value = '';
   }
}


const botaoClicado = document.getElementById('botao-clicado');
botaoClicado.addEventListener('click', () => {
    // div para adiconar comentario
    divComentar.style.display = 'flex';

    // x para remover div de comentario
    let xParaSair = document.getElementById('sair');
    xParaSair.style.cursor = 'pointer'
    xParaSair.addEventListener('click', () => {
        divComentar.style.display = 'none';

    })

})

const enviarComentario = document.getElementById('finalizar-comentario');

enviarComentario.addEventListener('click', () => {
    // pegando a mensagem do textarea
    let comentario = document.getElementById('comentario').value;
    alert(comentario)
    
    // adicionando o display none para a div desaparecer
    divComentar.style.display = 'none';

    // adicionando o comentario em uma lista
    ADDcomentarios.push(comentario);

    // chamando a função para limpar o campo
    limparTexto('#comentario');
    
})



