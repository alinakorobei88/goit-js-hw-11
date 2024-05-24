const API_KEY = '44034350-c8dd89b120010b9025e6f422d';
const BASE_URL = 'https://pixabay.com/api/';

export  function fetchImages(query) {
   return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
   .then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
   })
   .then(data => data.hits);   
}