const robotron = document.querySelector('#robotron');

//abaixo vemos um exemplo de função 'Anônima".
robotron.addEventListener("click", function (){
    console.log('Cliquei no Robô!')
});

//abaixo temos o exemplo de função declarada.
function dizOi(){
    console.log('Olá,');
    console.log('Seja bem vindo ao Robotrom 2000!');
}

dizOi(1);