const express = require("express");
const cors = require("cors");
const professionalRouters = require("./routers/professional.routers");
const professionalsRouters = require("./routers/professionals.routers");
const errorHandling = require("./error/errorHandling");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(professionalRouters);
app.use(professionalsRouters);
app.use((req, resp) => 
    {
        resp.status(404).json({error: true, 
                               codigo: 404, 
                               message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;
