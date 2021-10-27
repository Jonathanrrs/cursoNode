const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    // getNombre: function() {
    //     return `${this.nombre} ${this.apellido} ${this.apellido}`
    // }
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.apellido}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, edad = 40} = deadpool;

function imprimeHeroe({nombre, edad = 40}) {
    // const {nombre, edad = 40} = heroe;
    
    console.log(nombre, edad);
}

// imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Spiderman', 'Ironman'];
// const h1 = heroes[1];

const [h1, h2, h3] = heroes;
console.log(h3);