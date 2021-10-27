const empleados = [
    {
        id: 1,
        nombre: 'Jonathan'
    },
    {
        id: 2,
        nombre: 'Ramiro'
    },
    {
        id: 3,
        nombre: 'Joni'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1000
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id
    })?.nombre;

    if(empleado) {
        callback(null, empleado);  /* si no hay error se manda null, es considerado como un false */
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id === id);
    
    if (salario) {
        callback(null, salario.salario)
    } else {
        callback(`El salario con id ${id} no existe`)
    }
}

getEmpleado(1, (err, empleado) => {
    if(err) {
        return console.log(err);
    }
    getSalario(1, (err, salario) => {
        if (err) {
            return console.log(err);
        }
    
        // console.log(salario);
        console.log('El emplead:', empleado, 'tiene un salario de:', salario);
    })
})

// getSalario(3, (err, salario) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(salario);
// })