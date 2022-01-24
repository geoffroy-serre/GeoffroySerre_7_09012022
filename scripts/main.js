import {handleInputSearch} from './search/search.js';
import {retrieveOneRecipeById} from './data/getData.js';
import {recipeCard} from './factories/recipeCardFactory.js';
import {recipes} from './data/recipes.js';
import {searchResults} from './search/search.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');
const ingredientsButton = document.querySelector('#ingredientsButtonDropdown');
const ingredientsInput = document.querySelector('#ingredientsInputDropdown');
const recipeList = document.querySelector('#results');
const ingredientsDropdownList = document.querySelector('#ingredientsDropdown');
const ustensilsDropdownList = document.querySelector('#ustensilsDropdown');
const apparelsDropdownList = document.querySelector('#apparelsDropdown');

// retrieveData();

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
	ingredientsInput.style.display = 'block';
});

populateDropDownList();

// function retrieveData() {
// 	recipes.forEach((re) => {
// 		recipeList.append(recipeCard(re));
// 	});
// }

function populateDropDownList() {
	const ingredientArray = [];
	console.log(searchResults);
	for (let i = 0; i < searchResults.length; i++) {
		for (let j = 0; j < searchResults[i]?.ingredients.length; j++) {
			ingredientArray.push(searchResults[i].ingredients[j].ingredient);
		}
	}

	const ingredientSet = Array.from(new Set(ingredientArray));

	for (let k = 0; k < ingredientSet.length; k++) {
		const liEl = document.createElement('li');
		const link = document.createElement('a');
		link.setAttribute('href', '#');
		link.classList = 'dropdown-item dropdown-item-secondary text-light';
		liEl.textContent = ingredientSet[k];
		link.append(liEl);
		ingredientsDropdownList.append(link);
	}
}
