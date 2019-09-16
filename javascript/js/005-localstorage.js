'use strict'
//Localstorage
//comprobar disponibilidad de localstorage
if(typeof(Storage) !=='undefined'){
    console.log('Localstorage disponible')
}else{
    console.log('incompatible con Localstorage')
}
//guardar datos
localStorage.setItem('titulo','curso JS')
//recuperar elemento
console.log(localStorage.getItem('titulo'))

//guardar objeto
var usuario={nombre:'edgar',mail:'eu.cortes@gmail.com',web:'www.google.com'}
localStorage.setItem('json',JSON.stringify( usuario))

var otrousuario=JSON.parse( localStorage.getItem('json'))
console.log(otrousuario)

localStorage.removeItem('json')
localStorage.clear()