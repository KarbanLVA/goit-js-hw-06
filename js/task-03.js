const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector(".gallery");
const imageItem = images.reduce((acc, {url, alt}) => acc + `<li class = gallery__item><img alt = ${alt} src = ${url} width = 300></li>`, "");
console.log(imageItem);

listGallery.insertAdjacentHTML("beforeend", imageItem);


// const createMarkup = (images) => {
//   return images.map((image) => {
//     const item = document.createElement("li");
//     const img = document.createElement("img");
//     img.src = image.url;    
//     img.alt = image.alt;
//     img.width = 300;
//     item.appendChild(img);
//     return item;
//   });
// };
// const listGallery = document.querySelector(".gallery");
// listGallery.append(...createMarkup(images));
