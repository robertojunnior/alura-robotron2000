const lista = document.querySelector("ul");
const BotaoFechaLista = document.querySelector(".close");

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
  BotaoFechaLista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
  BotaoFechaLista.setAttribute("data-lista", "esconder");
});
