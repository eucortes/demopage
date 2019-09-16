'use strict'
let promesa= new Promise((resolve,reject)=>{
    // if (false){
    //     resolve('Operación Exitosa')

    // }else{
    //     reject('ocurrió un error')
    // }
    setTimeout(()=>{
        resolve('Promesa REsuelta Correctamente');
    })
})

promesa
.then(response=>console.log('Response:',response))
.catch(error=>console.log('error: ', error))