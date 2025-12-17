// nesses próximos 5 exercicios irei trabalhar com conceito de for

// criar uma função que retorne a tabuada de um número

function tabuadaNumero(numero){
    console.log(`---------------- tabuada do número ${numero} ----------------`)

    for(let num = 0; num <= 10; num++){
        console.log(`${num} x ${numero} = ${num * numero}`)
    }
}

tabuadaNumero(7)