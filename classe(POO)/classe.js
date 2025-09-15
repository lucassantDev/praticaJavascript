class MensagemInicial{
    constructor(){
        console.log('Inicio dos estudos de classe em js!')
    }
}

const mensagem = new MensagemInicial()

// class animal passando parâmetros no constructor e exibindo um console.log com as informações passadas
class Animal{
    constructor(nomeAnimal, pesoAnimal, racaAnimal){
        this.nomeAnimal = nomeAnimal;
        this.pesoAnimal = pesoAnimal;
        this.racaAnimal = racaAnimal;

    console.log(`O nome do animal é ${this.nomeAnimal}, pesa ${this.pesoAnimal} KG e é da raça ${this.racaAnimal}`)
    }

    // método criado para ser sobreescrito em classe herdadas
    acaoAnimal(){
        console.log('Ainda vazio!')
    }
}

// instanciando a classe

const AnimalName = new Animal('Blanco', 70.5, 'Buldogue');
const AnimalName2 = new Animal('Sansão', 49.5, 'Chihuahua');
// ---------------------------------------------------------------------


// herdando classe Animal e sobreescrevendo métodos

class Cachorro extends Animal{

    // após sobreescrever a mensagem, a exibição no console muda de 'Ainda vazio' para 'Latir'
    acaoAnimal(){
        console.log('Latir')
    }
}

const cachorro1 = new Cachorro();
cachorro1.acaoAnimal();

// -------------------------------------------------------------



// método estático -> utilizado sem precisar instaciar a classe
class DataHora{
    static showMessage(){
        const hora = Date()
        console.log(hora);
    }
}

DataHora.showMessage();
// -------------------------------------------------------------


// trabalhando com tratamento de erro juntamente com classe

class MyCustomError{
    constructor(message){
        this.message = 'CLASSE DE ERRO CUSTOMIZADA:' + message;
    }
}


try{
    throw new MyCustomError('Erro personalizado!')
} catch(error){
    if(error instanceof MyCustomError){
        console.log(error.message)
    }else{
        console.log('Não foi possível executar')
    }

}

// classe lâmpada -----------------------------
class Lampada{
    constructor(marca, watts){
        this.marca = marca;
        this.watts = watts;

        // console.log(`A lâmpada é da marca ${this.marca} possuindo ${this.watts} watts`)
    }
    
}

const lampada01 = new Lampada('Avant', 12);


class acaoLampada extends Lampada{

    lampadaLigada(){
        console.log('A lâmpada está ligada');
    }
}

const lampada02 = new acaoLampada;
lampada02.lampadaLigada();

// ---------------------------------

class Caneta{
    constructor(cor, marca, ponta){
        this.cor = cor;
        this.marca = marca;
        this.ponta = ponta;
    }
}

const caneta01 = new Caneta('Azul', 'BIC', 1,6)

class acaoCaneta extends Caneta{
    
    escrevendo(){
        console.log('Escrevendo texto')
    }
}

const caneta02 = new acaoCaneta(); 
caneta02.escrevendo();

const cachorro = new Cachorro('Duck', 52.3, 'Pastor Alemão')
cachorro.acaoCachorro();


class Aluno{
    constructor(nomeAluno, idadeAluno, cursoAluno, turnoAluno){
        this.nomeAluno = nomeAluno
        this.idadeAluno = idadeAluno
        this.cursoAluno = cursoAluno
        this.turnoAluno = turnoAluno

        // console.log(`${nomeAluno} teve sua matrícula efetuada no curso de ${cursoAluno}`)
    }

}

const aluno = new Aluno('Lucas', 19, 'Analise de Desenvolvimento de Sistemas', 'Noite') 

class AcaoAluno extends Aluno{

    constructor(nomeAluno, idadeAluno, cursoAluno, turnoAluno){
        super(nomeAluno, idadeAluno, cursoAluno, turnoAluno)
    }
    
    mudancaDeTurno(){
        console.log(`${this.nomeAluno} mudou o turno do curso. Da ${this.turnoAluno}, o turno foi mudado para a manhã`)
    }
}

const acaoAluno = new AcaoAluno('Ferreira', 19, 'Analise de Desenvolvimento de Sistemas', 'Noite')
acaoAluno.mudancaDeTurno()
