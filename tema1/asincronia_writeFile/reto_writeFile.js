const fs = require("fs");
const NOMBRE_FICHERO = "fichero.json";

let obj = {name: "Juana", surname: "Garcia", age: 24};

fs.writeFile(NOMBRE_FICHERO, JSON.stringify(obj), (err) =>
{
    if (err)
    {
        console.log("No se ha podido escribir en el fichero");
    }
    else
    {
        console.log("Fichero guardado correctamente");

        fs.readFile(NOMBRE_FICHERO, (err, data) => 
        {
            if (err)
            {
                console.log("Error a la hora de leer el fichero");
            }
            else
            {
                console.log("Fichero leido correctamente");
                let miObj = JSON.parse(data);
                console.log(miObj);
            }
        })
    }
})




