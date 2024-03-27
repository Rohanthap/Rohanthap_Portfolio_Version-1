$("#header-home").on('click', function () {
    $("#about-me").hide();
    $("#education").hide();
    $("#experience").hide();
    $("#header-name").css("display", "block")
    $("#header-name").css("float", "none")
    $("#nav-bar").css("position", "absolute")
    $("#nav-bar").css("margin-left", "100px")
    $("#nav-bar").css("top", "40%")
});
$("#header-about").on('click', function () {
    $("#about-me").show();
    $("#education").hide();
    $("#experience").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#nav-bar").css("position", "static")
    $("#nav-bar").css("margin-left", "50px")
    $("#nav-bar").css("top", "10px")
});
$("#header-education").on('click', function () {
    $("#education").show();
    $("#about-me").hide();
    $("#experience").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#nav-bar").css("position", "static")
    $("#nav-bar").css("margin-left", "50px")
    $("#nav-bar").css("top", "10px")
});
$("#header-experience").on('click', function () {
    $("#experience").show();
    $("#education").hide();
    $("#about-me").hide();
    $("#header-name").css("display", "inline")
    $("#header-name").css("float", "left")
    $("#nav-bar").css("position", "static")
    $("#nav-bar").css("margin-left", "50px")
    $("#nav-bar").css("top", "10px")
});