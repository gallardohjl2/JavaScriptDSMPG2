function saludo(){
    console.log("Hola Mundo");
}

saludo();

function saludo2(){
    return 'Hola Mundo';
}

const result = saludo2();
console.log(result);

console.log(saludo2());

function saludo3(){
    return function (){
        return 'Hola 3';
    }
}

console.log(saludo3());
console.log(saludo3()());