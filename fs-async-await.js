const fs = require('node:fs/promises');

// hacer una funcion autoinvocada para que funcione el await
// IIFE

(
  async () => {
    console.log('leyendo el primer archivo...')
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('primer texto:', text)
    console.log('primer texto:', text)
    console.log('---> Hacer cosas mientras lee el archivo')

    console.log('leyendo el segundo archivo...')
    const secontext = await fs.readFile('./segundo-archivo.txt', 'utf-8')
    console.log('segundo texto:', secontext)
    console.log('segundo texto', secontext)
};
)()
