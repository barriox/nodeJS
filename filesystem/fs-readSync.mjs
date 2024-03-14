import fs from "node:fs";

//readFileSync("./archivo.txt") no se entenderia, devuelve bytes
console.log("Leyendo primer archivo (1 linea)");
const text = fs.readFileSync("./filesystem/archivo.txt", "utf-8");
console.log(text);

//Vemos que no podemos hacer cosas mientras lee los archivos,
//opera de forma secuencial
console.log("Hacemos cosas");

console.log("Leyendo segundo archivo (varias lineas)");
const text2 = fs.readFileSync("./filesystem/archivo2.txt", "utf-8");
console.log(text2);
