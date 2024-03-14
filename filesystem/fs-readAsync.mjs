import fs from "node:fs";
console.log("Leyendo primer archivo");
//Como hay un callback que directamente recibe el texto ya no es necesario asignar el valor a una constante
fs.readFile("./filesystem/archivo.txt", "utf-8", (err, text) => {
  //ejecutamos el callback
  //en el callback tenemos info de algún error si lo ha habido, además del texto leído,
  //el código que haya fuera de este callback se sigue ejecutando hasta que esto termine de leer
  console.log("primer texto:\n", text);
});
//esta parte del codigo se ejecutara antes de "primer texto"
console.log("Hacemos cosas entre medias");
fs.readFile("./filesystem/archivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto: \n", text);
});

/*En los modulos nativos sin promesas nativas
const { promisify } = require("node:util");
const readFilePromise = promisify(fs.readFile);
fs.readFilePromise("./archivo.txt", "utf-8").then((text) => {
  console.log(`Texto en Promises: ${text}`);
});
*/
