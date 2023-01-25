// Objetos Literales
const usuario = {
    nombre : "José Luis",
    apellido: "Gallardo",
    edad: 30,
    direccion: {
        pais: 'Mexico',
        ciudad: 'Macua',
        calle: "principal 45"
    },
    amigos: ['Pepe','Toño','Sergio'],
    active: true,
    enviarMail: function(){
        return "Enviando email"
    },
    enviarMail2(){
        return 'Enviando email2'
    }
    
}

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.direccion);
console.log(usuario.direccion.ciudad);
console.log(usuario.amigos);
console.log(usuario.amigos[0]);
console.log(usuario.enviarMail);
console.log(usuario.enviarMail());
console.log(usuario.enviarMail2());

console.log('Nombre del Usuario: ' + usuario.nombre);

const salida = `Nombre del Usuario ${usuario.nombre}`;

console.log(salida);

const salida2 = 'Nombre de usuario: ' + usuario.nombre +
              "\nApellido: " + usuario.apellido + 
              '\n' + "Edad: " + usuario.edad + 
              "\nDireccion - País: " + usuario.direccion.pais +
              "\nDirección - Ciudad: " + usuario.direccion.pais +
              "\nDirección - Calle: " + usuario.direccion.calle +
              "\nAmigo 1: " + usuario.amigos[0] + 
              "\nAmigo 2: " + usuario.amigos[1] +
              "\nAmigo 3: " + usuario.amigos[2] + 
              "\nActivo: " + usuario.active + 
              "\nFunción 1: " + usuario.enviarMail() + 
              "\nFunción 2: " + usuario.enviarMail2();

console.log(salida2);


const salida3 = 
`
Nombre de usuario: ${usuario.nombre} 
Apellido: ${usuario.apellido} 
edad: ${usuario.edad}
direccion - país: ${usuario.direccion.pais}
dirección - ciudad: ${usuario.direccion.ciudad}
dirección - calle: ${usuario.direccion.calle}
Amigo 1: ${usuario.amigos[0]}
Amigo 2: ${usuario.amigos[1]}
Amigo 3: ${usuario.amigos[2]}
Activo: ${usuario.active}
función 1: ${usuario.enviarMail()}
función 2: ${usuario.enviarMail2()}
`
console.log(salida3);
