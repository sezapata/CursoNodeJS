console.log('iniciando...')
const fs = require('fs');

let cursos = [{
        id: 100,
        curso: 'Pensamiento Algorítmico',
        duracion: '100',
        costo: 80000
    },
    {
        id: 200,
        curso: 'Diseño de redes de datos',
        duracion: '80',
        costo: 60000
    },
    {
        id: 300,
        curso: 'Lenguajes de Programación',
        duracion: '120',
        costo: 160000
    },
    {
        id: 400,
        curso: 'Investigación de Operaciones',
        duracion: '50',
        costo: 75000
    }
];

let verCursos = () => {
    console.log('cursos...')
    for (let x = 0; x < cursos.length; x++) {
        let mensajeCurso = `El curso con nombre:${cursos[x].curso} y código:${cursos[x].id}, tiene una duración de:${cursos[x].duracion } horas y un único costo de:$${cursos[x].costo}`;

        setTimeout(() => {
            console.log(mensajeCurso);
        }, (x * 2000));
    }
    //console.log('FIN cursos...')
}


let buscarCurso = (idCurso) => {
    let mensajeCurso = '';
    let curso = cursos.find(course => course.id == idCurso);

    if (curso == undefined) {
        mensajeCurso = `El curso con id: ${idCurso}, no registra en la base de datos. Le invitamos a validar la oferta de cursos`;
        console.log(mensajeCurso);
        verCursos();
    } else {
        mensajeCurso = `El curso con nombre:${curso.curso} y código:${curso.id}, tiene una duración de:${curso.duracion } horas y un único costo de:$${curso.costo}`;
        console.log(mensajeCurso)
    }

}



let inscribirAspirante = (idCurso, Aspirante, Documento) => {
    let mensajeCurso = '';
    let curso = cursos.find(course => course.id == idCurso);

    if (curso == undefined) {
        mensajeCurso = `El curso con id: ${idCurso}, no registra en la base de datos. Le invitamos a validar la oferta de cursos`;
        console.log(mensajeCurso);
        verCursos();
    } else {

        mensajeCurso = ` Bienvenido señor(a) aspirante ${Aspirante} identificado con número de documento:${Documento}, datos de la inscripción:
        El curso con nombre:${curso.curso} y código:${curso.id}, tiene una duración de:${curso.duracion } horas y un único costo de:$${curso.costo}`;
        console.log(mensajeCurso);

        /*GENERAR ARCHIVO CON LOS DATOS DE LA INSCRIPCION */
        fs.writeFile("inscripcion_" + Documento + ".txt", mensajeCurso, (error) => {
            if (error) throw (error);
            console.log('Archivo creado');
        })

    }
}




console.log('iniciando2...')

/*LISTAR LOS CURSOS */
//verCursos();

/*BUSCAR CURSO POR ID */
//buscarCurso(200)

/*CREAR INSCRIPCION */
//inscribirAspirante(200, 'Sergio', '123');



module.exports = {
    verCursos,
    buscarCurso,
    inscribirAspirante
};