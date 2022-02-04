import {tagCreator} from '../../factories/tagFactory.js';

export function populateDropdownList(searchResults) {
	populateIngredients(searchResults);
	populateAppliance(searchResults);
	populateUstensils(searchResults);
}

function populateAppliance(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const applianceDropdownList = document.querySelector(
		'#appliancesDropdownList'
	);

	applianceDropdownList.innerHTML = '';

	const appliancesArray = [];

	for (let i = 0; i < searchResults.length; i++) {
		appliancesArray.push(searchResults[i].appliance);
	}

	const appliancesSet = Array.from(new Set(appliancesArray));

	for (let j = 0; j < appliancesSet.length; j++) {
		const liEl = document.createElement('li');
		const link = document.createElement('button');
		link.setAttribute('type', 'button');
		link.classList = 'dropdown-item-secondary text-light';
		link.textContent = appliancesSet[j];

		link.addEventListener('click', () => {
			const tag = tagCreator('appliance', appliancesSet[j]);
			tagList.append(tag);
		});

		liEl.append(link);
		applianceDropdownList.append(liEl);
	}
}

function populateUstensils(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const ustensilsDropdownList = document.querySelector(
		'#ustensilsDropdownList'
	);

	ustensilsDropdownList.innerHTML = '';

	const ustensilsArray = [];

	for (let i = 0; i < searchResults.length; i++) {
		for (let j = 0; j < searchResults[i]?.ustensils.length; j++) {
			ustensilsArray.push(searchResults[i].ustensils[j]);
		}
	}

	const ustensilsSet = Array.from(new Set(ustensilsArray));

	for (let k = 0; k < ustensilsSet.length; k++) {
		const liEl = document.createElement('li');
		const link = document.createElement('button');
		link.setAttribute('type', 'button');
		link.classList = 'dropdown-item-secondary text-light';
		link.textContent = ustensilsSet[k];

		link.addEventListener('click', () => {
			const tag = tagCreator('ingredient', ustensilsSet[k]);
			tagList.append(tag);
		});

		liEl.append(link);
		ustensilsDropdownList.append(liEl);
	}
}

function populateIngredients(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const ingredientsDropdownList = document.querySelector(
		'#ingredientsDropdownList'
	);

	ingredientsDropdownList.innerHTML = '';
	const ingredientArray = [];

	for (let i = 0; i < searchResults.length; i++) {
		for (let j = 0; j < searchResults[i]?.ingredients.length; j++) {
			ingredientArray.push(searchResults[i].ingredients[j].ingredient);
		}
	}

	const ingredientSet = Array.from(new Set(ingredientArray));

	for (let k = 0; k < ingredientSet.length; k++) {
		const liEl = document.createElement('li');
		const link = document.createElement('button');
		link.setAttribute('type', 'button');
		link.classList = 'dropdown-item-secondary text-light';
		link.textContent = ingredientSet[k];

		link.addEventListener('click', () => {
			console.log("tag");
			const tag = tagCreator('ingredient', ingredientSet[k]);
			console.log(tag);
			tagList.append(tag);
		});

		liEl.append(link);

		ingredientsDropdownList.append(liEl);
	}
}
