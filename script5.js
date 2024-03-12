// Solución ejercicio 5.
//Imprimir todos los nombres de la lista
let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);
// Eliminar "Dany" del array
personas.splice(personas.indexOf("Dani"), 1);
// Eliminar "Juan" del array
personas = personas.filter(persona => persona !== "Juan");
// Mover "Luis" al principio del array
personas.unshift(personas.splice(personas.indexOf("Luis"), 1)[0]);
// Agrego Aranza al final del array
personas.push("Aranza");
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
  if (personas[i] === "Maria") {
    break;
  }
}
// Obtener el index donde se encuentra María
const indiceMaria = personas.indexOf("Maria");
console.log("Índice de Maria:", indiceMaria);

console.log(`El arreglo es: ${personas}`);
