function upkeypush(){
    let element=document.getElementById("mooc");
    element.style.top=parseInt(element.style.top) - 20 +'px';
}
function downkeypush(){
    let element = document.getElementById("mooc");
    element.style.top=parseInt(element.style.top) + 20 +'px';
}
function leftkeypush() {
    let element = document.getElementById("mooc");
    element.style.left=parseInt(element.style.left) - 20 +'px';
}
function righkeypush() {
    let element = document.getElementById("mooc");
    element.style.left=parseInt(element.style.left) + 20 +'px';
}
function movement(Go){
    switch (Go.keyCode){
        case 65:
            leftkeypush();
            break;
        case 68:
            righkeypush();
            break;
        case 87:
            upkeypush();
            break;
        case 83:
            downkeypush();
            break;
    }
}
function doReady(){
    window.addEventListener('keydown',movement);
}