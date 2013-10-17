var motiveCvs = $("#inserted_motive"),
    mainArea = $("#shirt_main_img"),
    sizeControls = $("#nwgrip, #negrip, #swgrip, #segrip, #ngrip, #egrip, #sgrip, #wgrip");
$(".shirt_variant_img").click(function () {
    var a = $(this).attr("src");
    $("#shirt_main_canvas").fadeOut("fast", function () {
        $(this).attr("src", a), $(this).fadeIn("fast")
    })
}), $(".shirt_motive").click(function () {
    var a = $(this).attr("src"),
        b = "<img id='inserted_image' src='" + a + "' alt ='' />";
    $(".shirt_main_img") ? ($("#inserted_motive span").remove(), $("#inserted_motive img").remove(), motiveCvs.append(b)) : motiveCvs.append(b)
}), motiveCvs.draggable({
    containment: "#shirt_main_img"
}), motiveCvs.mousedown(function () {
    cvsWidth = motiveCvs.width() / 100, cvsHeight = motiveCvs.height() / 100, sizeControls.show(), $(this).css("outline", "1px solid #ddd"), $(this).resizable({
        handles: {
            ne: "#negrip",
            se: "#segrip",
            sw: "#swgrip",
            nw: "#nwgrip"
        },
        aspectRatio: cvsWidth / cvsHeight,
        maxWidth: 190,
        maxHeight: 190,
        minWidth: 50,
        minHeight: 50
    }).css("height", "auto")
}), $("html").click(function () {
    sizeControls.hide(), motiveCvs.css("outline", "none")
}), $(".size_smaller").click(function () {
    motiveCvs.width(), $("#shirt_main_img").width();
    var a = "50px",
        b = "-=50px";
    motiveCvs.animate({
        width: b
    }), motiveCvs.css("min-width", a)
}), $(".size_bigger").click(function () {
    motiveCvs.width(), $("#shirt_main_img").width();
    var a = "190px",
        b = "+=50px";
    motiveCvs.animate({
        width: b
    }), motiveCvs.css("max-width", a)
}), $(".position_up").click(function () {
    var a = mainArea.position(),
        b = motiveCvs.position(),
        c = "-=30px";
    return b.top < a.top ? !1 : (motiveCvs.animate({
        top: c
    }), void 0)
}), $(".position_down").click(function () {
    var a = mainArea.height() - motiveCvs.height(),
        b = motiveCvs.position(),
        c = "+=30px";
    return b.top > a ? !1 : (motiveCvs.animate({
        top: c
    }), void 0)
}), $(".position_left").click(function () {
    var a = 0,
        b = motiveCvs.position(),
        c = "-=20px";
    return b.left < a ? !1 : (motiveCvs.animate({
        left: c
    }), void 0)
}), $(".position_right").click(function () {
    var a = mainArea.width() - motiveCvs.width(),
        b = motiveCvs.position(),
        c = "+=20px";
    return b.left > a ? !1 : (motiveCvs.animate({
        left: c
    }), void 0)
}), $("#motivetext").bind("keypress change", function () {
    var a = $(this).val();
    motiveCvs.html("<span>" + a + "</span>")
}), $(".black").click(function () {
    motiveCvs.find("span").css("color", "black")
}), $(".white").click(function () {
    motiveCvs.find("span").css("color", "white")
}), $(".red").click(function () {
    motiveCvs.find("span").css("color", "red")
}), $(".blue").click(function () {
    motiveCvs.find("span").css("color", "blue")
}), $(".green").click(function () {
    motiveCvs.find("span").css("color", "green")
}), $(".yellow").click(function () {
    motiveCvs.find("span").css("color", "yellow")
}), $(".purple").click(function () {
    motiveCvs.find("span").css("color", "purple")
}), $(".text_bigger").click(function () {
    motiveCvs.find("span").css("font-size", "+=2px")
}), $(".text_smaller").click(function () {
    motiveCvs.find("span").css("font-size", "-=2px")
}), $("#select-font").change(function () {
    var a = $(this).find("option:selected").attr("class");
    motiveCvs.find("span").toggleClass(a)
}), $("#creator").click(function () {
    var a = document.getElementById("final_image"),
        b = a.getContext("2d"),
        c = document.getElementById("shirt_main_canvas"),
        d = document.getElementById("inserted_image");
    b.drawImage(c, 0, 0);
    var e = $("#inserted_image").width(),
        f = $("#inserted_image").height(),
        g = $("#inserted_motive").position(),
        h = g.top,
        i = g.left,
        j = $("#inserted_motive span").css("font-size"),
        k = $("#inserted_motive span").css("font-family"),
        l = $("#inserted_motive span").css("color"),
        m = $("#inserted_motive span").text(),
        n = j + " " + k;
    b.font = n, b.fillStyle = l;
    var o = $("#inserted_motive").find("span");
    $.contains(document.documentElement, o[0]) ? b.fillText(m, i, h) : b.drawImage(d, i, h, e, f);
    var p = a.toDataURL("image/png");
    window.open(p)
}), $(function () {
    $("#tabs").tabs()
});