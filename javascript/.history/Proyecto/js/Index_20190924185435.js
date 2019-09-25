$(document).ready(function () {
    // if (window.location.href.indexOf('index') > -1) {
    //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        //   pager: false
    });

    //posts
    let posts = [
        {
            titulo: 'Prueba de Titulo 1',
            fecha: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut     labore     et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio. Sem fringilla ut morbi     tincidunt augue interdum velit. Risus viverra adipiscing at in tellus. Phasellus egestas tellus     rutrum tellus pellentesque eu tincidunt. Malesuada nunc vel risus commodo. Diam maecenas     ultricies     mi eget mauris. Nullam ac tortor vitae purus faucibus. Purus sit amet luctus venenatis lectus     magna     fringilla. Aliquet enim tortor at auctor urna nunc id cursus. Odio ut enim blandit volutpat     maecenas     volutpat blandit aliquam etiam.'
        },
        {
            titulo: 'Prueba de Titulo 2',
            fecha: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            contenido: 'Bibendum est ultricies integer quis auctor elit. Pharetra magna ac placerat vestibulum lectus    mauris. Pulvinar mattis nunc sed blandit libero. Scelerisque eleifend donec pretium vulputate.    Suspendisse faucibus interdum posuere lorem ipsum. Nulla facilisi morbi tempus iaculis urna.    Auctor    augue mauris augue neque gravida in fermentum. In nibh mauris cursus mattis molestie. Sem et    tortor    consequat id porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus mauris a diam.    Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Elementum integer enim    neque volutpat ac.'
        },
        {
            titulo: 'Prueba de Titulo 3',
            fecha: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            contenido: 'Aliquam sem et tortor consequat id porta nibh venenatis. Neque volutpat ac tincidunt vitae    semper    quis. Felis eget velit aliquet sagittis id consectetur purus ut. Pellentesque adipiscing commodo    elit at imperdiet dui. Sed sed risus pretium quam vulputate dignissim. Porta non pulvinar neque    laoreet suspendisse interdum consectetur libero. Ullamcorper malesuada proin libero nunc    consequat    interdum varius sit. Id donec ultrices tincidunt arcu. Massa eget egestas purus viverra accumsan    in.'
        },
        {
            titulo: 'Prueba de Titulo 4',
            fecha: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            contenido: 'Aliquam sem et tortor consequat id porta nibh venenatis. Neque volutpat ac tincidunt vitae    semper    quis. Felis eget velit aliquet sagittis id consectetur purus ut. Pellentesque adipiscing commodo    elit at imperdiet dui. Sed sed risus pretium quam vulputate dignissim. Porta non pulvinar neque    laoreet suspendisse interdum consectetur libero. Ullamcorper malesuada proin libero nunc    consequat    interdum varius sit. Id donec ultrices tincidunt arcu. Massa eget egestas purus viverra accumsan    in.'
        },
        {
            titulo: 'Prueba de Titulo 5',
            fecha: "Publicado el " + moment().format("dddd D") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
            contenido: 'Bibendum est ultricies integer quis auctor elit. Pharetra magna ac placerat vestibulum lectus    mauris. Pulvinar mattis nunc sed blandit libero. Scelerisque eleifend donec pretium vulputate.    Suspendisse faucibus interdum posuere lorem ipsum. Nulla facilisi morbi tempus iaculis urna.    Auctor    augue mauris augue neque gravida in fermentum. In nibh mauris cursus mattis molestie. Sem et    tortor    consequat id porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus mauris a diam.    Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Elementum integer enim    neque volutpat ac.'
        }
    ]

    posts.forEach((item, indice) => {
        let post = `
                    <article class="post">
                    <h2>${item.titulo}</h2>
                    <span class="fecha">${item.fecha}</span>
                    <p> 
                        ${item.contenido}
                    </p>
                    <a href="#" class="button-more"> Leer Más</a>
                </article>
                `
        $('#posts').append(post)
        //console.log(post)
    })
    //   }
    /* //selector de tema
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
 
 
     function actualizalogin() {
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
     actualizalogin()
 
     $("#logout").click(function (e) {
         e.preventDefault();
         localStorage.removeItem("form_name")
         //  location.reload
         actualizalogin()
         return false;
     })*/
})
