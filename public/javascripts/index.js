$(document).ready(function () {

    var estaPulsadoMasSobremi = false;
    var estaPulsadoMasExperiencia = false;
    var estaPulsadoMasFormacion = false;
    var estaPulsadoMasSkills = false;

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

    $("#botonskills").click(function () {
        if (!estaPulsadoMasSkills) {
            $(".contenedorfullskills").hide();
            estaPulsadoMasSkills = true;
        } else {
            $(".contenedorfullskills").show();
            estaPulsadoMasSkills = false;
        }

    });



});

var progreso = 0;
var idIterval = setInterval(function () {
    // Aumento en 10 el progeso
    progreso += 10;
    $('.progressbarjava').css('width', progreso + '%');

    //Si llegó a 100 elimino el interval
    if (progreso == 60) {
        clearInterval(idIterval);
    }
}, 300);

var progreso2 = 0;
var idIterval2 = setInterval(function () {
    // Aumento en 10 el progeso
    progreso2 += 10;
    $('.progressbarandroid').css('width', progreso2 + '%');

    //Si llegó a 100 elimino el interval
    if (progreso2 == 70) {
        clearInterval(idIterval2);
    }
}, 300);

var progreso3 = 0;
var idIterval3 = setInterval(function () {
    // Aumento en 10 el progeso
    progreso3 += 10;
    $('.progressbarhtml').css('width', progreso3 + '%');

    //Si llegó a 100 elimino el interval
    if (progreso3 == 60) {
        clearInterval(idIterval3);
    }
}, 300);

var progreso4 = 0;
var idIterval4 = setInterval(function () {
    // Aumento en 10 el progeso
    progreso4 += 5;
    $('.progressbarjavascript').css('width', progreso4 + '%');

    //Si llegó a 100 elimino el interval
    if (progreso4 == 20) {
        clearInterval(idIterval4);
    }
}, 300);
