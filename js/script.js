// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

$(document).ready(function(){

    var numeriRandom = [];
    var numeriScelti = [];
    var numero;
    var check;
    var count=0;

    //riempio array di numeri random
    for (var i = 0; i<5; i++){
        numeriRandom[i] = randomNumber(1,100);
    }
    console.log(numeriRandom);
    alert("Memorizza questi numeri: " + numeriRandom);

    do {
            numero = parseInt(prompt('Prova a ricordare un numero...'));
            check = checkElement(numeriRandom, numero);
            if (check == true){
                numeriScelti.push(numero);
            } else if (checkElement(numeriScelti, numero) == true){
                    alert('Numero già scelto! Riprova!');
                    check = false;
        //     } else {
        //         alert('HAI PERSO!');
        //     }
        // } else {
        //         alert('Complimenti! hai vinto!');
        //         check = false;
    }
    count ++;
} while(count < numeriRandom.length);

    console.log('Hai indovinato: ' + (numeriScelti.length) + ' numeri');
    console.log(numeriScelti);

});
//** FUNZIONI **//

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
