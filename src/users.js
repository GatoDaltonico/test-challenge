// users.js

// Importa el arreglo de usuarios
const usuarios = require("./data");

// Obtiene todos los usuarios
const obtenerUsuarios = () => {
  return usuarios;
};

// Filtra los usuarios por un ID específico
const obtenerUsuario = (id) => {
  return usuarios.find((usuario) => usuario.id === id);
};

// Simula la obtención de datos del usuario desde una API
const obtenerDatosUsuario = (idUsuario) => {
  return new Promise((resolve, reject) => {
    // Simula la obtención de datos del usuario desde una API
    const datosUsuario = obtenerUsuario(idUsuario);
    if (datosUsuario) {
      resolve(datosUsuario);
    } else {
      reject(new Error('Usuario no encontrado'));
    }
  });
};

// Valida cadenas de ADN
const validarADN = (cadenaADN) => {
  const regex = /^[CTAG]+$/;
  return regex.test(cadenaADN);
};

// Exporta las funciones actualizadas
module.exports = { obtenerUsuarios, obtenerUsuario, obtenerDatosUsuario, validarADN };
