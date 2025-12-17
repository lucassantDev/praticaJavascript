// função para percorrer numero de 1 a 100 e dizer se ele é Fizz, Buzz ou FizzBuzz
// se o número for divisivo por 3 e 5 = fizzbuzz | se o número for apenas divisivo por 3 = fizz | se o numero for apenas divisivo por 5 = buzz

const numeros = 100

function fizzBuzzLoop(num){

    let arrayFizzBuzz = []

    for(let numeroIndividual = 1; numeroIndividual <= num; numeroIndividual++){
        // console.log(numeroIndividual)
        if(numeroIndividual % 3 == 0 && numeroIndividual % 5 == 0 ){
            arrayFizzBuzz.push('FizzBuzz')
        }
        else if(numeroIndividual % 3 == 0){
            arrayFizzBuzz.push('Fizz')
        }
        else if(numeroIndividual % 5 == 0){
            arrayFizzBuzz.push('Buzz')
        }
        else{
            arrayFizzBuzz.push(numeroIndividual)
        }
        
        
    }

    console.log(arrayFizzBuzz)

    
}

fizzBuzzLoop(numeros)