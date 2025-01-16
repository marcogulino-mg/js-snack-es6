//Snack 1
//Creo un array di oggetti
console.log("SNACK 1");

const racingBike = [
  {
    name: "nome1",
    weight: 22,
  },

  {
    name: "nome2",
    weight: 10,
  },

  {
    name: "nome3",
    weight: 30,
  },

  {
    name: "nome4",
    weight: 44.2,
  },

  {
    name: "nome5",
    weight: 9.2,
  },

  {
    name: "nome6",
    weight: 100,
  },
];

//Stampo a schermo la bici da corsa con il peso minore
let lighterBike = 0;

for (let key in racingBike) {
  if (lighterBike == 0 || lighterBike > racingBike[key].weight) {
    lighterBike = racingBike[key].weight;
  }
}

console.log(lighterBike);

//Snack 2
//Creo un array di oggetti
console.log("SNACK 2");

const soccerSquad = [
  {
    squadName: "Roma",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Milan",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Juventus",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Torino",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Sampdoria",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Udinese",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Napoli",
    score: 0,
    fouls: 0,
  },

  {
    squadName: "Atalanta",
    score: 0,
    fouls: 0,
  },
];

//Array di oggetti vuoto
const sqdNameFouls = [];

//Funzione che genera un numero random compreso tra due numeri
function randomNums(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Inserisco un numero random nel valore di ogni chiave
for (let i in soccerSquad) {
  soccerSquad[i].score = randomNums(0, 10);
  soccerSquad[i].fouls = randomNums(0, 10);

  //Riempio l'array di oggetti sqdNameFouls con
  //le proprietà squadName e fouls dell'array precedente
  sqdNameFouls.push({squadName: soccerSquad[i].squadName, fouls: soccerSquad[i].fouls});
}

console.table(soccerSquad);
console.table(sqdNameFouls);