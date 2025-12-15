// função para receber um array de números e retornar a soma total
// link de apoio: https://pt.stackoverflow.com/questions/433381/existe-algum-m%C3%A9todo-nativo-do-javascript-que-retorne-a-soma-dos-elementos-de-um

const numeroArray = [2, 4, 2, 2]

function somArray(dado){
    let acumulador = 0;

    for (var num = dado.length - 1; num >= 0; num--) {
        acumulador += dado[num];
    }

    return acumulador;
}

console.log(somArray(numeroArray))
