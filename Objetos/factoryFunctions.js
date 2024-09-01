// Abaixo temos uma funcao construtora e uma funcao fábrica
let Bicicleta1 = {
  marca: "Giant",
  rodado: 29,
  color: "Verde",
  pedalar: function () {
    console.log("Pedaleando");
  },
};

let Bicicleta2 = {
  marca: "Specialized",
  rodado: 27.5,
  color: "Roxa",
  pedalar: function () {
    console.log("Pedalando mais");
  },
};
// Construindo uma função fábrica
function criarBicicleta(marca, rodado, color) {
  return {
    marca,
    rodado,
    color,
    pedalar: function () {
      console.log("Pedalando");
    },
  };
}

let Bicicelta3 = criarBicicleta("Caloi", 26, "Azul");
let Bicicleta4 = criarBicicleta("Trek", 29, "Preta");

console.log(Bicicleta1);
console.log(Bicicleta2);
console.log(Bicicelta3);
console.log(Bicicleta4);

Bicicleta4.pedalar();
