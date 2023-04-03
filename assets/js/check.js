function check() {
    let state = document.getElementById("searchbox").style.display;
    if (state === 'none') {
        document.getElementById("searchbox").style.display = 'flex';
        document.getElementById("searchbox1").hidden = true;
    }
    if (state === 'flex') {
        document.getElementById("searchbox").style.display = 'none';
        document.getElementById("searchbox1").hidden = false;
    }
}

function check1() {
    if (!document.getElementById("checkbox1").style.backgroundImage) {
        document.getElementById("checkbox1").style.backgroundImage = 'url(assets/img/checkboxT.png)';
        document.getElementById("checkbox1").style.width = '20px';
        document.getElementById("checkbox1").style.height = '20px';
        document.getElementById("checkbox1").style.backgroundRepeat = 'no-repeat';
        document.getElementById("checkbox1").style.backgroundPosition = 'center';
    } else {
        document.getElementById("checkbox1").style.backgroundImage = '';
    }
}

function check2() {
    if (!document.getElementById("checkbox2").style.backgroundImage) {
        document.getElementById("checkbox2").style.backgroundImage = 'url(assets/img/checkboxT.png)';
        document.getElementById("checkbox2").style.width = '20px';
        document.getElementById("checkbox2").style.height = '20px';
        document.getElementById("checkbox2").style.backgroundRepeat = 'no-repeat';
        document.getElementById("checkbox2").style.backgroundPosition = 'center';
    } else {
        document.getElementById("checkbox2").style.backgroundImage = '';
    }
}

function check3() {
    if (!document.getElementById("checkbox3").style.backgroundImage) {
        document.getElementById("checkbox3").style.backgroundImage = 'url(assets/img/checkboxT.png)';
        document.getElementById("checkbox3").style.width = '20px';
        document.getElementById("checkbox3").style.height = '20px';
        document.getElementById("checkbox3").style.backgroundRepeat = 'no-repeat';
        document.getElementById("checkbox3").style.backgroundPosition = 'center';
    } else {
        document.getElementById("checkbox3").style.backgroundImage = '';
    }
}