const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", onChangeFontSizeInput);

text.style.fontSize = `${fontSizeControl.value}px`;

function onChangeFontSizeInput() {
   text.style.fontSize = `${fontSizeControl.value}px`;
}



