'use strict'

$(document).ready(()=>{
//selector de id
//let rojo=
/* $('#rojo').css('background','red').css('color','white')
$('#verde').css('background','green').css('color','white')
$('#amarillo').css('background','yellow').css('color','black')
$('.sinclase').css('background','blue').css('color','white')//.css("border","solid black")
$('.zebra').css('background','blue').css('color','white') */
let clase =$('.zebra')
clase.css("border","dashed")


$('.sinclase').click(function(){ 
    console.log('click clase')
    $(this).addClass('zebra')//ojo!! en los eventos no trabaja con funciones de flecha debe indicarse function en el callback
})
//console.log($('#rojo'))
  //  console.log("jquery y la página cargados")

  let parrafos=$('p').css('cursor','pointer')
  parrafos.click(function(){
      var that=$(this)
      if (!that.hasClass('grande')){
          that.addClass('grande')
      }else{
        that.removeClass('grande')
      }
  })
})
