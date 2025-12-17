// função que receba um array com 4 notas e retorne a média final

const notas = [9, 6, 2, 0]

function mediaFinal(arr){

    let somaNumeros = 0
    let media

    for(let nota = 0; nota < arr.length; nota++){
        somaNumeros += arr[nota]
        console.log(somaNumeros)
    }

    media = somaNumeros / arr.length
    return console.log(`A média das notas [${notas}] é de ${media}`)

}

mediaFinal(notas)
