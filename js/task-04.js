let counterValue = 0;
const value = document.querySelector("#value");

const onButtonDecrementClick = document.querySelector('[data-action="decrement"]');
const onButtonIncrementClick = document.querySelector('[data-action="increment"]');

onButtonDecrementClick.addEventListener("click", handleDecrement);
onButtonIncrementClick.addEventListener("click", handleIncrement);

function handleDecrement(event) {    
    counterValue -= 1;    
    return value.textContent = counterValue;
}

function handleIncrement(event) {    
    counterValue += 1;
    return value.textContent = counterValue;
}
