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

const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find((e) => {
            return e.id === id
        })?.nombre;

        // if (empleado) {
        //     resolve(empleado)
        // } else {
        //     reject(`No existe empleado con id ${id}`)
        // }
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
   
}

const getSalario = (id) => {
    
    return new Promise((resolve, reject) => {

        const salario = salarios.find((s) => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`)
        
    });
}


// getEmpleado(1)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))


// getSalario(2)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))


getEmpleado(3)
    .then(empleado => {
        getSalario(3)
            .then(salario => {
                console.log('El empleado:', empleado, 'tiene un salario de:', salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))