import {handleInputSearch} from './search/search.js';
import {retrieveOneRecipeById} from './data/getData.js';
import {recipeCard} from './factories/recipeCardFactory.js';
import {recipes} from './data/recipes.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');
const recipeList = document.querySelector('#results');
retrieveData();
// Event Listeners
searchInput.addEventListener('keyup', () => {
	if (searchInput.value.length >= 3) handleInputSearch();
});

function retrieveData() {
	recipeList.textContent = '';
	recipes.forEach((re) => {
		recipeList.append(recipeCard(re));
	});
}
