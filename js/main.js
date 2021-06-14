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

function addMensagem(){
    let muralMensagens = document.getElementById("mural-mensagens");
    let nomeInput = document.querySelector("#aprensetacao-nome");
    let mensagemInput = document.getElementById("apresentacao-mensagem");

    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;

    if(nome != null && nome != "" && mensagem != null && mensagem != ""){
        let divAMMs = document.createElement("div");
        let divAB = document.createElement("div");
        let divAI = document.createElement("div");
        let divAA = document.createElement("div");
        let divAC = document.createElement("div");//div avatar de conteudo
        let idAleatorio = "mensagem_"+Date.now();
    
        divAC.innerHTML = "<p>"+nome+"</p>\
            <p>"+mensagem+"</p>\
        ";
        divAC.setAttribute("class", "apresentacao--conteudo");
    
        divAA.innerHTML = nome.substr(0, 2);
        divAA.setAttribute("class", "apresentacao--avatar");
    
        divAB.innerHTML = "<button type='button' onclick='excluirMensagem("+idAleatorio+")'>Excluir</button>";
        divAB.setAttribute("class", "apresentacao---button");
    
        divAI.appendChild(divAA);
        divAI.appendChild(divAC);
        divAI.setAttribute("class", "apresentacao--info");
    
        divAMMs.appendChild(divAI);
        divAMMs.appendChild(divAB);
        divAMMs.setAttribute("class", "apresentacao-mural-mensagem");
        divAMMs.setAttribute("id", idAleatorio);
    
        muralMensagens.appendChild(divAMMs);

        mensagemInput.value=null;
        nomeInput.value=  null;
    }else{
        alert("Por favor, preencha o campo nome e mensagem");
    }

}

function excluirMensagem(idElemento){
    let muralMensagens = document.getElementById("mural-mensagens");
    let filhoASerExcluido = document.getElementById(idElemento);
    muralMensagens.removeChild(filhoASerExcluido.nodeValue);
}

var buttonFecharPopUp = document.getElementById("popup-fechar");

document.addEventListener('onload', mostrarOcultarPopUp('popupApresentacao'));
document.addEventListener('onload', mostrarOcultarPopUp('popup'));