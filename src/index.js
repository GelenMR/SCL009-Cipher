//DECLARACION DE VARIABLES
let textToEncode="";
let offset="";
//let resolved="";
//GUARDAR MENSAJE A CIFRAR CON EL EVENTO CLICK 
//BOTON CIFRAR
const btnSendTextToEncode = document.getElementById("sendTextToEncode");
btnSendTextToEncode.addEventListener("click",() => {
    //GUARDAR EL VALOR DE LA VARIABLE DEL MENSAJE A CIFRAR
    textToEncode = document.getElementById("textToEncode").value;
    //GUARDAR EL VALOR DEL DESPLAZAMIENTO (OFFSET)
    offset = parseInt(document.getElementById("offset").value);

    //IMPRIMIR DEL CIPHER AL HTML EL RESULTADO
    document.getElementById("resultEncode").innerHTML = window.cipher.encode(offset, textToEncode);
});
//BOTON DESCIFRAR
const btnSendTextToDecode = document.getElementById("sendTextToDecode");
btnSendTextToDecode.addEventListener("click",() => {
    //GUARDAR EL VALOR DE LA VARIABLE DEL MENSAJE A CIFRAR
    textToEncode = document.getElementById("textToEncode").value;  
    //GUARDAR EL VALOR DEL DESPLAZAMIENTO (OFFSET)
    offset = parseInt(document.getElementById("offset").value);
    document.getElementById("resultEncode").innerHTML = window.cipher.decode(offset, textToEncode);
    //resolved.innerHTML = window.cipher.decode(offset, textToEncode);
});

