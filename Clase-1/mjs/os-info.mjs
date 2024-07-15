import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('informacion del sisitema operativo');
console.log('--------------------');


console.log('nombre del sistema operativo', platform());
console.log('version del sistema operativo', release());
console.log('Arquitectura', arch());
console.log(' CPUs', cpus()); //<---- vamos a poder escalar procesos en Node
console.log(' Memoria libre', freemem() / 1024/1024);
console.log('memoria Total', totalmem() / 1024/ 1024); 
console.log('uptime', uptime());