$(document).ready(function () {

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });
})