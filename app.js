const { crearArchivo } = require('./helpers/multiplicar');  //Desestructuración
const argv = require('./config/yargs');
require('colors');  // se puede porque si no uso la variable, con esto vale.
//Ejercicio crear la opción l , de listar, opcional , booleano y default false 

console.clear();

// console.log(process.argv); 
// console.log(argv);
// console.log(argv.base);


// const base = 4;

crearArchivo( argv.b, argv.l , argv.h )
.then(nombreArchivo => console.log(nombreArchivo.random, 'creado'))
.catch( err => console.log( err ));
