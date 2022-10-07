const URL = "http://localhost:3000/professionals";

const postProfessional = async () =>
{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let profesion = document.getElementById("profesion").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let numeroOscars = document.getElementById("oscars").value;

    let professional = new Professional(nombre, apellido, profesion, nacionalidad, numeroOscars);

    let param = 
        {
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(professional),
            method: "POST"
        }

    let data = await fetch(URL, param);
    let result = await data.json();

    console.log(result);
}

const geProfessionals = async () =>
{
    let pos = document.getElementById("pos").value;
    let url = URL;
    if (pos != "")
    {
        url = url + "?pos=" + pos;
    }

    let param = 
    {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        method: "GET"
    }

    try
    {
        let data = await fetch(URL, param);
        let result = await data.json();
        console.log(result);

        for (let dato of result) 
        {
            document.getElementById("section").innerHTML += 
                    ` <div class="card-container"> ` +
                    `  <div class="card">` +
                         `<h3> ${dato.fistName}  ${dato.lastName} </h3>` +
                          `<ul>` +
                          `<li>Profesión: ${dato.proffesion} </li>` +
                          `<li>Nacionalidad: ${dato.nationality} </li>` +
                          `<li>Oscars:  ${dato.oscarsNumber}  </li>`+
                          `</ul>`+
                       `</div>`+     
                    `</div>`
        }
    }
    catch(error)
    {
        console.log(error);
    }

}