const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Leyendo primer archivo");
  const text = await readFile("./filesystem/archivo.txt", "utf-8");
  console.log("primer texto:", text);

  console.log("**** Hacemos cosas entre medias ****");

  console.log("Leyendo segundo archivo");
  const text2 = await readFile("./filesystem/archivo2.txt", "utf-8");
  console.log("segundo texto:", text2);
})();
