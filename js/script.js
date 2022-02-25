// Mail
// Chiedi all’utente la sua email, (input html)
// controlla che sia nella lista di chi può accedere, (creo un array con la lista delle mail, controllo scorrendo con un ciclo for l'array che l'input corrrisponda)
// stampa un messaggio appropriato sull’esito del controllo. (creo elemento html con risposta positivo/negativa)

const listEmail = ["boolean@boolean.it", "alessandro@boolean.it", "richard@boolean.it", "tom@boolean.it", "alexis@boolean.it", "denzel@boolean.it", "cristiano@boolean.it"];

let confermVerification = 0;

document.querySelector("button").addEventListener("click", function () {

    const userEmail = document.getElementById("input-email").value;

    for(let i = 0; i < listEmail.length; i++){
        if(listEmail[i] == userEmail){
            
            confermVerification++;
            
        }
        else{
            
        }
    }

    if (confermVerification > 0) {
        console.log("sei nella lista");
        
    }else{
        console.log("non sei nella lista");
    }
    
});