// Object.prototype > Todos sao filhos de Object.prototype

// todo objeto criado tera attr50 = "Z" por causa do prototype chain
Object.prototype.attr50 = "Z";

let animal = {
  attr1: "a",
};
let vertebrado = {
  __proto__: animal,
  attr2: "b",
};
let ave = {
  __proto__: vertebrado,
  attr3: "c",
};

console.log(ave.attr2, ave.attr1, ave.attr50);
