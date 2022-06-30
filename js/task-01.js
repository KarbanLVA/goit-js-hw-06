
const list = document.querySelector("#categories");
console.log("Number of categories:", list.children.length);

const title = document.querySelectorAll("h2");
console.log("Category:", title[0].textContent);
console.log("Elements:", list.children[0].lastElementChild.children.length);

console.log("Category:", title[1].textContent);
console.log("Elements:", list.children[1].lastElementChild.children.length);

console.log("Category:", title[2].textContent);
console.log("Elements:", list.children[2].lastElementChild.children.length);