'use strict'
let promesa= new Promise((resolve,reject)=>{
    // if (false){
    //     resolve('Operaci�n Exitosa')

    // }else{
    //     reject('ocurri� un error')
    // }
    setTimeout(()=>{
        resolve('Promesa REsuelta Correctamente');
    })
})

promesa
.then(response=>console.log('Response:',response))
.catch(error=>console.log('error: ', error))