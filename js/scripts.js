function encriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();

    if (texto.trim() === "") {
        return;
    }

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        switch (char) {
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += char;
                break;
        }
    }

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();

    if (texto.trim() === "") {
        return;
    }

    let textoDesencriptado = "";
    let i = 0;

    while (i < texto.length) {
        if (texto.startsWith("enter", i)) {
            textoDesencriptado += "e";
            i += 5;
        } else if (texto.startsWith("imes", i)) {
            textoDesencriptado += "i";
            i += 4;
        } else if (texto.startsWith("ai", i)) {
            textoDesencriptado += "a";
            i += 2;
        } else if (texto.startsWith("ober", i)) {
            textoDesencriptado += "o";
            i += 4;
        } else if (texto.startsWith("ufat", i)) {
            textoDesencriptado += "u";
            i += 4;
        } else {
            textoDesencriptado += texto[i];
            i++;
        }
    }

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("outputText");
    resultado.value = texto;

    document.getElementById("rightNoneContainer").style.display = "none";
    document.getElementById("resultaContainer").style.display = "flex";
}

function copiarTexto() {
    let textoCopiar = document.getElementById("outputText").value;
    navigator.clipboard.writeText(textoCopiar);
}