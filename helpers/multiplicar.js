const fs = require('fs');
const { resolve } = require('path/posix');
const colors = require('colors/safe');


colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });


//Solución con promesas
// const crearArchivo = ( base ) => {

//     return new Promise((resolve, reject) => {

//         console.log('==========================');
//         console.log('       Tabla del',base);
//         console.log('==========================');

//         let output = '';

//         for( let i = 1; i<= 10; i++ ) {
//             output += `${ base } x ${ i } = ${ base * i } \n` ;
//         }
        
//         console.log(output);
        
//         fs.writeFileSync(`table-${ base }.txt`, output);
       
//         resolve(`table-${ base }.txt`);
//     })

// }


const crearArchivo = async ( base =5, listar = false, hasta = 10 ) => {
    try {

        if( listar ) {
            console.log(colors.help('=========================='));
            console.log(colors.info('       Tabla del'),base);
            console.log(colors.help('=========================='));
        }


        let output = '';

        for( let i = 1; i<= hasta; i++ ) {
            output += `${ base } x ${ i } = ${ base * i } \n` ;
        }
        
        ( listar ) ?  console.log(output) : '';
        
        fs.writeFileSync(`./salida/table-${ base }.txt`, output);
       
        return `table-${ base }.txt`;
    } catch ( error ) {
        throw error;
    }
      
} 


module.exports = {
    crearArchivo
}