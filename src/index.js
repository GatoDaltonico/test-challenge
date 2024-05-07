// index.js

// Calcula el factorial de un número
const calcularFactorial = (n) => {
    if (n === 0) {
      return 1;
    } else if (n < 0 || !Number.isInteger(n)) {
      throw new Error('Entrada inválida');
    } else {
      return n * calcularFactorial(n - 1);
    }
  };
  
  // Exporta la función
  module.exports = { calcularFactorial };
  