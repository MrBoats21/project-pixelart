let colors = document.getElementsByClassName('color')
let pixels = document.getElementsByClassName("pixel")
let button = document.getElementById("clear-board")

button.addEventListener("click", clear)

function clear() {
    for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = "white";
  }
}

addPixel("pixel-board")


function addPixel(element) {
    let board = document.getElementById(element)
    for(let index = 0; index < 25; index += 1) {
        board.appendChild(createPixel("pixel"))
    }
}

function createPixel(className) {
    let pixel = document.createElement("div");
    pixel.className = className;
    return pixel;
}

for(let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener("click", colorSelector)
}

function colorSelector(event) {
    for(let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove("selected")
    }
    event.target.classList.add("selected")
}

for(let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener("click", function() {
        pixels[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
    })
}

