import {getResults, displayResults, handleInputSearch} from './search.js';
import {searchIngredient, searchUstensils, searchAppliance} from './search.js';

export function displayTagsResult() {
	const tagList = document
		.querySelector('#tag-list')
		.getElementsByTagName('div');

	console.log('displaying results', getResults());
	console.log(tagList.length);
	console.log(tagList);

	if (tagList.length === 0) {
		handleInputSearch();
	}
	getChoosenTags();
}

function getChoosenTags() {
	const tagList = document
		.querySelector('#tag-list')
		.getElementsByTagName('div');

	for (let i = 0; i < tagList.length; i++) {
		if (tagList[i].dataset.tagType === 'ingredient') {
			searchIngredient(tagList[i].dataset.tagName.toLowerCase());
			console.log('ingredient', tagList[i].dataset.tagName);
		} else if (tagList[i].dataset.tagType === 'appliance') {
			searchAppliance(tagList[i].dataset.tagName.toLowerCase());
			console.log('appliance', tagList[i].dataset.tagName);
		} else if (tagList[i].dataset.tagType === 'ustensil') {
			searchUstensils(tagList[i].dataset.tagName.toLowerCase());
			console.log('ustensil', tagList[i].dataset.tagName);
		}
	}
}
