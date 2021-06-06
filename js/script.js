//1. chiedi all’utente il cognome
//2. inseriscilo in un array dove sono presenti già altri cognomi: 
//‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione “umana” (partendo da 1) 
//della lista in cui il nuovo utente si trova
var cognomeUtente = prompt('prego, inserire cognome');
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

//devo fare in modo che se l'utente inserisce il cognome in minuscolo, questo venga automaticamente messo in maiuscolo

cognomeUtente =  cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
//prendi la stringa che parte dalla posizione 1 

listaCognomi.push(cognomeUtente);//ho inserito il mio cognome

console.log(listaCognomi);

listaCognomi.sort();//ho riordinato l'array 

console.log(listaCognomi);

var position = listaCognomi.indexOf(cognomeUtente) +1;
console.log(position);

/*ho stampato la mia lista cognomi ordinata 
alfabeticamente
for (var i = 0; i < listaCognomi.length; i++){
    document.getElementById('position').innerHTML = listaCognomi + '\n' + ' il posto del mio  cognome in ordine alfabetico è  ' +  parseInt(listaCognomi.indexOf(cognomeUtente) + 1) ;
}
//ho trovato la posizione che il mio cognome ha nell'array, con l'idex of

*/