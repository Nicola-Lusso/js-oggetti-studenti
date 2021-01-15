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
