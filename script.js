 

function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';

  if (positionTop == 0) {
    clearInterval(interval);
    interval = setInterval(moveDown, 10);
  }
  else{
    circle.style.top = currentTop -1 + 'px';
  }
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';

  if (positionTop+200 == window.innerHeight){
    clearInterval(interval);
    interval = setInterval(moveUp, 10);
  }
  else{
    circle.style.top = currentTop + 1 + 'px'
  }
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px'
  if(positionLeft ==0){
    clearInterval(interval);
    interval  = setInterval(moveRight, 10);
  }
  else{
    circle.style.left = currentLeft - 1 + 'px'
  }
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
  if(positionLeft == window.innerWidth -200){
    clearInterval(interval);
    interval = setInterval(moveLeft, 10);
  }
  else {
    circle.style.left = currentLeft + 1 + 'px'
  }
}


var interval;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var rightPressed = false;
function myKeyDown(event) {

if (event.keyCode ==37) leftPressed = true;
if (event.keyCode == 38) upPressed = true;
if(event.keyCode == 40) downPressed = true;
if(event.keyCode == 39) rightPressed = true;

}
function myKeyUp(event){
  if (event.keyCode == 37) leftPressed = false;
  if (event.keyCode == 38) upPressed = false;
  if (event.keyCode == 40) downPressed = false;
  if (event.keyCode == 39) rightPressed = false;

}
function animation(){
  if(leftPressed == true) moveLeft();
  if(upPressed == true) moveUp();
  if(downPressed == true) moveDown();
  if(rightPressed == true) moveRight();

}
function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
  document.addEventListener('keyup', myKeyUp);
  interval = setInterval(animation, 5);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
