// Escribe tu código aquí.

var word = 'prueba';
var arr = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio','hola','pruebaaa','perrito','playa'];

function valida(word2,arr2) {
    var word2 = word; //se redeclararon las variables para poder utilizarlas dentro del for y en otra funcion
    var arr2 = arr;
    var arr3 = [0];

    for(let i=0; i<word2.length; i++){
        if(word2.length<arr2[i].length){
            arr3 = arr2[i];
            //console.log(arr3);
        }
    }
    return arr3;
}

console.log(valida(word,arr));

function regresa(){
    valida(word,arr);
}