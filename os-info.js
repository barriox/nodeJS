const os = require("node:os");

console.log("Info sistema operativo", os.platform());
console.log("Version sistema operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("Tiempo encendido", os.uptime() / 60 / 60 / 24);
console.log("Version so", os.version());
console.log("Info usuario", os.userInfo());
console.log("Directorio principal", os.homedir());
console.log("Host", os.hostname());
console.log("Machine", os.machine());
console.log("Interfaces de red", os.networkInterfaces());
