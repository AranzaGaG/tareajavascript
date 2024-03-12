// Solución ejercicio 6.
function bubbleSort(arr) {
  var n = arr.length;

  for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
          // Intercambia si el elemento encontrado es mayor que el siguiente elemento
          if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
}

// Ejemplo de uso
var inputArray = [3, 6, 12, 5, 100, 1];
bubbleSort(inputArray);
console.log("Input:", inputArray);

