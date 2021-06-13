
var divPaiParceiros = document.getElementById("parceiros");

function gerarListaParceiros(){
    let listaParceiros = ["Facebook", "Instagram", "Twitter", "Google", "Amazon", "Alibaba", "AliExpress", "Globo", "Toyota", "FIFA"]
    
    
    listaParceiros.forEach(
        parceiro => {
            let divNova = document.createElement('div');
            divNova.className = "parceiros-nome";
            
            let tagP = document.createElement('p');
            let tagParceiro = document.createTextNode(parceiro);
            tagP.appendChild(tagParceiro);
            divNova.appendChild(tagP);

            divPaiParceiros.appendChild(divNova);
        }
    )

}

document.body.onload = gerarListaParceiros;