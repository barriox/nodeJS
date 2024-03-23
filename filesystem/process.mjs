//recuperar argumentos
console.log(process.argv);

//controlar el proceso y su salida
//process.exit(0); //todo ha ido bien
//process.exit(1); //ha habido un error en el programa

//controlar eventos del proceso
process.on("exit", () => {
  //limpiar recursos
});

//current working directory, desde donde iniciamos el proceso, no dónde está
console.log(process.cwd());

//
console.log(process.env.PEPITO);
