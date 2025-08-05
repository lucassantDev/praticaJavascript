// Ler 3 números e exibir o maior

function numeroMaior(num1, num2, num3){
    numeros = [num1, num2, num3]
    var maiorValor = Math.max(...numeros) // método que lê o número maior dentro de um array
    console.log(maiorValor);
}

numeroMaior(122, 4, 6);
