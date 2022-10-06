const express = require("express");
const app = express();

app.get("/", (req, resp) => 
{
    console.log("Peticion Recibida del Cliente");
    console.log("Url: " + req.url);
    console.log("Método: " + req.method);
    console.log("User-Agent: " + req.headers["user-agent"]);
    resp.json({ok: true, message: "Recibido!"})
})

app.get("/bye", (req, resp) => 
{
    console.log("Peticion Recibida del Cliente");
    console.log("Url: " + req.url);
    console.log("Método: " + req.method);
    console.log("User-Agent: " + req.headers["user-agent"]);
    resp.json({ok: true, message: "Adios!"})
})


app.listen(3000);