const input = document.querySelector("#validation-input");

input.addEventListener("blur", validationInput);

function validationInput(event) {  
  if (event.currentTarget.value.length === Number(input.dataset.length )) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }  
  else {    
    return input.classList.add("invalid");
  }
}