// funcção para receber uma palavra e uma letra, informando quantas vezes a letra aparece na palavra


function letraContada(palavra, letra){
    let contadorLetra = 0

    // percorre a palavra toda para poder conferir se existe a letra
    for (let p = 0; p < palavra.length; p++) {
        const letraPalavra = palavra[p];
        if(letra === letraRecebida){

            // aqui será contado quantas vezes a letra aparece
            contadorLetra++;
        }
        console.log(letraPalavra)
    }

    console.log(`${palavraRecebida}, ${contadorLetra}`)

}

letraContada('Lucaas', 'a')

//código está +-, precisa apenas de boas práticas para ficar melhor