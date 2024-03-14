import fs from "node:fs/promises"; // /promises seguido de fs al importar para utilizar promesas en lugar de callbacks

console.log("Leyendo primer archivo");

//utilizamos el .then para que se ejecute una vez termina de leer
fs.readFile("./filesystem/archivo.txt", "utf-8").then((text) => {
  console.log("primer texto:", text);
});

console.log("**** Hacemos cosas entre medias ****");

fs.readFile("./filesystem/archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto: ", text);
});
