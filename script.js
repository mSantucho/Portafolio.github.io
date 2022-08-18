function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    let x = document.getElementById("nav");
    x.className = "";
}


//funcion para menu responsive
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}


//barras de habilidades scrolling

window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica animacion a barra de habilidades

function efectoHabilidades (){
    let skills =document.getElementById("skills");
    let distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
    }
}