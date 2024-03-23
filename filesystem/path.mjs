import path from "node:path";

/*
Nunca crear las rutas como './folder/subfolder'
Eso no funciona en Windows porque el separador es \
Para hacer las rutas utilizar path.join, utilizará el separador de cada so
*/
const filePath = path.join("folder", "subfolder", "anotherFolder", "text.txt");
console.log(filePath);

const fileName = path.basename(filePath); // devuelve 'text.txt'
console.log(fileName);
const fileName2 = path.basename(filePath, ".txt"); //devuelve 'text', quita la extensión .txt
console.log(fileName2);
