// Objeto literl
let a1 = {
  cor: "Azul",
  modelo: "Iphone",
  tamanho: "Pequeno",
  ligar: function () {
    console.log("Ligando");
  },
};

// Funcao construtora
let a2 = function (cor, modelo, tamanho) {
  this.cor = cor;
  this.modelo = modelo;
  this.tamanho = tamanho;
  this.ligar = function () {
    console.log("Ligando");
  };
};

let Modelo2 = new a2("Preto", "Samsung", "Grande");

class a3 {
  constructor(cor, modelo, tamanho) {
    this.cor = cor;
    this.modelo = modelo;
    this.tamanho = tamanho;
  }
  ligar() {
    console.log("Ligando");
  }
}
let Modelo3 = new a3("Branco", "Motorola", "Médio");

console.log(a1);
console.log(Modelo2);
console.log(Modelo3);
