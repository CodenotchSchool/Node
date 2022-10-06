const fs = require("fs/promises");
const readline = require("readline");
const readLinePromises = (pregunta) => 
{
    const question = new Promise ((resolve) =>
    {
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.question(pregunta, (dato) => 
        {
            resolve(dato);
            rl.close();
        })
    })

    return question;
}

const NOMBRE_FICHERO = "fichero.json";

// let obj = {name: "", surname: "", age: 0};

// readLinePromises("Dime tu nombre: ")
// .then( (nombre) =>
// {
//     obj.name = nombre;
//     return readLinePromises("Dime tu apellido: ");
// })
// .then( (apellido) =>
// {
//     obj.surname = apellido;
//     return readLinePromises("Dime tu edad: ");
// })
// .then( (edad) =>
// {
//     obj.age = edad;
//     return fs.writeFile(NOMBRE_FICHERO, JSON.stringify(obj))
// })
// .then ( () => 
// {
//     console.log("Fichero guardado correctamente");
//     return fs.readFile(NOMBRE_FICHERO)
// })
// .then ( (data) => 
// {
//     console.log("Fichero leido correctamente");
//     let miObj = JSON.parse(data);
//     console.log(miObj);
// })
// .catch( (error) =>
// {
//     console.log(error);
// })

const readLineAsyn = async () =>
{
    try
    {
        let obj = {name: "", surname: "", age: 0};
        obj.name = await readLinePromises("Dime tu nombre: ");
        obj.surname = await readLinePromises("Dime tu apellido: ");
        obj.age = await readLinePromises("Dime tu edad: ");

        await fs.writeFile(NOMBRE_FICHERO, JSON.stringify(obj));
        console.log("Fichero guardado correctamente");

        let data = await fs.readFile(NOMBRE_FICHERO);
        console.log("Fichero leido correctamente");

        let miObj = JSON.parse(data);
        console.log(miObj);
    }
    catch(err)
    {
        console.log(err);
    }
} 

readLineAsyn();