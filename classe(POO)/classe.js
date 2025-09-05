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
class User{
    static showMessage(){
        console.log('Essa é a mensagem!');
    }
}

User.showMessage();
// -------------------------------------------------------------


class Animal{
    constructor(nomeAnimal, pesoAnimal,){
        this.nomeAnimal = nomeAnimal;
        this.pesoAnimal = pesoAnimal;

        console.log(`${this.nomeAnimal} é o nome do animal e pesa kg ${this.pesoAnimal}`)
    }
}

const animal = new Animal('Duck', 54.3)


class Cachorro extends Animal{
    constructor(nomeAnimal, pesoAnimal, racaCachorro){
        // herdando parametros da classe pai
        super(nomeAnimal, pesoAnimal)

        this.racaCachorro = racaCachorro

        console.log(`${this.racaCachorro} é a raça do cachorro ${this.nomeAnimal}, que pesa kg ${this.pesoAnimal}`)
    }


    acaoCachorro(){
        console.log('Latir')
    }

}


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
