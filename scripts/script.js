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


// Función para abrir un PDF en una nueva pestaña
function abrirPDF(url) {
    window.open(url, '_blank');
}

// Asigna la funcionalidad a los botones
document.getElementById('leerEspecificacion').addEventListener('click', function () {
    abrirPDF('../Pdf/Especificación de Requisitos del Software (SRS).pdf');
});

document.getElementById('leerArquitectura').addEventListener('click', function () {
    abrirPDF('../Pdf/Diseño de Arquitectura de Software.pdf');
});

document.getElementById('leerDisenoDetallado').addEventListener('click', function () {
    abrirPDF('../Pdf/Diseño Detallado del Software.pdf');
});

document.getElementById('leerManualUsuario').addEventListener('click', function () {
    abrirPDF('../Pdf/Manual de Usuario.pdf');
});

document.getElementById('leerManualMantenimiento').addEventListener('click', function () {
    abrirPDF('../Pdf/Manual de Mantenimiento.pdf');
});

document.getElementById('leerDocumentaconPruebas').addEventListener('click', function () {
    abrirPDF('../Pdf/DocumentaconPruebas.pdf');
});

document.getElementById('leerPlandeGestióndeConfiguracion').addEventListener('click', function () {
    abrirPDF('../Pdf/Plan de Gestión de Configuración.pdf');
});

document.getElementById('leerPlandeGestiondeProyectos').addEventListener('click', function () {
    abrirPDF('../Pdf/Plan de Gestión de Proyectos.pdf');
});

document.getElementById('leerGuiadeImplementacion').addEventListener('click', function () {
    abrirPDF('../Pdf/Guía de Implementación.pdf');
});

// Función para descargar el archivo .rar
document.getElementById('descargarSimulador').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'https://www.mediafire.com/file/yd52rkt5squ4a8m/Static_Balance.zip/file'; // Asegúrate de reemplazar esta ruta
    link.download = 'simulador.rar'; // Nombre del archivo que se descargará
    link.click();
});