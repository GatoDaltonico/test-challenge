// Función para calcular el factorial de un número utilizando recursión
const factorial = (n) => {
    // Caso base: el factorial de 0 es 1
    if (n === 0) {
      return 1;
    }
    // Validación para evitar números negativos
    if (n < 0) {
      throw new Error('El factorial de un número negativo no está definido.');
    }
    // Validación para asegurar que n sea un número entero
    if (!Number.isInteger(n)) {
      throw new Error('El factorial solo puede ser calculado para números enteros.');
    }
    // Caso recursivo: el factorial de n es n * factorial(n - 1)
    return n * factorial(n - 1);
};

module.exports = factorial;
