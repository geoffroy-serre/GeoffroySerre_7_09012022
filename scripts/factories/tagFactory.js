export function tagCreator(type, tagName) {
	const tagContainer = document.createElement('div');
	const icon = document.createElement('i');

	let tagBgColor = '';
	let dataType = '';

	if (type === 'ingredient') {
		tagBgColor = 'custom-bg-secondary';
		dataType = 'ingredient';
	} else if (type === 'appliance') {
		tagBgColor = 'custom-bg-tertiary';
		dataType = 'appliance';
	} else {
		tagBgColor = 'custom-bg-primary';
		dataType = 'ustensil';
	}

	tagContainer.classList = `${tagBgColor} tag`;
	icon.classList = 'far fa-times-circle';
	tagContainer.dataset.tagType = dataType;
	tagContainer.dataset.tagName = tagName;
	tagContainer.textContent = tagName;
	tagContainer.append(icon);

	icon.addEventListener('click', () => tagContainer.remove());

	return tagContainer;
}
