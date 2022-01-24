import {recipes} from '../data/recipes.js';
import {recipeCard} from '../factories/recipeCardFactory.js';
import {populateDropdownList} from '../dropdown/dropdown.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');

export function handleInputSearch() {
	const results = [];

	for (let i = 0; i < recipes.length; i++) {
		const recipe = recipes[i];
		const searchTerms = searchInput.value.toLowerCase();

		if (recipe.name.toLowerCase().includes(searchTerms)) {
			results.push(recipe);
		} else if (recipe.description.toLowerCase().includes(searchTerms)) {
			results.push(recipe);
		} else if (searchInSubArray(i, 'ingredients', searchTerms)) {
			results.push(recipe);
		} else if (searchInSubArray(i, 'ustensils', searchTerms)) {
			results.push(recipe);
		} else if (recipe.appliance.toLowerCase().includes(searchTerms)) {
			results.push(recipe);
		}
	}

	displayResults(results);
	populateDropdownList(results);
}

function searchInSubArray(index, attributeName, searchTerms) {
	if (attributeName === 'ingredients') {
		for (let i = 0; i < recipes[index][attributeName].length; i++) {
			if (
				recipes[index][attributeName][i].ingredient
					.toLowerCase()
					.includes(searchTerms)
			) {
				return true;
			}
		}
	} else if (attributeName === 'ustensils') {
		for (let i = 0; i < recipes[index][attributeName].length; i++) {
			if (
				recipes[index][attributeName][i].toLowerCase().includes(searchTerms)
			) {
				return true;
			}
		}
	}
}

function displayResults(results) {
	const recipeList = document.querySelector('#results');
	recipeList.innerHTML = '';
	for (let i = 0; i < results.length; i++) {
		recipeList.append(recipeCard(results[i]));
	}
}
