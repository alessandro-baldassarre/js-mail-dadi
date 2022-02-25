// Mail
// Chiedi all’utente la sua email, (input html)
// controlla che sia nella lista di chi può accedere, (creo un array con la lista delle mail, controllo scorrendo con un ciclo for l'array che l'input corrrisponda)
// stampa un messaggio appropriato sull’esito del controllo. (creo elemento html con risposta positivo/negativa)


// created array with the list of the email for comparison
const listEmail = ["boolean@boolean.it", "alessandro@boolean.it", "richard@boolean.it", "tom@boolean.it", "alexis@boolean.it", "denzel@boolean.it", "cristiano@boolean.it"];

// variable for add dom element (output)
let newBox = document.createElement("div");

// event that listens to the click of the button by the user
document.querySelector("button").addEventListener("click", function () {

    // variable that counts if user input is present in the array
    let confirmVerification = 0;

    // variable that takes the data entered by the user
    const userEmail = document.getElementById("input-email").value;

    
    // for loop that flows the array through the i(index)
    for(let i = 0; i < listEmail.length; i++){

        // condition that checks if there is correspondence between the user data and each element of the array
        if(listEmail[i] == userEmail){
            
            confirmVerification++;
            
        }
        else{
            
        }
    }

    if (confirmVerification > 0) {
        
        newBox.classList.remove("border-success");
        newBox.classList.add("border", "border-3", "border-danger", "mt-3", "p-3");
        newBox.innerHTML = "sei nella black list";
        document.getElementById("email-user").append(newBox);

        
    }else{
        
        newBox.classList.remove("border-danger");
        newBox.classList.add("border", "border-3", "border-success", "mt-3", "p-3");
        newBox.innerHTML = "non sei nella black list";
        document.getElementById("email-user").append(newBox);
    }
    
});




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.(genero due numeri random)
// Stabilire il vincitore, in base a chi fa il punteggio più alto.(li confronto)


document.getElementById("play-game").addEventListener("click", function () {

    const userNumber = Math.floor((Math.random()* 6) + 1);
    console.log(userNumber);

    const pcNumber = Math.floor((Math.random()* 6) + 1);
    console.log(pcNumber);

    if (userNumber > pcNumber) {
        newBox.classList.remove("border-danger");
        newBox.classList.add("border", "border-3", "border-success", "mt-3", "p-3");
        newBox.innerHTML = `Hai Vinto!! Il tuo punteggio: ${userNumber} è più alto del punteggio del computer: ${pcNumber}`;
        document.getElementById("dice-game").append(newBox);
        
    } else if(userNumber < pcNumber){
        newBox.classList.remove("border-success");
        newBox.classList.add("border", "border-3", "border-danger", "mt-3", "p-3");
        newBox.innerHTML = `Hai perso!! Il tuo punteggio: ${userNumber} è più basso del punteggio del computer: ${pcNumber}`;
        document.getElementById("dice-game").append(newBox);
    }else{
        newBox.classList.remove("border-danger", "border-success");
        newBox.classList.add("border", "border-3", "mt-3", "p-3");
        newBox.innerHTML = `Pareggio!! Il tuo punteggio: ${userNumber} è uguale al punteggio del computer: ${pcNumber}`;
        document.getElementById("dice-game").append(newBox);
    }
    
})