'use strict'

window.addEventListener('load',()=>{
    var boton =document.querySelector("#elboton")
    var botonstop =document.querySelector("#stop")
var parado=1
function cambia(){
var tiempo= setInterval(xfn,3000)//la variable se usa para detenerlo
}
   // console.log(boton)

    //var xfn=function (){
    function xfn(){
   //  console.log(boton)
       let bt= boton.style.background
        if(bt=="green"){
        boton.style.background="red"
    
        }   else{
            boton.style.background="green"
        }
    }
    

    function paraboton(){
        if (parado==0){
            clearInterval(tiempo);
            parado=1
        }else{
            tiempo= setInterval(xfn,3000)
            parado=0
        }
       }

    let input=document.querySelector('#campo_nombre')
    input.addEventListener('focus',()=>{console.log("dentro del input")})
    input.addEventListener('blur',()=>{console.log("estas fuera del input")})
    input.addEventListener('keydown',()=>{console.log("pulsando la tecla",String.fromCharCode(event.keyCode))})
    input.addEventListener('keypress',()=>{console.log("tecla presionada",String.fromCharCode(event.keyCode))})
    
    
    boton.addEventListener('click',xfn)
    boton.addEventListener('mouseover',xfn)
    botonstop.addEventListener("click",paraboton)

    setTimeout(xfn,300)
    //focus
    //blurX
    //keypress
    
    //boton.addEventListener('mouseout',xfn)
    /*
    function(){
    xfn
    
    })
    //xfn()
    */
})
