var listaDeCores = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

listaDeCores.splice(1, 1); // SPLICE remove elemento (posicao, quantidade) do array (ex: vermelho)

listaDeCores.shift(); //SHIFT remove elemento no início do array (ex: Laranja)

listaDeCores.pop(); //POP remove elemento no final do array (ex: Rosa)

listaDeCores.unshift('Roxo'); // UNSFHIFT adiciona elemento no início do array

listaDeCores.push('Marrom'); // PUSH adiciona elemento ao final do array

console.log(listaDeCores); // Mostrar o resultado no OUTPUT ou DEVTOOLS