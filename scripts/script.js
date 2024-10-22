let menuVisible = false;
//funcion que oculta y muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //para ocultar el menu una vez que se seleccione
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//funcion que aplica las animaciones de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("CSHARP");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Python");
        habilidades[3].classList.add("NodeJs");
        habilidades[4].classList.add("Dart");
        habilidades[5].classList.add("Figma");
    }
}

window.onscroll = function () {
    efectoHabilidades();
}