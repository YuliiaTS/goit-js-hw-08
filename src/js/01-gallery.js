import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const galleryImg = createGaleryItems(galleryItems);

function createGaleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class='gallery__item'>
        <a class='gallery__link' 
        href='${original}'>
        <img
        class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'
        />
        </a>
        </div>`
    )
    .join('');
}
galleryDiv.insertAdjacentHTML('beforeend', galleryImg);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
