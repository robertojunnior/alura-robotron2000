const robotron = document.querySelector('#robotron');

//abaixo vemos um exemplo de função 'Anônima" ou seja sem nome.
robotron.addEventListener("click", function (){
    console.log("Cliquei no Robô!")
});

//podemos utilizar ()=> no lugar do function () {}, junto ao click para função anônima.
// robotron.addEventListener("click", (evento) => {
//     console.log(evento);
// })

//abaixo temos o exemplo de função declarada.
function dizOi(nome){
    console.log("Olá " + nome);
    console.log('Seja bem vindo ao Robotrom 2000!');
}

dizOi("Junior,");
