//FUNCION PARA GUARDAR LA VARIABLE DEL MENSAJE A CIFRAR CON EL EVENTO CLICK
let textToEncode;
let offset;
let resolved;
let resolved2;
const btnSendTextToEncode = document.getElementById("sendTextToEncode");
btnSendTextToEncode.addEventListener("click",() => {
    
    //GUARDAR EL VALOR DE LA VARIABLE DEL MENSAJE A CIFRAR
    textToEncode = document.getElementById("textToEncode").value;
    console.log(textToEncode);  
    //GUARDAR EL VALOR DEL DESPLAZAMIENTO (OFFSET)
    offset = parseInt(document.getElementById("offset").value);
    console.log(offset);
    resolved = window.cipher.encode(offset, textToEncode);
    document.getElementById("resultEncode").innerHTML = resolved;
});
const btnSendTextToDecode = document.getElementById("sendTextToDecode");
btnSendTextToDecode.addEventListener("click",() => {
    
    //GUARDAR EL VALOR DE LA VARIABLE DEL MENSAJE A CIFRAR
    textToEncode = document.getElementById("textToEncode").value;
    console.log(textToEncode);  
    //GUARDAR EL VALOR DEL DESPLAZAMIENTO (OFFSET)
    offset = parseInt(document.getElementById("offset").value);
    console.log(offset);
    resolved = window.cipher.decode(offset, textToEncode);
    document.getElementById("resultEncode").innerHTML = resolved;
});

