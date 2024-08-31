let Atleta = function (
  nome,
  idade,
  altura,
  peso,
  modalidade,
  medalhas,
  recordes
) {
  this.velocidadeInicial = 0;
  var performar = 5;
  this.nome = nome;
  this.idade = idade;
  this.altura = altura;
  this.peso = peso;
  this.modalidade = modalidade;
  this.medalhas = medalhas;
  this.recorde = recordes;

  this.setPerfermance = function (velocidadeInicial) {
    this.velocidadeInicial = velocidadeInicial;
  };
  this.getPerfermance = function () {
    return this.velocidadeInicial;
  };

  this.performar = function () {
    return (this.velocidadeInicial += performar);
  };
  this.varDescricao = function () {
    console.log(
      `O atleta ${this.nome} tem ${this.idade} anos, ${this.altura} de altura e pesa ${this.peso} kg`
    );
  };
  this.medalhasAnuais = function () {
    return this.medalhas * 12;
  };
  this.recordeAnual = function () {
    return this.recorde * 12;
  };
};
let atleta = new Atleta("Usain Bolt", 35, 1.95, 94, "Corrida", 8, 9);
console.log(atleta);
atleta.setPerfermance(10);
console.log(atleta.getPerfermance());
console.log(atleta.performar());
console.log(atleta.performar());
