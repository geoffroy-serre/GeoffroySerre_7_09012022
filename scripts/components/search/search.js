import {recipes} from '../../data/recipes.js';
import {recipeCard} from '../../factories/recipeCardFactory.js';
import {emptyArray} from '../../utils/arrayUtils.js';
import {
	populateAppliance,
	populateDropdownList,
	populateIngredients,
	populateUstensils,
} from '../dropdown/dropdown.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');
const results = [];

export function handleInputSearch() {
	emptyArray(results);

	console.log('handleinput triggered', results);

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
		}
		// else if (recipe.appliance.toLowerCase().includes(searchTerms)) {
		// 	results.push(recipe);
		// }
	}

	displayResults(results);
	populateDropdownList(results);
}

function searchInSubArray(index, attributeName, searchTerms) {
	if (attributeName === 'ingredients') {
		for (let i = 0; i < recipes[index].ingredients.length; i++) {
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

export function displayResults(results) {
	const recipeList = document.querySelector('#results');
	recipeList.innerHTML = '';
	for (let i = 0; i < results.length; i++) {
		recipeList.append(recipeCard(results[i]));
	}
}

export function searchCurrent(search, type) {
	console.log(search);
	switch (type) {
		case 'ingredients':
			searchIngredient(search);
			break;
		case 'ustensils':
			searchUstensils(search);
			break;
		case 'appliances':
			searchAppliance(search);
			break;
		default:
			break;
	}
}

export function searchIngredient(search) {
	const sortedDropdown = [];
	const recipes = new Set([]);

	for (let i = 0; i < results.length; i++) {
		for (let j = 0; j < results[i]?.ingredients.length; j++) {
			if (results[i].ingredients[j].ingredient.toLowerCase().includes(search)) {
				sortedDropdown.push(results[i].ingredients[j].ingredient);
				recipes.add(results[i]);
			}
		}
	}

	const result = Array.from(recipes);

	displayResults(result);
	populateIngredients(sortedDropdown);
	populateUstensils(result, 'all');
	populateAppliance(result, 'all');
	// setResults(result);
}

export function searchUstensils(search) {
	const sortedDropdown = [];
	const recipes = new Set([]);

	for (let i = 0; i < results.length; i++) {
		for (let j = 0; j < results[i]?.ustensils.length; j++) {
			if (
				results[i].ustensils[j].toLowerCase().includes(search.toLowerCase())
			) {
				sortedDropdown.push(results[i].ustensils[j]);
				recipes.add(results[i]);
			}
		}
	}

	const result = Array.from(recipes);
	displayResults(result);
	populateUstensils(sortedDropdown);
	populateIngredients(result, 'all');
	populateAppliance(result, 'all');
}

export function searchAppliance(search) {
	const sortedDropdown = [];
	const recipes = new Set([]);

	for (let i = 0; i < results.length; i++) {
		if (results[i].appliance.toLowerCase().includes(search.toLowerCase())) {
			sortedDropdown.push(results[i].appliance);
			recipes.add(results[i]);
		}
	}

	const result = Array.from(recipes);
	displayResults(result);
	populateAppliance(sortedDropdown);
	populateUstensils(result, 'all');
	populateIngredients(result, 'all');
}

export function getResults() {
	return results;
}

export function setResults(presults) {
	results = presults;
}
