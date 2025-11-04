let modal = document.getElementById("dialog")

//modal

function abrir(){
    modal.showModal()
    modal.style.display = "flex"
}
function fechar(){
    console.log("fechar")
    modal.close()
    modal.style.display = "none"
}

//darkmode

var root = document.querySelector(':root');
var darkmode = false;
function darkmodeToggle(){
    var corpo = document.body
    corpo.classList.toggle("darkmode");
}


function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
}

function mascara_cpf() {
    var cpf = document.getElementById("cpf").value
    console.log(cpf)
    cpf = cpf.slice(0, 14)
    console.log(cpf)
    document.getElementById("cpf").value = cpf

    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7]
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }
}

function mascara_rg() {
    var rg = document.getElementById("rg").value
    console.log(rg)
    rg = rg.slice(0, 12)
    console.log(rg)
    document.getElementById("rg").value = rg

    var rg_formatado = document.getElementById("rg").value
    if (rg_formatado[2] != ".") {
        if (rg_formatado[2] != undefined) {
            document.getElementById("rg").value = rg_formatado.slice(0, 2) + "." + rg_formatado[2];
        }
    }

    if (rg_formatado[6] != ".") {
        if (rg_formatado[6] != undefined) {
            document.getElementById("rg").value = rg_formatado.slice(0, 6) + "." + rg_formatado[6]
        }
    }

    if (rg_formatado[10] != "-") {
        if (rg_formatado[10] != undefined) {
            document.getElementById("rg").value = rg_formatado.slice(0, 10) + "-" + rg_formatado[10]
        }
    }
}

//localstorage

function salvarDados(){
    localStorage.setItem("nome", document.getElementById("nome").value)
    localStorage.setItem("endereco", document.getElementById("endereco").value)
    localStorage.setItem("telefone", tel_formatado);
    localStorage.setItem("cpf", cpf_formatado);
    localStorage.setItem("idade", document.getElementById("idade").value)
    localStorage.setItem("rg", rg_formatado)
}


addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("nome").innerHTML = localStorage.getItem("nome")
    document.getElementById("endereco").innerHTML = localStorage.getItem("endereco")
    document.getElementById("telefone").innerHTML = localStorage.getItem("telefone")
    document.getElementById("cpf").innerHTML = localStorage.getItem("cpf")
    document.getElementById("idade").innerHTML = localStorage.getItem("idade")
    document.getElementById("rg").innerHTML = localStorage.getItem("rg")    
})