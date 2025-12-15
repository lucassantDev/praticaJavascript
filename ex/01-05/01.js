// função para número impar ou par

function imparOuPar(numero){
    const numeroRecebido = numero
    if(numeroRecebido % 2 == 0){
        console.log(`${numeroRecebido} é um número par`)
    }
    else{
        console.log(`${numeroRecebido} é um número impar`)
    }
}

imparOuPar(5)
imparOuPar(4)
