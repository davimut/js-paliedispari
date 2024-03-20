const buttonVerification = document.getElementById('verifica')
const listaInputElement = document.getElementById('lista')
const TitleElement = document.getElementById('Titolo')
const resultElement = document.getElementById('risultato')


buttonVerification.addEventListener('click', function (event) {
    event.preventDefault();
lista = listaInputElement.value

    if (lista === '1') {
        TitleElement.innerText = ('Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma')
        // Palidroma
        // Chiedere all’utente di inserire una parola,
        // Creare una funzione per capire se la parola inserita è palindroma. 
        // Questa funzione deve ricevere come input la parola inserita dall’utente 
        // e ritornare true se la parola è palindroma e false se la parola non 
        // è palindroma.
        function reverseWord(word) {
            let reversed = word.split('').reverse().join('')
            if(reversed === word ) {return true} else {return false}
        }
         
         parola = prompt('Inserisci una parola ti dirò se è palindroma!')
         resultElement.innerText = (' hai scritto '+ parola + ' quindi la mia risposta è '+ reverseWord(parola) + ' perche la tua parola al contrario si scrive ' + parola.split('').reverse().join(''))


    } else if (lista === '2') {
     TitleElement.innerText = ('Pari e Dispari L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione   Dichiariamo chi ha vinto.')
       //  Pari e Dispari
      // L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.
       // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
      // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
      // Dichiariamo chi ha vinto.
      
    }
})