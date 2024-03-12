// Solución ejercicio 3.
function calculateSumAndProduct(arr) {
  // Verificamos que el argumento sea un array
  if (!Array.isArray(arr)) {
    console.log("Error: El argumento debe ser un array.");
    return;
  }

  // Calculamos la suma de los elementos del array
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Calculamos el producto de los elementos del array
  const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  // Mostramos los resultados
  console.log(`El sum es ${sum}.`);
  console.log(`El product es ${product}.`);
}

// Ejemplo de uso
const inputArray = [1, 2, 3, 4];
calculateSumAndProduct(inputArray);
