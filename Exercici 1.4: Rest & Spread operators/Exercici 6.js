const objectOne = {cosa: "Boligrafo", color: "rosa", medida: 10};
const objectTwo = {cosa2: "Mouse", color2: "plateado", medida2: 5};
const newObject ={...objectOne, ...objectTwo};

console.log(newObject);

