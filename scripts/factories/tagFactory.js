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

	return tagContainer;
}

// TODO CHECK IF TAG IS ADDED BEFORE ADD IT
// TODO ADD EVENT TO SUPPRESS TAG
