const botonEncriptar = document.querySelector(".boton1");
const botonDesencriptar = document.querySelector(".boton2");
const botonCopiar = document.querySelector(".boton3");
const ocultarLogo = document.querySelector("#desaparecer");
const resultadoMensaje = document.querySelector(".resultadoMensaje");
const mensaje = document.querySelector(".mensajeEncriptado");

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    let letras = /[áÁéÉíÍóÓúÚàÀA-Z]/g;
    if(mensaje.value.match(letras)) {
        console.log("Error");
    } else {
        btnEncriptar();
        limpiarTextarea();
    }
    if(!resultadoMensaje.innerHTML == " ") {
        aparecer();
    }

});
botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    let letras = /[áÁéÉíÍóÓúÚàÀA-Z]/g;
    if(mensaje.value.match(letras)) {
        console.log("Error");
    } else {
        btnDesencriptar();
        limpiarTextarea();
    }
    if(!resultadoMensaje.innerHTML == " ") {
        aparecer();
    }
});
function copiarTexto() {
    let copiar = document.querySelector(".resultadoMensaje").innerHTML;
    navigator.clipboard.writeText(copiar);
}
botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    copiarTexto();
    limpiarParrafo();

});
function btnEncriptar() {
    const textoEncriptado = encriptar(mensaje.value);
    resultadoMensaje.textContent = textoEncriptado;
}
function encriptar(e) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    e = e.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(e.includes(matrizCodigo[i][0])) {
            e = e.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    return e;
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    resultadoMensaje.textContent = textoDesencriptado;
}
function desencriptar(e) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    e = e.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(e.includes(matrizCodigo[i][0])) {
            e = e.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    return e;
}
function limpiarTextarea() {
    document.querySelector(".mensajeEncriptado").value = "";
}
function limpiarParrafo() {
    document.querySelector(".resultadoMensaje").textContent = "";
    remover();
}
function remover() {
    ocultarLogo.classList.remove("desaparecerSi");
    ocultarLogo.classList.add("desaparecerNo");
}
function aparecer() {
    ocultarLogo.classList.remove("desaparecerNo");
    ocultarLogo.classList.add("desaparecerSi");
}