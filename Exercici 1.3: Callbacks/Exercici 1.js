function number (num1) {
    alert("El numero es" + num1);
  }
  
  function procesarNumero(callback) {
    var numero = prompt("Por favor ingresa el numero.");
    callback(numero)
    return numero;
  }
  
   console.log (procesarNumero(number));