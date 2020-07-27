// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 3 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

$(document).ready(function(){

    var numeriRandom = [];
    var numeriScelti = [];
    var numero;
    var check;
    var count = 0;

    //riempio array di numeri random
    for (var i = 0; i<5; i++){
        numeriRandom[i] = randomNumber(1,100);
    }

    alert("Memorizza questi numeri: " + numeriRandom);

    // dopo 3 sec parte la funzione
    setTimeout(function(){
        do {
            numero = parseInt(prompt('Prova a ricordare un numero...'));
            check = checkElement(numeriRandom, numero);
            if (checkElement(numeriScelti, numero) == true){
                alert('Numero già scelto! Riprova!');
                check = false;
            } else if (check == true ){
                numeriScelti.push(numero);
            }
            count ++;
        } while(count < numeriRandom.length);
        //stampa a video il risultato
        document.getElementById('lista-numeri-random').innerHTML = "I numeri da memorizzare erano: " + numeriRandom;
        document.getElementById('lista-numeri-scelti').innerHTML = "Tu hai indovinato " +numeriScelti.length + " numeri. Nello specifico: " + numeriScelti;
    }, 3000);
});

//** FUNZIONI **//
//genera un numero random nell'intervallo min - max inclusi
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//controlla se un elemento è presente in un array
function checkElement (array, element){
    var check = false;
    for(var i = 0; i < array.length; i++){
        if (element == array[i]){
            check = true;
            return check;
        }
    }
    return check;
}
