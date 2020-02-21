function leftpressd() {
    let leftindex=parseInt(document.getElementById("nobita").style.left);

    document.getElementById("nobita").style.left=leftindex-5+"px";
}

function rightpressd() {
    let leftindex=parseInt(document.getElementById("nobita").style.left);

    document.getElementById("nobita").style.left=leftindex+5+"px";
}
function uppressd() {
    let topindex = parseInt(document.getElementById("nobita").style.top);

    document.getElementById("nobita").style.top=topindex-5+"px";
}

function downpressd() {
    let topindex=parseInt(document.getElementById("nobita").style.top);

    document.getElementById("nobita").style.top=topindex+5+"px";
}

function move(a) {
    switch (a.keyCode){
        case 37 :
            leftpressd();
            break;
        case 38 :
            uppressd();
            break;
        case 39:
            rightpressd();
            break;
        case 40:
            downpressd();
    }}

function hanhdong() {
           window.addEventListener("keydown", move);


}