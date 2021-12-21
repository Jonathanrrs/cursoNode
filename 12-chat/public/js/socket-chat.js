var socket = io();

var params = new URLSearchParams(window.location.search);

if(!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        // console.log('usuarios conectados',resp);
        renderizarUsuarios(resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    // console.log('Servidor:', mensaje);
    renderizarMensajes(mensaje, false);
    scrollBottom();
});

/* Escuchar ca,bios de usuarios */
/* Cuando un usuario entra o sale del chat */
socket.on('listaPersona', function(personas) {
    // console.log('Servidor:', personas);
    renderizarUsuarios(personas);
});

/* Mensajes privados */

socket.on('mensajePrivado', function(mensaje) {
    console.log('mensaje privado', mensaje);
});