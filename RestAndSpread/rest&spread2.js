function soma(...params) {
  let resultado = 0;
  console.log(params);
  //   for (let i = 0; i < params.length; i++) {
  //     resultado += params[i];
  //   }
  //   return resultado;
  params.forEach((v) => {
    resultado += v;
  });
  return resultado;
}

console.log(soma(3, 8, 5, 7));

function multiplicacao(multiplicador, ...params) {
  console.log(multiplicador);
  console.log(params);
  return params.map((v) => multiplicador * v);
}

console.log(multiplicacao(2, 3, 8, 5, 7));
