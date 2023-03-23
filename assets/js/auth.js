function authclick() {
    document.getElementById("qwe").hidden = true;
    document.getElementById("loged").hidden = false;
}

function exitclick() {
    document.getElementById("qwe").hidden = false;
    document.getElementById("loged").hidden = true;
    document.getElementById("qwer").hidden = true;
}

function menuclick() {
    let state = document.getElementById("authmenu").style.display;
    console.log(state);
    if (state === 'none')
        document.getElementById("authmenu").style.display = 'flex';
    if (state === 'flex')
        document.getElementById("authmenu").style.display = 'none';
}

