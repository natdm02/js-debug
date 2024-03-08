/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();



// correzione:

function checkAge() {
    let myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }

    console.log(message); // o return message; se vuoi restituire il messaggio
}

checkAge();




// 1. All'interno della funzione, vengono dichiarate due costanti, myAge e message. Successivamente, viene eseguita un'istruzione condizionale if che verifica se myAge è inferiore a 18. Se la condizione è vera, viene assegnato un messaggio alla variabile message, indicando che la persona è troppo giovane. Altrimenti, se la condizione è falsa, viene assegnato un diverso messaggio indicando che la persona ha più di 18 anni. 

// 2. Sì, c'è un errore di sintassi.  let anziché const 

// 3. Sì, c'è un errore logico. Quando myAge è inferiore a 18, viene assegnato un messaggio alla variabile message, Inoltre, il messaggio di "Hai più di 18 anni!" non viene utilizzato o restituito.






// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    // console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);

// correzione :
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();







// 1. All'interno della funzione, viene dichiarata una costante colors che contiene un array di colori. Successivamente, viene stampato il numero di colori presenti nell'array 
// 2. Sì, c'è un errore di sintassi. 'colors.lenght' anziché 'colors.length'
// 3. No, non ci sono errori logici.








// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();




// correzione : 

function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const parsedNumber = parseFloat(userNumber); // Converte la stringa in un numero
    const total = parsedNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}

addNumbers();





// 1. All'interno della funzione, viene utilizzata la funzione prompt per chiedere all'utente di inserire un numero. Il numero inserito viene memorizzato nella costante userNumber. Successivamente, viene dichiarata una costante total che rappresenta la somma del numero inserito dall'utente e 12. 

// 2. No, non ci sono errori di sintassi

// 3. Si, La funzione prompt restituisce sempre una stringa








// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// correzione 

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccess();




// 1. Viene richiesto all'utente di inserire il proprio indirizzo email utilizzando la funzione prompt, e il valore inserito viene memorizzato nella variabile userEmail.

// 2. No, non ci sono errori di sintassi 

// 3. Si, La variabile grantAccess viene inizializzata come una stringa








// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();


// correzione 

    function checkAccessImproved() {
        const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    
        const userEmail = prompt('Inserisci il tuo indirizzo email');
    
        let grantAccess = false;
    
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];
    
            if (userEmail.length > 5 && email === userEmail) {
                grantAccess = true;
            }
        }
    
        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    
    checkAccessImproved();

//   1.  Viene richiesto all'utente di inserire il proprio indirizzo email utilizzando la funzione prompt, e il valore inserito viene memorizzato nella variabile userEmail durante ogni iterazione, viene verificato se la lunghezza dell'indirizzo email inserito dall'utente è maggiore di 5. 
//   2. Si, il ciclo for e le relative istruzioni condizionali devono essere chiusi 
//   3. Si, La verifica if dovrebbe trovarsi fuori dal ciclo for

























