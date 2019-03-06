const argv = require('./yargs/config').argv;
const { crearArchivo, listarTabla } = require('./app');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e))
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log('Comando invalido');
}


console.log(argv);