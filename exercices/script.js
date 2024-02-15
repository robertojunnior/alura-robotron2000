const lista = document.querySelector("ul");
const botaoFechaLista = document.querySelector(".close");

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
  botaoFechaLista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
  botaoFechaLista.setAttribute("data-lista", "esconder");
});
