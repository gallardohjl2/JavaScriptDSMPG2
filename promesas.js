//Promesas 

const usuarioAutenticado = new Promise(
    (resolve, reject) => {
        const auth = false;
        console.log("Esperando respuesta");
        setTimeout(() => {

            if (auth) {
                resolve("Usuario Autenticado");
            } else {
                reject("No se pudo iniciar");
            }
        }, 5000);
    }
);

//console.log(usuarioAutenticado);

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))

    /*function cuadradoPromesa(value) {

    if (typeof value !== "number") {
        return Promise.reject(`Error el valor ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                value,
                result: Math.pow(value, 2)
            });
        }, 3000);
    })

}*/

const cuadradoPromesa = value =>{

    if (typeof value !== "number") {
        return Promise.reject(`Error el valor ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                value,
                result: Math.pow(value, 2)
            });
        }, 3000);
    })

}




cuadradoPromesa(2)
    .then((respuesta) => {
        console.log('Inicia Promesa');
        console.log(
            `
        Promesa: valor: ${respuesta.value} 
        cuadrado: ${respuesta.result}
        
        `
        );

        return cuadradoPromesa(3)
    })
    .then((respuesta) => {
        console.log('Inicia Promesa');
        console.log(
            `
           Promesa: valor: ${respuesta.value} 
           cuadrado: ${respuesta.result}
           
           `
        );

        return cuadradoPromesa("x")
    })
    .then((respuesta) => {
        console.log('Inicia Promesa');
        console.log(
            `
           Promesa: valor: ${respuesta.value} 
           cuadrado: ${respuesta.result}
           
           `
        );

        return cuadradoPromesa(5)
    })
    .then((respuesta) => {
        console.log('Inicia Promesa');
        console.log(
            `
           Promesa: valor: ${respuesta.value} 
           cuadrado: ${respuesta.result}
           
           `
        );
    })
    .catch(err => console.log(err))