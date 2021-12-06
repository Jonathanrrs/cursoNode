const {response} = require('express');

const usuariosGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get API - controlador'
    });
};

const usuariosPost = (req, res) => {

    /* obtener data del body */
    // const body = req.body;
    const {nombre, edad} = req.body;


    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req, res) => {
    res.json({
        ok: true,
        msg: 'put API - controlador'
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API- controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}