export function tagCreator(type, tagName) {
	const tagContainer = document.createElement('div');
	const icon = document.createElement('i');

	let tagBgColor = '';

	if (type === 'ingredient') {
		tagBgColor = 'custom-bg-secondary';
	} else if (type === 'appliance') {
		tagBgColor = 'custom-bg-tertiary';
	} else {
		tagBgColor = 'custom-bg-primary';
	}

	tagContainer.classList = `${tagBgColor} tag`;
	icon.classList = 'far fa-times-circle';

	tagContainer.textContent = tagName;
	tagContainer.append(icon);

	icon.addEventListener('click', () => tagContainer.remove());

	return tagContainer;
}

// TODO ADD EVENT TO SUPPRESS TAG
