$(document).ready(function () {
    $("button").tooltip()
})

$('#btnEmail').click(function () {

    alert("Correo enviado correctamente")
})

$("h3").click(function () {

    $(this).css({
        "color": "red",
        "font-size": "2rem"
    })
})

$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})