var livros = [
  {
    titulo: "Cangaceiro JavaScript",
    autor: "Flávio Almeida",
    genero: "Front-end",
    editora: "Casa do código",
    preco: 31.92,
  },

  {
    titulo: "Introdução e boas práticas em UX Design",
    autor: "Fabricio Teixeira",
    genero: "UX & UI",
    editora: "Casa do código",
    preco: 31.92,
  },

  {
    titulo: "Scrum",
    autor: "Rafael Sabbagh",
    genero: "Métodos Ágeis",
    editora: "Casa do código",
    preco: 31.92,
  },
];

// acessando o objeto com [] e aspas
console.log(livros[0]["preco"]);

// acessando o objeto com .nome
console.log(livros[2].titulo);

//alterando o valor de um objeto
livros[1].genero = "UX e Design";
console.log(livros[1].genero);

//inserindo novos valores ao objeto
livros[0].estoque = "11 unidades";
console.log(livros[0]);

// deletando valores de um objeto
delete livros[1].autor;
console.log(livros[1]);

// deletando um objeto
delete livros[1];
console.log(livros);

// THIS e WINDOW
// acessando objeto com this
// console.log(this === window); // true

console.log(this);
