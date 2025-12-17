// função que recebe um número X e retone a quantos e quais são os números pares dentro desse número X

function paresNoNumero(numero){
    let contadorPares = 0
    let arrayPares = []

    // for inicia do 1, optei por não colocar o 0 no loop
    for(let numeroPercorrido = 1; numeroPercorrido <= numero; numeroPercorrido++){
        // console.log(numeroPercorrido)
        if(numeroPercorrido % 2 == 0){
            arrayPares.push(numeroPercorrido)

            contadorPares++
        }

    }
        
    return console.log(`O númemro ${numero} tem ${contadorPares} valores pares! São eles: ${arrayPares}`)

}

paresNoNumero(11)