const fs = require("fs");

let obj = {name: "Javier", surname: "Garcia", age: 24};

fs.writeFile("fichero.json", JSON.stringify(obj), (err) =>
{
    if (err)
    {
        console.log("No se ha podido escribir en el fichero");
    }
    else
    {
        console.log("Fichero guardado correctamente");
    }
})