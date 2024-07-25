let listaDeConta = [];

class ContaBancaria {
  constructor(agencia, numeroConta, saldo, limite) {
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.limite = limite;
  }
  sacar(valor) {
    if (valor > this.saldo + this.limite) {
      alert("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  consultarSaldo() {
    return this.saldo;
  }
}

function atualizarSaldo(index) {
  document.getElementById("saldo").innerHTML = listaDeConta[index]
    .consultarSaldo()
    .toFixed(2);
}

function realizarSaque() {
  let valor = parseFloat(document.getElementById("saque").value);
  let contaSelecionada = document.getElementById("contasCriadas").value;
  if (contaSelecionada) {
    listaDeConta[contaSelecionada].sacar(valor);
    atualizarSaldo(contaSelecionada);
  } else {
    alert("Selecione uma conta");
  }
}

function realizarDeposito() {
  let valor = parseFloat(document.getElementById("deposito").value);
  let contaSelecionada = document.getElementById("contasCriadas").value;
  if (contaSelecionada) {
    listaDeConta[contaSelecionada].depositar(valor);
    atualizarSaldo(contaSelecionada);
  } else {
    alert("Selecione uma conta");
  }
}

function definirConta() {
  let numeroConta = document.getElementById("numeroConta").value;
  let agencia = document.getElementById("agenciaConta").value;
  let saldoInicial = 0;
  let limite = 1000;

  let novaConta = new ContaBancaria(agencia, numeroConta, saldoInicial, limite);

  listaDeConta.push(novaConta);
  atualizarOpcoesConta(novaConta, listaDeConta.length - 1);
  console.log(listaDeConta);
}

function atualizarOpcoesConta(conta, index) {
  let select = document.getElementById("contasCriadas");
  let option = document.createElement("option");
  option.value = index;
  option.text = `Conta ${conta.numeroConta}`;
  select.add(option);
}

function atualizarSaldoContaSelecionada() {
  let contaSelecionada = document.getElementById("contasCriadas").value;
  if (contaSelecionada !== "") {
    document.getElementById("saldo").innerHTML = listaDeConta[contaSelecionada]
      .consultarSaldo()
      .toFixed(2);
  }
}
