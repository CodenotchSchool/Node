const fs = require("fs/promises");
const NOMBRE_FICHERO = "fichero.json";

let obj = {name: "Juana", surname: "Garcia", age: 24};

// fs.writeFile(NOMBRE_FICHERO, JSON.stringify(obj))
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
// .catch ( (err) => {
//     console.log(err);
// })

const fsAync = async () => {

    try
    {
        await fs.writeFile(NOMBRE_FICHERO, JSON.stringify(obj));
        console.log("Fichero guardado correctamente");
        let data = await fs.readFile(NOMBRE_FICHERO)
        console.log("Fichero leido correctamente");
        let miObj = JSON.parse(data);
        console.log(miObj);  
    }
    catch (err)
    {
        console.log(err);
    }
}

fsAync();
