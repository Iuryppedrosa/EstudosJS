// forma padrão de acessar os valores de um array
let frutas = ["banana", "maça", "uva"];
let a = frutas[0];
console.log(a);

// forma de acessar os valores de um array com destructuring
let [valor1, valor2, valor3, valor4 = "Chocolate"] = frutas;
console.log(valor1, valor2, valor3, valor4);

let arrayCoisas = [
  ["Pera", "Abacate", "Jaboticaba"],
  ["carro", "moto", "bicicleta"],
];
let [fruta1, fruta2, fruta3] = arrayCoisas[0];
console.log(fruta1, fruta2, fruta3);

let [veiculo1, veiculo2, veiculo3] = arrayCoisas[1];
console.log(veiculo1, veiculo2, veiculo3);

let [, [, , xuxuDeXereca]] = arrayCoisas;
console.log(xuxuDeXereca);

// destructuring com objetos
// composição de objetos é um ou tem UM.
let produto = {
  descricao: "Notebook",
  preco: 2000,
  detalhes: {
    fabricante: "Dell",
    modelo: "Inspiron",
  },
};
let { descricao, preco } = produto;
console.log(descricao, preco);

let { descricao: d, preco: p } = produto;
console.log(d, p);

let {
  detalhes: { modelo },
} = produto;
console.log(modelo, fabricante);
