//1. chiedi all’utente il cognome
//2. inseriscilo in un array dove sono presenti già altri cognomi: 
//‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione “umana” (partendo da 1) 
//della lista in cui il nuovo utente si trova
var cognomeUtente = prompt('prego, inserire cognome');
var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
listaCognomi.push(cognomeUtente);//ho inserito il mio cognome
listaCognomi.sort();//ho riordinato l'array col mio cognome
//console.log(listaCognomi);
for (var i = 1; i < listaCognomi.length; i++){
    
}