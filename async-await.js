//Async y await

function cuadradoPromesa1(value) {

    if (typeof value !== "number") {
        return Promise.reject(`Error el valor ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {

       
            resolve({
                value,
                result: Math.pow(value, 2)
            });
        
    })

}
const cuadradoPromesa2 = value =>{

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


async function funcionAsyncronaDeclarada(valor=1){
   try {

    console.log('Inicia Async Function');
    let obj = await cuadradoPromesa1(valor)
    console.log(
        `
       Promesa: valor: ${obj.value} 
       cuadrado: ${obj.result}
       
       `
    );

   
   } catch (error) {
    console.log(error);
   }
}

funcionAsyncronaDeclarada(5);

const funcionAsyncronaFlecha= async (valor=1)=>{
    try {
 
     console.log('Inicia Async Function');
     let obj = await cuadradoPromesa1(valor)
     console.log(
         `
        Promesa: valor: ${obj.value} 
        cuadrado: ${obj.result}
        
        `
     );
 
    
    } catch (error) {
     console.log(error);
    }
 }

 funcionAsyncronaFlecha(10)