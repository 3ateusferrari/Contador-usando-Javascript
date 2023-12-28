let valorContador = 0; // Inicia o contador com o valor inicial.
let numElemento = document.getElementById("num");

function adicao(){
    valorContador += 1;
    numElemento.textContent = valorContador;
}

function subtracao(){
    valorContador -= 1;
    numElemento.textContent = valorContador;
}

function reset(){
    valorContador = 0
    numElemento.textContent = valorContador
}