let counterValue = 0;
const value = document.querySelector("#value");

const onButtonDecrementClick = document.querySelector('[data-action="decrement"]');
const onButtonIncrementClick = document.querySelector('[data-action="increment"]');

onButtonDecrementClick.addEventListener("click", () => {    
    counterValue -= 1;
    return value.textContent = counterValue;    
    
});
onButtonIncrementClick.addEventListener("click", () => {    
    counterValue += 1;
    return value.textContent = counterValue;
});


