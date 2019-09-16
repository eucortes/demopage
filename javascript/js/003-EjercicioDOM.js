'use strict'
window.addEventListener('load', () => {
    //console.log("DOM cargado")
    let formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', () => {
        console.log('evento submit')

        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let edad = document.querySelector('#edad').value
        console.log(nombre,apellidos,edad)
    })
})