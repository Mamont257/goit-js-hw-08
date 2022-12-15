// Add imports above this line
import SimpleLightbox from "simplelightbox";
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