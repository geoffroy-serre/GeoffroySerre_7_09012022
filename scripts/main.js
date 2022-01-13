import {handleInputSearch} from './search/search.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');

// Event Listeners
searchInput.addEventListener('keyup', () => {
	handleInputSearch();
});
