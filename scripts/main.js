import {handleInputSearch, searchCurrent} from './components/search/search.js';

// Dom Elements
const searchInput = document.querySelector('#input-search');
const ingredientsButton = document.querySelector('#ingredientsButtonDropdown');
const ingredientsInput = document.querySelector('#ingredientsInputDropdown');
const ingredientsList = document.querySelector('#ingredientsDropdownList');
const inputContainer = document.querySelector('#inputDropdownContainer');
const appliancesButton = document.querySelector('#appliancesButtonDropdown');
const appliancesInput = document.querySelector('#appliancesInputDropdown');
const appliancesList = document.querySelector('#appliancesDropdownList');
const inputAppliancesContainer = document.querySelector(
	'#inputAppliancesDropdownContainer'
);
const ustensilsButton = document.querySelector('#ustensilsButtonDropdown');
const ustensilsInput = document.querySelector('#ustensilsInputDropdown');
const ustensilsList = document.querySelector('#ustensilsDropdownList');
const inputUstensilsContainer = document.querySelector(
	'#inputUstensilsDropdownContainer'
);

// Event Listeners
searchInput.addEventListener('keyup', () => {
	if (searchInput.value.length >= 3) {
		handleInputSearch();
	}
	if (searchInput.value.length < 3) {
		document.querySelector('#results').textContent = '';
	}
});

// Ingredients Events
ingredientsButton.addEventListener('click', () => {
	ingredientsButton.style.display = 'none';
	inputContainer.style.display = 'flex';
	ingredientsInput.focus();
	ingredientsList.style.display = 'flex';
});

ingredientsInput.addEventListener('click', () => {
	ingredientsButton.style.display = 'flex';
	inputContainer.style.display = 'none';
	ingredientsList.style.display = 'none';
	ingredientsInput.value = '';
});

ingredientsInput.addEventListener('keyup', () => {
	searchCurrent(ingredientsInput.value, 'ingredients');
});

// Appliance Events
appliancesButton.addEventListener('click', () => {
	appliancesButton.style.display = 'none';
	inputAppliancesContainer.style.display = 'flex';
	appliancesInput.focus();
	appliancesList.style.display = 'flex';
});

appliancesInput.addEventListener('click', () => {
	appliancesButton.style.display = 'flex';
	inputAppliancesContainer.style.display = 'none';
	appliancesList.style.display = 'none';
});

appliancesInput.addEventListener('keyup', () => {
	searchCurrent(appliancesInput.value, 'appliances');
});

// Ustensils Events
ustensilsButton.addEventListener('click', () => {
	ustensilsButton.style.display = 'none';
	inputUstensilsContainer.style.display = 'flex';
	ustensilsInput.focus();
	ustensilsList.style.display = 'flex';
});

ustensilsInput.addEventListener('click', () => {
	ustensilsButton.style.display = 'flex';
	inputUstensilsContainer.style.display = 'none';
	ustensilsList.style.display = 'none';
});

ustensilsInput.addEventListener('keyup', () => {
	searchCurrent(ustensilsInput.value, 'ustensils');
});
