let tituloArtigo = "Como utilizar Rest e Spread Operators no JavaScript";
console.log(tituloArtigo);
console.log(...tituloArtigo);

console.log([...tituloArtigo]);
let letras = [...tituloArtigo];
console.log(letras.length);
console.log(letras[30]);

let listaCursos1 = ["NodeJS", "ReactJS", "React Native"];
let listaCursos2 = ["VueJS", "Angular", "Svelte"];
let listaCompleta = ["c#", ...listaCursos1, ...listaCursos2, "Python"];
console.log(listaCompleta);

// no contexto de objetos
let curso = {
  nome: "JavaScript",
  categoria: "Web",
};
let outroCurso = {
  ...curso,
  descricao: "Curso de JavaScript",
};

console.log(outroCurso);
console.log(outroCurso.nome);
console.log(outroCurso.categoria);
