// Solución ejercicio 2.
function doubleArrayValues(arr) {
    // Verificar si el argumento es un array
    if (!Array.isArray(arr)) {
      console.log("Por favor, proporciona un array de números.");
      return;
    }
  
    // Duplicar el valor de cada número en el array
    const doubledArray = arr.map(number => number * 2);
  
    // Imprimir el nuevo array actualizado
    console.log(doubledArray);
  }
  
  // Ejemplo de uso
  const originalArray = [1, 2, 4, 5];
  doubleArrayValues(originalArray); // [2, 4, 8, 10]
  