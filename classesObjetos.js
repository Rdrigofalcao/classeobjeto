class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    
    atacar() {
      let ataque = '';
  
      
      if (this.tipo.toLowerCase() === 'mago') {
        ataque = ' magia';
      } else if (this.tipo.toLowerCase() === 'guerreiro') {
        ataque = 'sua espada';
      } else if (this.tipo.toLowerCase() === 'monge') {
        ataque = ' artes marciais';
      } else if (this.tipo.toLowerCase() === 'ninja') {
        ataque = ' shuriken';
      } else {
        ataque = 'não fez nenhum ataque';
      }
  
      
      console.log(`${this.nome}, o ${this.tipo}, atacou usando ${ataque}`);
    }
  }
  
  
  const heroi1 = new Heroi('Gandalf', 100, 'Mago');
  const heroi2 = new Heroi('Conan', 30, 'Guerreiro');
  const heroi3 = new Heroi('Ryu', 40, 'Monge');
  const heroi4 = new Heroi('Naruto', 20, 'Ninja');
  
 
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar(); 
  heroi4.atacar();