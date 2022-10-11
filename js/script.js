/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
________________________

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/


/* VERIFICA MAIL */
//Array Database lista
const dbMails = ['mail1@mail.com', 'mail2@mail.com', 'mail3@mail.com'];

//elements
let mailRegistered;
let btn = document.querySelector('button');
let answer = document.getElementById('answer');

// Check se la mail è registrata
const check = function(){
    let eMail = document.getElementById('mailuser');
    let mailRegistered;

    for(let i = 0; i < dbMails.length; i++){
        if (eMail.value === dbMails[i]) {
            mailRegistered = true;
        }
    }
    
    // Answer
    answer.innerHTML = '';
    if(mailRegistered){
        answer.textContent = "Email verificata con successo"
    }
    else{
        answer.textContent = "Non sei ancora registrato, iscriviti ora."
    };

    answer.append(answer)
};

//Evento bottone
btn.addEventListener('click', check);

// ---------------------------------------------------------------------------------------- //

/*GIOCO DEI DADI */
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//variabili
let player, pc;



//Stabilire il vincitore, in base a chi fa il punteggio più alto.
