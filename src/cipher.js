let solved;
let solvedDecode;
let offsetDec;
let offsetDecN;
let asciiPos;
window.cipher = {
    encode: (offset, textToEncode) => {
    solved = '';
    for(let i = 0; i < textToEncode.length; i++ ){
        //variable que guarda la posicion de la letra en el codigo ASCII
        asciiPos = textToEncode[i].charCodeAt(); 
        if(asciiPos>=65 && asciiPos<=90){
            //variable que guarda la conversion a cadena del numero de posicion ASCII desplazada las posiciones que el usuario indique
            solved += String.fromCharCode((asciiPos-65+offset)%26+65);            
        } else if(asciiPos>=97 && asciiPos<=122) {
            solved += String.fromCharCode((asciiPos-97+offset)%26+97);
        } else if(asciiPos>=48 && asciiPos<=57) {
            solved += String.fromCharCode((asciiPos-48+offset)%10+48);
        } else if(asciiPos=164) {
            solved += String.fromCharCode(38);
        } else if(asciiPos=165) {
            solved += String.fromCharCode(38);
        } else {
            //guarda lo que encuentre en la cadena que no este dentro de los parametros anteriores
            solved += textToEncode[i];
        }
    }
    return solved;
    },
    decode: (offset, textToEncode) => {
        solvedDecode = '';
        for(let i = 0; i < textToEncode.length; i++ ){
            //variable que guarda la posicion de la letra en el codigo ASCII
            asciiPos = textToEncode[i].charCodeAt();
            offsetDec = 26-offset%26;
            offsetDecN = 10-offset%10; 
            if(asciiPos>=65 && asciiPos<=90){
                //variable que guarda la conversion a cadena del numero de posicion ASCII desplazada las posiciones que el usuario indique
                solvedDecode += String.fromCharCode((asciiPos-65+offsetDec)%26+65);            
            } else if(asciiPos>=97 && asciiPos<=122) {
                solvedDecode += String.fromCharCode((asciiPos-97+offsetDec)%26+97);
            } else if(asciiPos>=48 && asciiPos<=57) {
                solvedDecode += String.fromCharCode((asciiPos-48+offsetDecN)%10+48);
            } else if(asciiPos=38) {
                solvedDecode += String.fromCharCode(164);
            } else if(asciiPos=38) {
                solvedDecode += String.fromCharCode(165);
            } else {
                //guarda lo que encuentre en la cadena que no este dentro de los parametros anteriores
                solvedDecode +=textToEncode[i];
            }
        }
        return solvedDecode;
    }
  }; 
  //© 2019 GitHub, Inc.