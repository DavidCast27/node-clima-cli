const direccion = {
    demand: true,
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima'
}

const argv = require('yargs')
    .options({ direccion })
    .help()
    .argv;


module.exports = {
    argv
}