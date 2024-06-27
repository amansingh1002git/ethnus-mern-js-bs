
window.onload = init;

function init() {
    var animation;
    var car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = "0px";
}
function move() {
    car.style.left = parseInt(car.style.left)+10+'px';
    animation = setTimeout(move,20);
}
function stop(){
    clearTimeout(animation);
 }
