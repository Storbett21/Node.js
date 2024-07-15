// forma sincrona
const fs = require('node:fs');

// const text = fs.readFileSync('./archivo.txt', 'utf-8');

// console.log(text);

// forma asincrona

console.log ('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8',(err, text)=>{ // <-- ejecutas este callback
console.log ('primer texto:', text)
})

console.log ('---> Hacer cosas mientras lee el archivo')

console.log ('leyendo el segundo archivo...')
fs.readFile('./segundo-archivo.txt', 'utf-8',(err, text)=>{ // <-- ejecutas este callback
console.log ('segundo texto:', text)
})
