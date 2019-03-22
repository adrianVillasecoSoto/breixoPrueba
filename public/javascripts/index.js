$(document).ready(function () {

    var estaPulsadoMasSobremi = false;
    var estaPulsadoMasExperiencia = false;
    var estaPulsadoMasFormacion = false;

    $("#botonSobremi").click(function () {
        if (!estaPulsadoMasSobremi) {
            $(".contenedorfullsobremi").hide();
            estaPulsadoMasSobremi = true;
        } else {
            $(".contenedorfullsobremi").show();
            estaPulsadoMasSobremi = false;
        }

    });

    $("#botonExperiencia").click(function () {
        if (!estaPulsadoMasExperiencia) {
            $(".contenedorfullexperiencia").hide();
            estaPulsadoMasExperiencia = true;
        } else {
            $(".contenedorfullexperiencia").show();
            estaPulsadoMasExperiencia = false;
        }

    });

    $("#botonFormacion").click(function () {
        if (!estaPulsadoMasFormacion) {
            $(".contenedorfullformacion").hide();
            estaPulsadoMasFormacion = true;
        } else {
            $(".contenedorfullformacion").show();
            estaPulsadoMasFormacion = false;
        }

    });

    


});
