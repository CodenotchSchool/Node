const {Professional} = require("../helpers/professional");

let professionals = [new Professional("Tom", "Cruise", "actor", "estadounidense", 3)]; 

const getProfessionals = (req, resp) =>
{
    let respuesta;

    if (req.query.pos)
    {
        if (req.query.pos < professionals.length)
        {
            respuesta = [professionals[req.query.pos]]
        }
        else
        {
            respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
        }
    }
    else
    {
        respuesta = professionals
    }

    resp.send(respuesta);
} 

const postProfessionals = (req, resp) =>
{
    let respuesta;

    
    let professional = new Professional (req.body.nombre,
                                        req.body.apellido,
                                        req.body.profesion,
                                        req.body.nacionalidad,
                                        req.body.numeroOscars );

    professionals.push(professional);

    respuesta = {error: false, codigo:200, mensaje: "Profesional Creado", resultado: professionals}

    resp.send(respuesta);
} 


const putProfessionals = (req, resp) =>
{
    let respuesta;

    if (req.body.pos != undefined && req.body.pos < professionals.length)
    {
        let professional = new Professional (req.body.nombre,
                                             req.body.apellido,
                                             req.body.profesion,
                                             req.body.nacionalidad,
                                             req.body.numeroOscars );

        professionals.splice(req.body.pos, 1, professional);
       

        respuesta = {error: false, codigo:200, mensaje: "Profesional Modificado Correctamente", resultado: professionals};
    }
    else
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
    }

    resp.send(respuesta);
} 

const deleteProfessionals = (req, resp) =>
{

    let respuesta;

    if (req.body.pos != undefined && req.body.pos < professionals.length)
    {
        professionals.splice(req.body.pos, 1);
       
        respuesta = {error: false, codigo:200, mensaje: "Profesional Eliminado Correctamente", resultado: professionals};
    }
    else
    {
        respuesta = {error: true, codigo:200, mensaje: "El profesional no existe"};
    }

    resp.send(respuesta);
}

module.exports = {getProfessionals, postProfessionals, putProfessionals, deleteProfessionals};
