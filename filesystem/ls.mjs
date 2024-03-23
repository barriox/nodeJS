//sincrono
// import fs from "node:fs";
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error al leer el directorio", err);
//     return;
//   }
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

//asincrono
import fs from "node:fs/promises";
fs.readdir(".").then((files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
