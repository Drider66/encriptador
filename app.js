function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

document.getElementById("entradaTexto").addEventListener("input", function() {
    this.value = normalizarTexto(this.value);
});

function encriptar(){
    let texto = document.getElementById("entradaTexto").value;
    if (texto !== "") {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("salidaTexto").value = textoEncriptado;
        document.getElementById("entradaTexto").value = "";
        document.querySelector(".container__encriptado").style.display = "none";
        document.getElementById("salidaTexto").style.display = "block";
    }
}

function desencriptar(){
    let texto = document.getElementById("entradaTexto").value;
    if (texto !== "") {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("salidaTexto").value = textoDesencriptado;
        document.getElementById("entradaTexto").value = "";
        document.querySelector(".container__encriptado").style.display = "none";
        document.getElementById("salidaTexto").style.display = "block";
    }
}

window.onload = function() {
    document.getElementById("salidaTexto").style.display = "none";
}
