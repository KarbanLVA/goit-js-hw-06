
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let randomColor = getRandomHexColor();
console.log(randomColor);

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick (event) {
  body.style.backgroundColor = randomColor;
  span.textContent = `- ${randomColor}`;
}