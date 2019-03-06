const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        defauld: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de Multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            defauld: 10
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}