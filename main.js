$("#header-home").on('click', function () {
    $("#about-me").hide();
    $("#education").hide();
    $("#experience").hide();
});
$("#header-about").on('click', function () {
    $("#about-me").show();
    $("#education").hide();
    $("#experience").hide();
});
$("#header-education").on('click', function () {
    $("#education").show();
    $("#about-me").hide();
    $("#experience").hide();
});
$("#header-experience").on('click', function () {
    $("#experience").show();
    $("#education").hide();
    $("#about-me").hide();
});