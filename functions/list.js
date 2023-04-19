const fs = require("fs");
const data = fs.readFileSync("./taskData.json", "utf-8");
let dataParseada = JSON.parse(data);

//esta función lista los titulos de cada tarea

function listar(){
    return dataParseada.map((tarea) => tarea.titulo)
}

module.exports = { listar }

