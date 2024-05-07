import * as users from "../users"; // Importa todo el módulo users


// Escribe una prueba para verificar si la función obtenerUsuario(id) funciona correctamente
test('Obtener usuario por ID', () => {
  // Define un ID de usuario existente en tu conjunto de datos de prueba
  const userId = 1;
  // Llama a la función getUser con el ID definido
  const usuario = users.obtenerUsuario(userId); // Llama a la función directamente desde el módulo users
  // Realiza aserciones sobre el usuario devuelto
  expect(usuario).toBeDefined(); // Verifica si el usuario existe
  expect(usuario.id).toBe(userId); // Verifica si el ID del usuario coincide con el ID definido
  // Agrega más aserciones según sea necesario para verificar otros datos del usuario
});
