import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => 
        `<a href="${image.largeImageURL}" class="gallery_item">
        <image src="${image.WebformatURL}" alt="${image.tags}" class="gallery_image" />
        <div class="gallery_info">
        <p><b>Likes:</b>${image.likes}</p>
        <p><b>Views:</b>${image.views}</p>
        <p><b>Comments:</b>${image.comments}</p>
        <p><b>Downloads:</b>${image.downloads}</p>
        </div>
        </a>`).join('');
         const lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionsDelay: 250
         });
         lightbox.regresh();
}

export function showMessage(message) {
    iziToast.error({title: 'Error', message});
}

export function showLoader() {
    document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
    document.querySelector('.loader').classList.remove('visible');
}