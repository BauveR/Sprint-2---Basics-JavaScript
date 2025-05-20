const numeros = [3,1,2,2,5,5,2];

const suma = (a,b, ...rest) => 
    a + b + rest.reduce((sum,num) => sum + num, 0); 

console.log(suma(...numeros));  