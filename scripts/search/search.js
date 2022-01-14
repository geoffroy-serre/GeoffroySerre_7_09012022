import {recipes} from '../data/recipes.js';
import {recipeCard} from '../factories/recipeCardFactory.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');

export function handleInputSearch() {
	let results = [];

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
	console.log(results);
	displayResults(results);
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
	for (let i = 0; i < results.length; i++) {
		recipeCard(results[i]);
	}
}
