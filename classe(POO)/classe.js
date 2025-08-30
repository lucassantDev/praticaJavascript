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
