function onsearchbox() {
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

function onsearchbox1() {
    let state = document.getElementById("searchbox").style.display;
    if (state === 'flex') {      
        document.getElementById("searchbox").style.display = 'none';
        document.getElementById("searchbox1").hidden = false;
    }
} 