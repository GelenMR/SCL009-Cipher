let solved;
let solvedDecode;
let asciiPos;
window.cipher = {
    encode: (offset, textToEncode) => {
    solved = '';
    for(let i = 0; i < textToEncode.length; i++ ){
        console.log(textToEncode[i].charCodeAt());
        //variable que guarda la posicion de la letra en el codigo ASCII
        asciiPos = textToEncode[i].charCodeAt(); 
        if(asciiPos>=65 && asciiPos<=(90-offset)){
            //variable que guarda la conversion a cadena del numero de posicion ASCII desplazada 13 posiciones
            solved += String.fromCharCode(asciiPos+offset);
            console.log(solved);
        } else if(asciiPos>=(90-offset+1) && asciiPos<=90) {
            solved +=String.fromCharCode(asciiPos-offset);
            console.log(solved);
        } else {
            //guarda lo que encuentre en la cadena que no este dentro de los parametros anteriores
            solved +=textToEncode[i];
            console.log(solved);   
        }
    }
    return solved;
    },
    decode: (offset, textToEncode) => {
        solvedDecode = '';
        for(let i = 0; i < textToEncode.length; i++ ){
            console.log(textToEncode[i].charCodeAt());
            //variable que guarda la posicion de la letra en el codigo ASCII
            asciiPos = textToEncode[i].charCodeAt(); 
            if(asciiPos>=65 && asciiPos<=(90-offset)){
                //variable que guarda la conversion a cadena del numero de posicion ASCII desplazada 13 posiciones
                solvedDecode += String.fromCharCode(asciiPos-offset);
                console.log(solvedDecode);
            } else if(asciiPos>=(90-offset+1) && asciiPos<=90) {
                solvedDecode +=String.fromCharCode(asciiPos+offset);
                console.log(solvedDecode);
            } else {
                //guarda lo que encuentre en la cadena que no este dentro de los parametros anteriores
                solvedDecode +=textToEncode[i];
                console.log(solvedDecode);   
            }
        }
        return solvedDecode;
    }
  };
  
  //© 2019 GitHub, Inc.