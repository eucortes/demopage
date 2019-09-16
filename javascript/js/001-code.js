'use strict'
document.write('<h1>Hola Mundo</h1>');

function MostarAray(elementos,texto="") {
    document.write("<h1>Contenido del Array " + texto+"</h1>")
document.write("<ul>")
console.log(elementos)
elementos.forEach((elemento,indice) => {
    document.write("<li><strong>"+elemento+"</strong></li>")
});
document.write("</ul>")
}

//pedir 6 numeros
var numeros=[];
for (var i=0;i<=5;i++){
   numeros.push( parseInt( prompt("introduce un numero",0)))
}
MostarAray(numeros)
numeros.sort()
MostarAray(numeros,"ordenados texto")
numeros.sort((a,b)=>(a-b))
MostarAray(numeros,"ordenados numeros")
numeros.reverse()
MostarAray(numeros,"revertir")
document.write("Contar elementos: "+ numeros.length)
var busqueda =  parseInt( prompt("busca un numero",0))
var buscado=numeros.findIndex(numero=>numero==busqueda)
if(buscado>-1){
   document.write("encontrado en la posicion " + buscado) 
}else{
    document.write("no encontrado " ) 
}