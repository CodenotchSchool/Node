const {Professional} = require("../helpers/professional");

let professional = null; 

const getStart = (req, resp) =>
{
    let respuesta = {error: true, codigo:200, mensaje: "Punto de Inicio"};
    resp.send(respuesta);
} 

const getProfessional = (req, resp) =>
{
    let respuesta;

    if (professional == null)
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
    }
    else
    {
        respuesta = professional
    }

    resp.send(respuesta);
} 

const postProfessional = (req, resp) =>
{
    let respuesta;

    if (professional == null)
    {
        professional = new Professional (req.body.nombre,
                                         req.body.apellido,
                                         req.body.profesion,
                                         req.body.nacionalidad,
                                         req.body.numeroOscars );

        respuesta = {error: false, codigo:200, mensaje: "Profesional Creado", resultado: professional};
    }
    else
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional ya existe"};
    }

    resp.send(respuesta);
} 


const putProfessional = (req, resp) =>
{
    let respuesta;

    if (professional != null)
    {
        professional.fistName = req.body.nombre;
        professional.lastName = req.body.apellido;
        professional.profession = req.body.profession;
        professional.nationality = req.body.nacionalidad;
        professional.oscarsNumber = req.body.numeroOscars;

        respuesta = {error: false, codigo:200, mensaje: "Profesional Modificado Correctamente", resultado: professional};
    }
    else
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
    }

    resp.send(respuesta);
} 

const deleteProfessional = (req, resp) =>
{
    let respuesta;

    if (professional != null)
    {
        professional = null;

        respuesta = {error: false, codigo:200, mensaje: "Profesional Eliminado Correctamente", resultado: professional};
    }
    else
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
    }

    resp.send(respuesta);
}

module.exports = {getStart, getProfessional, postProfessional, putProfessional, deleteProfessional};
