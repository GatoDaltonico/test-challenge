// dna.js

// Función para validar cadenas de ADN
const esCadenaADNValida = (cadenaADN) => {
    // Verificar si la cadena está vacía o no es una cadena
    if (typeof cadenaADN !== "string" || cadenaADN === "") {
      return false;
    }
    
    // Expresión regular para hacer coincidir solo bases de ADN canónicas (C, T, A, G en mayúsculas)
    const regex = /^[CTAG]+$/;
    return regex.test(cadenaADN);
  };
  
  // Exportar la función para ser utilizada en otros archivos
  module.exports = esCadenaADNValida;
  