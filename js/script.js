//Snack 1
//Creo un array di oggetti
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