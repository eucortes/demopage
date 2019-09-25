$(document).ready(function () {

    //selector de tema
    let theme = $("#theme")

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css")
    })
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")
    })
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    })

    //scroll arriba
    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login false
    $("#login form").submit(function (e) {
        ///  $("boton_entrar").click(function(e){
        //     e.preventDefault()
        let form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name)
        //    console.log(form_name)

    })


    function ActualizaLogin() {
        let form_name = localStorage.getItem("form_name")
        if (form_name != null && form_name != undefined) {
            let about_parrafo = $("#about p")
            about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong><br>");
            about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>")
            $("#login").hide()
        } else {
            let about_parrafo = $("#about p")
            about_parrafo.html("");
            $("#login").show()

        }
    }
    ActualizaLogin()

    $("#logout").click(function (e) {
        e.preventDefault();
        localStorage.removeItem("form_name")
        //  location.reload
        ActualizaLogin()
        return false;
    })
})