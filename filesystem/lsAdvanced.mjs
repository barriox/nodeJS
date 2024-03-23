import fs from "node:fs/promises";
import path from "node:path";
import pc from "picocolors";
const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    /*usamos asincronia secuencial porque no podemos seguir haciendo 
    en paralelo los procesos siguientes sin leer antes el directorio,
    */
    files = await fs.readdir(folder);
  } catch {
    // salimos si no existe el directorio
    console.error(pc.red("No se pudo leer el directorio ", folder));
    process.exit(1);
  }
  //recuperamos en paralelo (async) la info de todos los archivos
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      //pausamos la ejecucion hasta recuperar toda la informacion de cada archivo
      stats = await fs.stat(filePath);
    } catch {
      console.error("No se pudo leer el archivo", filePath);
      process.exit(1);
    }
    const isDir = stats.isDirectory();
    const fileType = isDir ? "d" : "-";
    const size = stats.size.toString();
    const lastMod = stats.mtime.toLocaleString();
    return `${fileType} ${pc.blue(file.padEnd(20))}${size
      .padEnd(5)
      .padStart(10)} ${pc.yellow(lastMod)}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}
ls(folder);
