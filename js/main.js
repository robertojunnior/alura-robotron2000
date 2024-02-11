const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

// criando evento de click addEventListener ( 2 parâmetros)
subtrair.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) - 1;
});

somar.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) + 1;
});
