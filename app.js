let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;


function asignatTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarNumeroUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignatTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignatTextoElemento('p','El número es menor');
        }else{
            asignatTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignatTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function condicionesIniciales(){
    asignatTextoElemento('h1','Juego del número secreto');
    asignatTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
condicionesIniciales();
