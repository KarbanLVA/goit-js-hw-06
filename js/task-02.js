const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createList = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => acc + `<li class="item">${ingredient}</li>`,"");
};
const list = document.querySelector("#ingredients");
list.insertAdjacentHTML("beforeend", createList(ingredients));



// const item1 = document.createElement("li");
// item1.classList.add("item");
// item1.textContent = "Potatoes";

// const item2 = document.createElement("li");
// item2.classList.add("item");
// item2.textContent = "Mushrooms";

// const item3 = document.createElement("li");
// item3.classList.add("item");
// item3.textContent = "Garlic";

// const item4 = document.createElement("li");
// item4.classList.add("item");
// item4.textContent = "Tomatos";

// const item5 = document.createElement("li");
// item5.classList.add("item");
// item5.textContent = "Herbs";

// const item6 = document.createElement("li");
// item6.classList.add("item");
// item6.textContent = "Condiments";


// list.append(item1, item2, item3, item4, item5, item6);
// console.log(list);

