// hepa > HERANCA, ENCAPSULAMENTO, POLIMORFISMO, ABSTRACAO
class Calculadora {
  constructor() {
    this.a = 10;
    this.b = 20;
    this.operator = "mult";
  }

  calcular() {
    if (this.operator === "mult") {
      console.log(this.a * this.b);
    }
  }
}
calculadora = new Calculadora(); // instanciando a classe
calculadora.calcular();
