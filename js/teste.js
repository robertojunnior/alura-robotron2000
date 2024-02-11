const robotron = document.querySelector("#robotron");

// Declaração de função junto ao addEventlistener que tem dois parâmetros
// robotron.addEventListener("click", function () {
//   console.log("Cliquei no robô");
// });

// Declaração de função anônima junto ao add
robotron.addEventListener("click", () => {
  console.log("Cliquei no robô com Arrow Function");
});

//chamando a função no final
// function dizOi() {
//   console.log("Oi");
//   console.log("A vavavava");
// }
// dizOi();

// função com parâmetros
function dizOi(nome) {
  console.log(`olá ${nome}, bem vindo ao Robotron!`);
}
dizOi("Junior");

// criando evento de click addEventListener ( 2 parâmetros)
subtrair.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) - 1;
});

somar.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) + 1;
});
