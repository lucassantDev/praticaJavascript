// função que receba uma senha e valide(precisa ter 8 caracteres e 1 tem que ser número)

function senhaValida(senha){
    let contadorNumero = 0 
    contadorLetra = 0

    if(senha.length < 8 || senha.length > 8){
        console.log('APENAS 8 CARACTERES!!')
    }
        else
    {
        for(let caracter = 0; caracter < senha.length; caracter++){
            let caracterIndividual = senha[caracter]
            if(!isNaN(caracterIndividual)){
                contadorNumero++
            }else{
                contadorLetra++
            }

            console.log(caracterIndividual, typeof(caracterIndividual))
            console.log(`qtd de letra: ${contadorLetra} | qtd de números: ${contadorNumero}`)

        }
            
    }
}

senhaValida('nomeluc4')

// esse não está finalizado, mas consigo ver uma evolução nesses ultimos meses de estudo!  