$(document).ready(function(){
    $(".perros").show();
    $(".gatos").show();
    $(".peces").show();

    $("#btn-ver-perros").click(function(){
        $(".perro").show();
        $(".gato").hide();
        $(".pez").hide();
        $("#btn-ver-perros").addClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
    });

    $("#btn-ver-gatos").click(function(){
        $(".perro").hide();
        $(".gato").show();
        $(".pez").hide();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").addClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
    });

    $("#btn-ver-peces").click(function(){
        $(".perro").hide();
        $(".gato").hide();
        $(".pez").show();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").addClass('btn-success');
    });

    $("#btn-eliminar-filtros").click(function(){
        $(".perro").show();
        $(".gato").show();
        $(".pez").show();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
    });
});