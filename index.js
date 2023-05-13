var setaDireita = window.document.getElementById("seta-direita")
var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

 
function RolarDireita() {
    leo.style ="display:none"
    bruna.style="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex"
}

function RolarEsquerda() {
    leo.style ="display:flex"
    bruna.style="display:none"
    setaDireita.style="display:flex"
    setaEsquerda.style="display:none"
}

