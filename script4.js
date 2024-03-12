// Solución ejercicio 4.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
  // Filtramos los cursos comunes utilizando el método filter
  const commonCourses = courses1.filter(course => courses2.includes(course));

  // Verificamos si hay cursos comunes y los imprimimos en la consola
  if (commonCourses.length > 0) {
    console.log('Cursos comunes:');
    commonCourses.forEach(course => {
      console.log(`- ${course}`);
    });
  } else {
    console.log('No hay cursos comunes.');
  }
}

// Llamamos a la función con los arrays de cursos de los estudiantes
findCommonCourses(student1Courses, student2Courses);
