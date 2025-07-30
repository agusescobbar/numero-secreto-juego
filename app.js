let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto;
let intentos = 0;


function asignarTextoHtml(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function metodosIniciales(){
    asignarTextoHtml('h1','Número Secreto');
    asignarTextoHtml('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.querySelector('input').value);


    if (numeroDeUsuario === numeroSecreto){
        asignarTextoHtml('p',`MUY BIEN!! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoHtml('p','El numero es menor')
        }else{
            asignarTextoHtml('p','El numero es mayor')
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoHtml('p', 'Todos los números sorteados');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function reiniciarJuego() {
    //limpiar la caja, generar el numero, cambiar el parrafo, msj inicio, desactivar boton
    limpiarCaja();
    metodosIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

metodosIniciales();
