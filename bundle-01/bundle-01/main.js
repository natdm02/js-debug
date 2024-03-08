/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1

// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// correzione :

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1. Il codice dovrebbe eseguire un ciclo for che inizia con i uguale a 0 e continua fintanto che i è maggiore di 5.

// 2. No, non ci sono errori di sintassi

// 3. Sì, c'è un errore logico nella condizione del ciclo. La condizione i > 5 dovrebbe essere i < 5 





// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// correzione :

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// 1. Questo codice definisce una funzione chiamata addIfEven che accetta un parametro num. La funzione verifica se num è pari (cioè, se il resto della divisione di num per 2 è zero). Se num è pari, la funzione restituisce num + 5, altrimenti restituisce semplicemente num.

// 2. Sì, (===) 

// 3. Sì, (===) 


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// correzione :

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// 1. Questo codice definisce una funzione chiamata loopToFive esegue un ciclo for. Il ciclo dovrebbe iniziare con i uguale a 0, continuare fintanto che i è minore di 5 e incrementare i ad ogni iterazione. Durante ogni iterazione, il valore di i viene stampato sulla console.

// 2. Sì, c'è un errore di sintassi nella dichiarazione del ciclo for. 

// 3. Sì, a causa dell'errore di sintassi


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


// correzione :

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// 1. La funzione usa un ciclo for per iterare attraverso gli elementi dell'array numbers e aggiungere gli indici degli elementi pari all'array evenNumbers. 
// 2. Sì, ci sono errori di sintassi l'istruzione del ciclo for ha un punto e virgola in più nell'istruzione condizionale if, l'operatore di assegnazione
// 3. Sì, c'è un errore logico nella condizione dell'istruzione if. 