document.getElementById("btn").onclick = function () {
    if (document.getElementById("menu").style.visibility == "visible") {
        document.getElementById("menu").style.visibility = "hidden";
    }
    else {
        document.getElementById("menu").style.visibility = "visible"
    }
}