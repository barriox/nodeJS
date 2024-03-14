import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
  version,
  userInfo,
  homedir,
  hostname,
  machine,
  networkInterfaces,
} from "node:os";

console.log("Info sistema operativo", platform());
console.log("Version sistema operativo", release());
console.log("Arquitectura", arch());
console.log("CPUs", cpus());
console.log("Memoria libre", freemem() / 1024 / 1024);
console.log("Memoria total", totalmem() / 1024 / 1024);
console.log("Tiempo encendido", uptime() / 60 / 60 / 24);
console.log("Version so", version());
console.log("Info usuario", userInfo());
console.log("Directorio principal", homedir());
console.log("Host", hostname());
console.log("Machine", machine());
console.log("Interfaces de red", networkInterfaces());
