
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const changeColor = getRandomHexColor()
  body.style.backgroundColor = changeColor;
  span.textContent = `- ${changeColor}`;  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}