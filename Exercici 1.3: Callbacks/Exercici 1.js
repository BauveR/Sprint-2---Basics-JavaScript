function number (num1) {
    alert("El numero es" + num1);
  }
  
  function procesarNumero(callback, numero){
    callback(numero)
    return numero;
  }
  
   console.log (procesarNumero(number,8));