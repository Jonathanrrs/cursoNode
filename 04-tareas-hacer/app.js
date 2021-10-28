require('colors');


const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausaMenu,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');





const main = async () => {

    let opt = '';

    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        /* establecer las tareas */
        tareas.cargarTareasFromArray(tareasDB);
    }


    do {
        /* imprimir menú */
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                // console.log(tareas.listadoArr);
                break
            case '3':
                tareas.listarPendientesCompletadas(true);
                break
            case '4':
                tareas.listarPendientesCompletadas(false);
                // tareas.listarPendientes();
                break
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0') {
                    const ok = await confirmar('¿Estás seguro?');
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break
        }

        guardarDB(tareas.listadoArr);

        await pausaMenu();
    } while (opt !== '0');
}

main();