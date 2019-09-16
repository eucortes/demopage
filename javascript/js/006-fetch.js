'use strict'
let usuarios=[]
fetch('https://reqres.in/api/users')
.then(data=>data.json()).then(losdatos=>{
    let usuarios=losdatos.data
    console.log(usuarios)
    let usuariosh1=document.querySelector('#usuarios')
    console.log(usuariosh1)
    usuarios.map((elusuario,i)=>{
        let objetoh3=document.createElement('h3')
        objetoh3.innerHTML=i+' - '+elusuario.first_name+' '+elusuario.last_name
usuariosh1.appendChild(objetoh3)
        console.log(i+' - '+elusuario.first_name+' '+elusuario.last_name)
    })
})