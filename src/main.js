import { fetchImages } from './js/pixabay-api.js';
import { showImages, showMessage, showLoader, hideLoader } from './js/render-functions.js';

document.querySelector('.search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = event.target.elements.search_query.value.trim();

    if (query === '') {
        showMessage('Please enter a search query.');
        return;
    }

    showLoader();

    fetchImages(query)
        .then(images => {
            hideLoader();
            if (images.length === 0) {
                showMessage('Sorry, there are no images matching your search query. Please try again!');
            } else {
                showImages(images);
            }
        })
        .catch(error => {
            hideLoader();
            showMessage('An error occurred while fetching images. Please try again later.');
            console.error('Error fetching images:', error);
        });
});