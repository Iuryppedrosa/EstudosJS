let Carro = function (marca, modelo, ano, preco, quantidadeVendas, desconto) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = preco;
  this.quantidadeVendas = quantidadeVendas;
  this.desconto = desconto;
  this.varDescricao = function () {
    console.log(
      `O carro ${this.marca} ${this.modelo} ano ${this.ano} custa R$ ${this.preco} e ja vendeu ${this.quantidadeVendas} unidades`
    );
  };
  this.vendasAnuais = function (desconto) {
    var valorAnual = this.quantidadeVendas * 12;
    var valorDesconto = (desconto / 100) * valorAnual;
    return valorAnual - valorDesconto;
  };
  this.modeloHistorio = function () {
    if (this.ano < 1995) {
      return console.log("Carro antigo");
    }
    return console.log("Carro novo");
  };
};
let carro = new Carro("Chevrolet", "Camaro", 2021, 100000, 10);
carro.varDescricao();
console.log(carro.vendasAnuais(20));
carro.modeloHistorio();
