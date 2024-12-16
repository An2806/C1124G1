let im0bj = null;
im0bj = document.getElementById('myImage');
function init() {
    img0bj = document.getElementById('myImage');
    im0bj.style.position = 'relative';
    img0bj.style.left = '0px';
}
function moveRight() {
    img0bj.style.left = parsentInt(im0bj.style.left) + 10 + 'px';
}
window.onload = init;
