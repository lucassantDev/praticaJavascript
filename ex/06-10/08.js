// criar função para receber uma palavra e retornar ela invertida utilizando for(esse foi complicado não pensar em métodos)

function palavraInvertida(palavra){

    dadoInvertido = palavra.split('').reverse().join('')
    return console.log(`${dadoInvertido}`)
}

palavraInvertida('Lucas')