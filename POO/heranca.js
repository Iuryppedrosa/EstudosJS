class Animal {
  constructor(_cor, _tamanho, _idade, _nome) {
    this._cor = _cor;
    this._tamanho = _tamanho;
    this._idade = _idade;
    this._nome = _nome;
  }

  setCor(cor) {
    this._cor = cor;
  }
  getCor() {
    return this._cor;
  }
  setTamanho(tamanho) {
    this._tamanho = tamanho;
  }
  getTamanho() {
    return this._tamanho;
  }
  setIdade(idade) {
    this._idade = idade;
  }
  getIdade() {
    return this._idade;
  }
  setNome(nome) {
    this._nome = nome;
  }
  getNome() {
    return this._nome;
  }
  dormir() {
    console.log("zzzZZZzzzZZZzzzZZZzzz");
  }
  comer() {
    console.log("Nhac Nhac");
  }
}

class Cachorro extends Animal {
  constructor(_cor, _tamanho, _idade, _nome, _raca) {
    super(_cor, _tamanho, _idade, _nome);
    this._raca = _raca;
  }
  latir() {
    console.log("Au Au");
  }
}

class Passaro extends Animal {
  constructor(_cor, _tamanho, _idade, _nome, _especie) {
    super(_cor, _tamanho, _idade, _nome);
    this._especie = _especie;
  }
  voar() {
    console.log("Voando...");
  }
}

class Papagaio extends Passaro {
  constructor(_cor, _tamanho, _idade, _nome, _especie) {
    super(_cor, _tamanho, _idade, _nome, _especie);
  }
  falar() {
    console.log("Falando...");
  }
}

let cachorro = new Cachorro(null, null, null, null, "Vira-lata");
cachorro.setCor("Branco com preto");
cachorro.setTamanho("Pequeno");
cachorro.setIdade(14);
cachorro.setNome("Bolt");

console.log("Cor: " + cachorro.getCor());
console.log("Tamanho: " + cachorro.getTamanho());
console.log("Idade: " + cachorro.getIdade());
console.log("Nome: " + cachorro.getNome());
console.log("Raça: " + cachorro._raca);
cachorro.comer();
cachorro.latir();
cachorro.dormir();

let passaro = new Passaro(null, null, null, null, "Passaro");
passaro.setCor("Azul");
passaro.setTamanho("Pequeno");
passaro.setIdade(3);
passaro.setNome("Loro");

console.log("Especie: " + passaro._especie);
console.log("Cor: " + passaro.getCor());
console.log("Tamanho: " + passaro.getTamanho());
console.log("Idade: " + passaro.getIdade());
console.log("Nome: " + passaro.getNome());
passaro.comer();
passaro.voar();
passaro.dormir();

let papagaio = new Papagaio(null, null, null, null, "Papagaio");
papagaio.setCor("Verde");
papagaio.setTamanho("Pequeno");
papagaio.setIdade(5);
papagaio.setNome("Loro");

console.log("Especie: " + papagaio._especie);
console.log("Cor: " + papagaio.getCor());
console.log("Tamanho: " + papagaio.getTamanho());
console.log("Idade: " + papagaio.getIdade());
console.log("Nome: " + papagaio.getNome());
papagaio.comer();
papagaio.voar();
papagaio.falar();
papagaio.dormir();
