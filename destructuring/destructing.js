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
console.log(modelo);

// descructuring com funcoes parte 3
let arr = [10, 20, 30, 40, 50];
function teste([a, b, , c]) {
  console.log(a, b, c);
}

teste(arr);

let obj = {
  a: "jovem",
  b: "rapaz",
  c: "homem",
  d: 40,
  e: 50,
};

function teste2({ a, b, e }) {
  console.log(a, b, e);
}
teste2(obj);

// Descructuring com rest operator
let arr2 = [10, 20, 30, 40, 50];
let [var1, var2, ...resto] = arr2;

console.log(var1, var2, resto);

let obj2 = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let { var4, ...resto2 } = obj2;
console.log(var3, var4, resto2);
