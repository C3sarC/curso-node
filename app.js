const fs = require('fs');


let crearArchivo = (base, limite = 10) => {
    let data = '';

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`Debe introducir solo numero, base= ${base}, liminte= ${liminte}`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //const data = new Uint8Array(Buffer.from(data1));
        fs.writeFile(`archivos/multiplicacion-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(`Archivo creado ${base}x${limite}`)
        });
    });
}

let listarTabla = (base, liminte = 10) => {
    for (let i = 0; i <= liminte; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}