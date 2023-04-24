const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braco');

//abaixo vemos um exemplo de função 'Anônima - arrow function" ou seja sem nome.
somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
})

function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    }
}





//podemos utilizar ()=> no lugar do function () {}, junto ao click para função anônima.
// robotron.addEventListener("click", function (){
//     console.log("Cliquei no Robô!")
// });


//abaixo temos o exemplo de função declarada.
// function dizOi(nome){
//     console.log("Olá " + nome);
//     console.log('Seja bem vindo ao Robotrom 2000!');
// }

// dizOi("Junior,");
