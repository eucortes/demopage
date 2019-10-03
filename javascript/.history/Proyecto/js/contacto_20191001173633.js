$(document).ready(function () {

    $.validate({
        lang: 'es'
    });
    $("form input[name='date']").datepicker({ dateFormat: 'dd-mm-yy' });
})