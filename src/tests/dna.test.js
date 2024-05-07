// dna.test.js

// Importar la función esCadenaADNValida a probar
const esCadenaADNValida = require("../dna");

// Prueba para una cadena de ADN válida
test("Validar cadena de ADN válida", () => {
  expect(esCadenaADNValida("CTAG")).toBeTruthy();
});

// Prueba para una cadena de ADN inválida (contiene carácter no válido)
test("Validar cadena de ADN inválida (carácter no válido)", () => {
  expect(esCadenaADNValida("CTXG")).toBeFalsy();
});

// Prueba para una cadena de ADN inválida (en minúsculas)
test("Validar cadena de ADN inválida (en minúsculas)", () => {
  expect(esCadenaADNValida("ctag")).toBeFalsy();
});

// Prueba para una cadena de ADN inválida (cadena vacía)
test("Validar cadena de ADN inválida (cadena vacía)", () => {
  expect(esCadenaADNValida("")).toBeFalsy();
});
