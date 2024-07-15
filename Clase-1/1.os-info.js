const os = require('node:os');

console.log('informacion del sisitema operativo');
console.log('--------------------');


console.log('nombre del sistema operativo', os.platform());
console.log('version del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log(' CPUs', os.cpus()); //<---- vamos a poder escalar procesos en Node
console.log(' Memoria libre', os.freemem() / 1024 / 1024);
console.log('memoria Total', os.totalmem() / 1024 / 1024);
console.log('uptime', os.uptime());
