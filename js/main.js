var cabecalho = document.getElementById("cabecalho");
var tagHtml = document.querySelector("html");
var menuEstaFixo = false;
var linkMenu = document.querySelector(".menu > a");

function menuFixado(){

    if(tagHtml.scrollTop > 80 && !menuEstaFixo){
        menuEstaFixo = true;
        cabecalho.style.position = "fixed";
        cabecalho.style.backgroundColor = "#cfecf4";
        cabecalho.style.top = 0;
    }else if (tagHtml.scrollTop <= 80 && menuEstaFixo){
        menuEstaFixo = false;
        cabecalho.style.position = "relative";
        cabecalho.style.backgroundColor = "transparent";
    }
}

function mostrarOcultarPopUp(idPopup){
    let popUp = document.getElementById(idPopup);
    let arrayClass = popUp.getAttribute("class").split(" ");

    if(arrayClass.includes("ocultar")){
        popUp.classList.remove("ocultar");
    }else{
        popUp.classList.add("ocultar");
    }
}

var buttonFecharPopUp = document.getElementById("popup-fechar");
// document.body.onload = mostrarOcultarPopUp('popupApresentacao');
// document.body.onload = mostrarOcultarPopUp('popup');

document.addEventListener('onload', mostrarOcultarPopUp('popupApresentacao'));
document.addEventListener('onload', mostrarOcultarPopUp('popup'));