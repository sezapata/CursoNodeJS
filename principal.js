const { verCursos, buscarCurso, inscribirAspirante } = require('./cursos')


const aspirante = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

const Buscar = {
    id: {
        demand: true,
        alias: 'i'
    }
}


const argv = require('yargs')
    .command('$0', 'Sin parametros', (argv) => {
        verCursos();
    })
    .command('inscribir', 'Inscripción del Arpirante', aspirante, (argv) => {
        inscribirAspirante(argv.id, argv.nombre, argv.cedula)
    })
    .command('buscar', 'Buscar un curso', Buscar, (argv) => {
        buscarCurso(argv.id)
    })
    .argv