const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", onChangeFontSizeInput);

text.style.fontSize = `${fontSizeControl.value}px`;

function onChangeFontSizeInput() {
   text.style.fontSize = `${fontSizeControl.value}px`;
}



// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");

// input.addEventListener("input", changeFontSize);

// span.style.fontSize = `${input.value}px`;

// function changeFontSize() {
//   span.style.fontSize = `${input.value}px`;
// }