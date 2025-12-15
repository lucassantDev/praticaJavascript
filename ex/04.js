// funcao para receber um array com números e retornar o valor maior
// link de apoio: https://pt.stackoverflow.com/questions/285005/como-pegar-o-maior-valor-em-um-array-com-javascript

const numeros = [80, 999, 1000, 1]

function maiorNumeroArray(arrayNumeros){

    // utilizei o método math.max com spread para puxar tudo do parâmetro arrayNumeros
    console.log(Math.max(...arrayNumeros))

    // a maneira ainda mais eficaz seria utilizando o return em vesz do console
    //algo como: return Math.max(...arrayNumeros)

    // Aqui tinha utilizado a lógica do for, mas talvez o código ficasse um pouco grande e confusso ao passar das linhas pois não estava conseguindo pensar além desse ponto

        // for(let qtd  = 0; qtd < arrayNumeros.length; qtd++ ){
        //     let numeroDaVez = arrayNumeros[qtd]
        //     console.log(numeroDaVez)
        // }
}

maiorNumeroArray(numeros)