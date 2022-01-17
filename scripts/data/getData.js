import {recipes} from './recipes.js';

export function retrieveOneRecipeById(id) {
	for (let i = 0; i < recipes.length; i++) {
		if (recipes[i].id === id) {
			return recipes[i];
		}
	}
}
