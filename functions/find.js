// const fs = require("fs");
// const data = fs.readFileSync("./taskData.json", "utf-8");
// let dataParseada = JSON.parse(data);
const {listar} = require("./list.js")

function find(dato){
    const titulos = listar();
    return titulos.includes(dato)
}

module.exports = {find}; 