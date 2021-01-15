// PUNTO 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome : "Nick",
  cognome : "Five",
  eta : "23"
};

// Ciclo For In per gli array ; stampo tutte le proprietà dello studente
for(var i in studente) {
  console.log(studente[i]);
}


// PUNTO 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
  {
    nome : "LeBron",
    cognome : "James",
    eta : "34"
  },
  {
    nome : "Paolo",
    cognome : "Bonolis",
    eta : "55"
  },
  {
    nome : "Gerry",
    cognome : "Scotti",
    eta : "60"
  },
  {
    nome : "Gigi",
    cognome : "Dag",
    eta : "33"
  },
  {
    nome : "Pippo",
    cognome : "Baudo",
    eta : "22"
  }
];

for(i = 0; i < studenti.length; i++) {
  // Stampa solo Nome + Cognome
  console.log(studenti[i].nome + '  ' + studenti[i].cognome);
}
