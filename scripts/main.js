import {handleInputSearch} from './search/search.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');
const ingredientsButton = document.querySelector('#ingredientsButtonDropdown');
const ingredientsInput = document.querySelector('#ingredientsInputDropdown');
const ingredientsList = document.querySelector('#ingredientsDropdownList');
const inputContainer = document.querySelector('#inputDropdownContainer');

// Event Listeners
searchInput.addEventListener('keyup', () => {
	if (searchInput.value.length >= 3) {
		handleInputSearch();
	}
	if (searchInput.value.length < 3) {
		document.querySelector('#results').textContent = '';
	}
});

ingredientsButton.addEventListener('click', () => {
	ingredientsButton.style.display = 'none';
	inputContainer.style.display = 'flex';
	ingredientsInput.focus();
	ingredientsList.style.display = 'flex';
});

ingredientsInput.addEventListener('blur', () => {
	ingredientsButton.style.display = 'flex';
	inputContainer.style.display = 'none';
	ingredientsList.style.display = 'none';
});
