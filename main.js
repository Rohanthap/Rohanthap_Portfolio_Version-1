$("#header-home").on('click', function () {
    $("#about-me").hide();
    $("#education").hide();
});
$("#header-about").on('click', function () {
    $("#about-me").show();
    $("#education").hide();
});
$("#header-education").on('click', function () {
    $("#education").show();
    $("#about-me").hide();
});