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