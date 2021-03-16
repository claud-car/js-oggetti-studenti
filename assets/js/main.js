//ESERCIZIO 1
//Creare un oggetto che descriva uno studente,
//con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le
//proprietà dell'oggetto.

//creo oggetto con proprietà
var studente = {
  proprieta:['Claudio', 'Carchietti',26],
}

for (var e in studente) {
  console.log(e,studente[e]);
}

var studente1 = {
  nome: ': Claudio',
  cognome: ': Carchietti',
  eta: ': 26',
}

for (var e in studente1) {
  console.log(e,studente1[e]);
}

console.log('FINE ESERCIZIO 1');

//ESERCIZIO 2

//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi,
//nome e cognome.

// var studenti = ['Claudio Carchietti','Nicolò Alivernini','Alessandro Benigni','Federico Figini'];
// var studenti1 = ['Andrea Marangon','Fabio Parisi','Giorgio Pignattari','Giuseppe Placida'];
// var studenti2 = ['Aragorn','Gimli','Frodo','Legolas'];
// var studenti3 = ['Samwise','Thranduil','Balin','Faramir'];
//
// var classe1 = [studenti,studenti1];
// var classe2 = [studenti2,studenti3];
//
//
// var totale = [classe1,classe2]
//
// for (var i = 0; i < totale.length; i++) {
//   for (var j = 0; j < totale[i].length; j++) {
//     for (var k = 0; k < totale[i][j].length; k++) {
//       console.log('Nome e Cognome: ',totale[i][j][k]);
//     }
//   }
// }

var studenti = [
  {
    nome: 'Claudio',
    cognome: 'Carchietti',
    eta: 26,
  },
  {
    nome: 'Alessandro',
    cognome: 'Benigni',
    eta: 40,
  },
  {
    nome: 'Frodo',
    cognome: 'Baggins',
    eta: 89,
  },
  {
    nome: 'Bilbo',
    cognome: 'Baggins',
    eta: 111,
  },
  {
    nome: 'Dario',
    cognome: 'Lampa',
    eta: 4,
  }
];;

var prova = [];

for (var i = 0; i < studenti.length; i++) {
  prova += 'Nome : ' + studenti[i].nome + ' , ' + 'Cognome : ' + studenti[i].cognome +  ' , ' + 'Età : ' + studenti[i].eta + '<br>' + '<br>';
}

document.getElementById('esercizio2').innerHTML = prova;

console.log('INIZIO ESERCIZIO 3');

//ESERCIZIO 3

//Dare la possibilità all’utente,
//attraverso 3 prompt(), di aggiungere un nuovo
//oggetto studente inserendo nell’ordine: nome, cognome e età.


$('#send').click(function () {
  var nome = $('#nome').val();
  var cognome = $('#cognome').val();
  var eta = $('#età').val();
  var studente = [nome,cognome,eta];

  if (studente){
    var studente ={
      nome:nome,
      cognome:cognome,
      eta:eta,
    }
  }

  studenti.push(studente);
  console.log(studenti);
})
