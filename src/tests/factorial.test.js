// factorial.test.js
// Importa la función a ser probada
const factorial = require("../factorial");

// Prueba para el caso base: factorial de 0
test("Factorial de 0 debe ser 1", () => {
  expect(factorial(0)).toBe(1);
});

// Prueba para un número positivo
test("Factorial de 5 debe ser 120", () => {
  expect(factorial(5)).toBe(120);
});

// Prueba para un número negativo (caso de prueba negativo)
test("Factorial de -5 debe ser undefined", () => {
  expect(factorial(-5)).toBeUndefined();
});

// Prueba para un número no entero (caso de prueba negativo)
test("Factorial de 5.5 debe ser undefined", () => {
  expect(factorial(5.5)).toBeUndefined();
});
