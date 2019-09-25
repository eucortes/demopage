$(document).ready(function () {

    //let reloj =moment().format("HH:mm:ss")
    //$('#reloj').html(reloj)
    setInterval(function () {
        $('#reloj').html(moment().format("HH:mm:ss"))
    }, 1000)
})
