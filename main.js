$("#header-home").on('click', function () {
    $("#about-me").hide();
    $("#education").hide();
    $("#experience").hide();
    $("#header-name").css("display", "block")
    $("#header-name").css("float", "none")
    $("#header").css("background-color", "transparent")
    $("#header").css("position", "absolute")
    $("#nav-bar").css("margin-left", "100px")
    $("#header").css("top", "40%")
});
$("#header-about").on('click', function () {
    $("#about-me").show();
    $("#education").hide();
    $("#experience").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#header").css("background-color", "#0A1526")
    $("#header").css("position", "fixed")
    $("#nav-bar").css("margin-left", "50px")
    $("#header").css("top", "10px")
});
$("#header-education").on('click', function () {
    $("#education").show();
    $("#about-me").hide();
    $("#experience").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#header").css("background-color", "#0A1526")
    $("#header").css("position", "fixed")
    $("#nav-bar").css("margin-left", "50px")
    $("#header").css("top", "10px")
});
$("#header-experience").on('click', function () {
    $("#experience").show();
    $("#education").hide();
    $("#about-me").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#header").css("background-color", "#0A1526")
    $("#header").css("position", "fixed")
    $("#nav-bar").css("margin-left", "50px")
    $("#header").css("top", "10px")
});