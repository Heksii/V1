var comicsans = false;

function f() {
    if (comicsans) {
        comicsans = false;
        document.getElementById("x").textContent="Professionel";
        document.getElementById("COMICSANS").style.fontFamily = "sans-serif";
    }else{
        comicsans = true;
        document.getElementById("x").textContent="Uprofessionel";
        document.getElementById("COMICSANS").style.fontFamily = "cursive";
    }
}