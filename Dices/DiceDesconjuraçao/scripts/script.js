function Sanidade() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='65';
    exibir()

    dice1.innerHTML =
    '<p id="aS"> <br> </p>';

}

function RolarS() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.getElementById("res");
    random = Math.random() * 100;
    var atributos = 65
    answer.innerHTML += Math.round(random) + "<br>";
    if (random <= atributos / 5) {
        answer.innerHTML += "Sucesso Extremo! <br>";
    } else if (random <= atributos / 2) {
        answer.innerHTML += "Sucesso Bom! <br>";
    } else if (random <= atributos) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else if (random > atributos) {
        answer.innerHTML += "Fracasso <br>";
    }
    
}

function Destreza() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='12';
    exibir()

    dice1.innerHTML =
    '<p id="aD"> <br> </p>';
}

function RolarD() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.getElementById("res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 12
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 14) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 8) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}


function Encontrar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='9';
    exibir()

    dice1.innerHTML =
    '<p id="aE"> <br> </p>';
}

function RolarE() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 9
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 11) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}



function ArmasDeFogo() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='14';
    exibir()

    dice1.innerHTML =
    '<p id="aC"> <br> </p>';
}

function RolarA() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 14
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 6) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "fracasso <br>";
    }
}


function Esquivar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='19';
    exibir()


    dice1.innerHTML =
    '<p id="aEd"> <br> </p>';
}

function RolarEs() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 7
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 17) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}



function Furtividade() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='9';
    exibir()
    dice1.innerHTML =
    '<p id="aF"> <br> </p>';
}

function RolarF() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 9
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 11) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}


function Labia() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='6';
    exibir()

    dice1.innerHTML =
    '<p id="aT"> <br> </p>';
}

function RolarL() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 6
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 17) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 14) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}


function Luta() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarLu() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}


function Medicina() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarM() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Normal! <br>"
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Força() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='11';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarFo() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 11
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 9) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Constituição() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='11';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarC() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 11
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 9) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Tamanho() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='7';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarT() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 7
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 17) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Intimidação() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='12';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarI() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 12
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 14) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 8) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Sorte() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='9';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarSo() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 9
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 11) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Aparencia() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='7';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarA() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 7
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 17) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Educação() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='14';
    exibir()

    dice1.innerHTML =
    '<p id="aC"> <br> </p>';
}

function RolarEd() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 14
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 6) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "fracasso <br>";
    }
}

function Poder() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='11';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarP() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 11
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 9) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Antropologia() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarAn() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Arqueologia() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarAr() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Arremessar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='10';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarArr() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 10
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 10) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Arte_e_Oficio() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='9';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarAO() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 9
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 11) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Avaliação() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarAv() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Charme() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='10';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarCh() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 10
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 10) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Chaveiro() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarCha() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Ciência() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarCi() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Contablidade() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarCo() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Concerto() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='2';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarCon() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 2
    if (random > 19) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Direito() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarDi() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Dirigir() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='11';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarDir() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 11
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 9) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Disfarce() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarDis() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Eletronica() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarEl() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Escalar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarEsc() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Escutar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarEscu() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Exposição_Paranormal() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarEP() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Historia() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarH() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Lingua() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='14';
    exibir()

    dice1.innerHTML =
    '<p id="aC"> <br> </p>';
}

function RolarLi() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 14
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 13) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 6) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "fracasso <br>";
    }
}

function Mundo_Natural() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='5';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarMu() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 5
    if (random > 19) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Natação() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='2';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarN() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 2
    if (random > 19) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 18) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Navegação() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='4';
    exibir()


    dice1.innerHTML =
    '<p id="aSo"> <br> </p>';
}

function RolarMu() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 4
    if (random > 18) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 16) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Nivel_de_Credito() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='11';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarNC() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 11
    if (random > 18) {
        answer.innerHTML += "Sucesso Extremo! <br>"
    } else if (random > 15) {
        answer.innerHTML += "Sucesso Bom <br>";
    } else if (random > 9) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Ocultismo() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarO() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function Máquinario() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById('valor').innerHTML='1';
    exibir()

    dice1.innerHTML =
    '<p id="aP"> <br> </p>';
}

function RolarM() {
    document.querySelector("body").style.overflow = 'auto';
    var answer = document.querySelector("div#res");
    random = Math.random() * 20;
    answer.innerHTML += Math.round(random) + "<br>";
    var atributos = 1
    if (random > 19) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else {
        answer.innerHTML += "Fracasso <br>";
    }
}

function recomecar() {
    var dice1 = document.querySelector("p#dado1");
    document.getElementById("Desconjuração").style.opacity = "100%";
    document.getElementById("Desconjuração").style.height = "214px";
    document.getElementById("slider").style.opacity = "100%";
    document.getElementById("slider").style.height = "214px";
    document.getElementById("valor").style.opacity= "0%";
    document.getElementById("valor").style.height = "0px";
    document.getElementById("valor").style.position = "absolute";
    document.getElementById("limpar").style.opacity = "0%";
    document.getElementById("res").style.position = "relative"
    document.getElementById("res").style.bottom = "10000000px"

    dice1.innerHTML = ''

}

function exibir() {
    document.getElementById("slider").style.opacity = "0%";
    document.getElementById("slider").style.height = "0px";
    document.getElementById("valor").style.opacity= "100%";
    document.getElementById("valor").style.position= "relative";
    document.getElementById("valor").style.height= "50px";
    document.getElementById("valor").style.width= "50px";
    document.getElementById("limpar").style.opacity = "100%";
    document.getElementById("limpar").style.top = "-50px";
    document.getElementById("res").style.position = "relative"
    document.getElementById("res").style.top = "0px"
    document.getElementById("res").style.opacity = "100%"
    document.getElementById("res").style.background = 'darkred'; 
    document.getElementById("res").style.borderRadius = '15px';
    document.getElementById("res").style.padding = '35px';
    document.getElementById("res").style.width = '100px';
    document.getElementById("res").style.height = 'auto';
    document.getElementById("res").style.margin = 'auto';
    document.getElementById("res").style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.719)';
    document.getElementById("res").style.textAlign = 'center';
    document.getElementById("res").style.color = 'white';   
    document.getElementById("body").style.overflowX = 'hidden'
}

function limpar() {
    var answer = document.getElementById("res");
    answer.innerHTML = "";
}