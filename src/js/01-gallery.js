// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(SimpleLightbox);
console.log(galleryItems);


const ul = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc,{ preview, original, description }) => acc + 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" />
 </a>`, '')

ul.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionDelay: 250, overlayOpacity: 0.5 });


// 1. Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm 
// (посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2. Використовуй свій JavaScript код з попередньої домашньої роботи, 
// але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.