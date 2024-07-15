import { readFile } from 'node:fs/promises';


console.log ('leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log ('primer texto:', text)
    console.log ('primer texto:', text)
console.log ('---> Hacer cosas mientras lee el archivo')

console.log ('leyendo el segundo archivo...')
const secontext = await readFile('./segundo-archivo.txt', 'utf-8')
    console.log ('segundo texto:', secontext)
        console.log ('segundo texto', text) 
