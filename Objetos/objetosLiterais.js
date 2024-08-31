class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  varDescricao() {
    console.log(`O produto ${this.nome} custa R$ ${this.preco}`);
  }
}

let produto = new Produto("Notebook", 2199.49);
produto.varDescricao();

// The same code can be written using object literals:
let produtoLiteral = {
  nome: "Geladeira",
  preco: 5000,
  quantidadeVendas: 20,
  varDescricao: function () {
    console.log(
      `O produto ${this.nome} custa R$ ${this.preco} e ja vendo ${this.quantidadeVendas} unidades`
    );
  },
  vendasAnuais(desconto) {
    var valorAnual = this.quantidadeVendas * 12;
    var valorDesconto = (desconto / 100) * valorAnual;
    return valorAnual - valorDesconto;
  },
};
produtoLiteral.varDescricao();
console.log(produtoLiteral.vendasAnuais(20));
console.log(produtoLiteral);
console.log(produtoLiteral.nome);

produtoLiteral.condicao = "novo";
produtoLiteral.estoque = () => {
  return produtoLiteral.quantidadeVendas > 0 ? "Em estoque" : "Sem estoque";
};
console.log(produtoLiteral);
console.log(produtoLiteral.estoque());
