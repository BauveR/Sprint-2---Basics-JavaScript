const parOImpar = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0
         ? console.log(`${i} el número es par`) 
         : console.log(`${i} el número es impar`);
    }

};