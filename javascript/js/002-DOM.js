'use strict';

//obtener elemento por sus etiquetas

var TodosLosDivs=document.getElementsByTagName('div')
console.log(TodosLosDivs)
//TodosLosDivs[1].textContent
//var texto=TodosLosDivs[1].textContent;
console.log(TodosLosDivs[1])
console.log(TodosLosDivs[0].textContent)
//TodosLosDivs[2].innerHTML="Cambiado!"
Array.from(TodosLosDivs).forEach(function(id,pos,arr) {
   id.textContent="Cambiado"+pos
});
//obtener elemento por su clase
