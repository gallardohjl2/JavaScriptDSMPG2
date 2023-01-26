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