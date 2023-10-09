 let nombre = prompt('¿Cual es tu nombre?', '');

alert('Hola '+nombre);

let alumnos = prompt('¿Sos alumno de UTN?');
if (alumnos=='si'){
    location.replace('http://www.frt.utn.edu.ar/')
}
else{
    alert('No sos alumno, no podes ingresar');
}