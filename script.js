const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');

function clear() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear);

function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.className = className;
  return pixel;
}

function addPixel(element) {
  const board = document.getElementById(element);
  for (let index = 0; index < 25; index += 1) {
    board.appendChild(createPixel('pixel'));
  }
}

addPixel('pixel-board');

function colorSelector(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', colorSelector);
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    pixels[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
}
