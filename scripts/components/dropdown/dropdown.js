import {tagCreator} from '../../factories/tagFactory.js';

export function populateDropdownList(searchResults) {
	populateIngredients(searchResults);
	populateAppliance(searchResults);
	populateUstensils(searchResults);
}

function populateAppliance(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const appliancesButton = document.querySelector('#appliancesButtonDropdown');
	const inputAppliancesContainer = document.querySelector(
		'#inputAppliancesDropdownContainer'
	);
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
			// TODO CHECK IF TAG IS ADDED BEFORE ADD IT
			tagList.append(tag);
			appliancesButton.style.display = 'flex';
			inputAppliancesContainer.style.display = 'none';
			applianceDropdownList.style.display = 'none';
		});

		liEl.append(link);
		applianceDropdownList.append(liEl);
	}
}

function populateUstensils(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const ustensilsButton = document.querySelector('#ustensilsButtonDropdown');
	const inputUstensilsContainer = document.querySelector(
		'#inputUstensilsDropdownContainer'
	);
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
			const tag = tagCreator('ustensil', ustensilsSet[k]);
			// TODO CHECK IF TAG IS ADDED BEFORE ADD IT
			tagList.append(tag);
			ustensilsButton.style.display = 'flex';
			inputUstensilsContainer.style.display = 'none';
			ustensilsDropdownList.style.display = 'none';
		});

		liEl.append(link);
		ustensilsDropdownList.append(liEl);
	}
}

function populateIngredients(searchResults) {
	const tagList = document.querySelector('#tag-list');
	const ingredientsButton = document.querySelector(
		'#ingredientsButtonDropdown'
	);
	const inputContainer = document.querySelector('#inputDropdownContainer');
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
			const tag = tagCreator('ingredient', ingredientSet[k]);
			// TODO CHECK IF TAG IS ADDED BEFORE ADD IT
			tagList.append(tag);
			ingredientsButton.style.display = 'flex';
			inputContainer.style.display = 'none';
			ingredientsDropdownList.style.display = 'none';
		});

		liEl.append(link);

		ingredientsDropdownList.append(liEl);
	}
}
