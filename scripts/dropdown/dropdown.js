import {tagCreator} from '../factories/tagFactory.js';

export function populateDropdownList(searchResults) {
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
			const tag = tagCreator('ingredient', ingredientSet[k]);
			console.log(tag);
			tagList.append(tag);
		});

		liEl.append(link);
		ingredientsDropdownList.append(liEl);
	}
}
