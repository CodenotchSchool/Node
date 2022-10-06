const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const NOMBRE_FICHERO = "fichero.json";


rl.question("Dime tu nombre: ", (nombre) => {
    rl.question("Dime tu apellido: ", (apellido) => {
        rl.question("Dime tu edad: ", (edad) => {
            rl.close();
            let obj = {name: nombre, surname: apellido, age: edad};

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
        })
    })
    
})


