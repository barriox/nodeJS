import fs from "node:fs";

//Sync
const stats = fs.statSync("./archivo.txt");
console.log(
  "Es un archivo? ",
  stats.isFile(),
  "\nEs un directorio? ",
  stats.isDirectory(),
  "\nEs un enlace simbolico?",
  stats.isSymbolicLink(),
  "\nTamano: ",
  stats.size //en bytes
);
