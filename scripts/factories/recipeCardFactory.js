export function recipeCard(recipe) {
	const article = document.createElement('article');
	const card = document.createElement('div');
	const image = document.createElement('img');
	const cardBody = document.createElement('div');
	const bodyFirst = document.createElement('div');
	const cardTitle = document.createElement('h5');
	const timerContainer = document.createElement('div');
	const timerIcon = document.createElement('img');
	const timerValue = document.createElement('span');
	const bodySecond = document.createElement('div');
	const ingredientsList = document.createElement('ul');
	const recipeText = document.createElement('p');

	// Element's classes
	bodyFirst.classList = 'd-flex justify-content-between mb-2';
	bodySecond.classList = 'd-flex';
	article.classList = 'col';
	card.classList = 'card';
	cardBody.classList = 'card-body height-fixed';
	image.classList = 'card-img-top';
	cardTitle.classList = 'card-title recipe-title';
	recipeText.classList = 'card-text  text-small line-clamp ';
	timerValue.classList = 'fs-6 fw-bold';
	timerContainer.classList = 'align-items-center';
	ingredientsList.classList = 'col-5 ms-0 px-0 ingredients me-3';
	image.classList = 'img-placeholder';

	// Element's attributes
	timerIcon.setAttribute('src', '../../public/images/stopwatch.svg');
	cardTitle.setAttribute('title', recipe.name);

	// Element content
	cardTitle.textContent = recipe.name;
	timerValue.textContent = ` ${recipe.time} mn`;
	recipeText.textContent = recipe.description;

	for (let i = 0; i < recipe.ingredients.length; i++) {
		const ingredientLi = document.createElement('li');
		const nameSpan = document.createElement('span');
		nameSpan.classList = 'fw-bolder text-small ';
		ingredientLi.classList = 'text-small';
		const quantitySpan = document.createElement('span');
		let unit = !recipe.ingredients[i].unit ? '' : recipe.ingredients[i].unit;
		if (unit === 'grammes') {
			unit = 'g';
		}

		if (recipe.ingredients[i].quantity) {
			nameSpan.textContent = `${recipe.ingredients[i].ingredient}: `;
			quantitySpan.textContent = `${recipe.ingredients[i].quantity}${unit}`;
		} else {
			nameSpan.textContent = `${recipe.ingredients[i].ingredient}`;
			quantitySpan.textContent = '';
		}

		ingredientLi.append(nameSpan, quantitySpan);
		ingredientsList.append(ingredientLi);
	}

	// Elements event listeners
	// This event is to allow user to click to see full recipe if it been clamped.
	article.addEventListener('click', () => {
		recipeText.classList.toggle('line-clamp');
		cardBody.classList.toggle('height-fixed');
	});

	// Element's appends.
	timerContainer.append(timerIcon, timerValue);
	bodyFirst.append(cardTitle, timerContainer);
	bodySecond.append(ingredientsList, recipeText);
	cardBody.append(bodyFirst, bodySecond);
	card.append(image, cardBody);
	article.append(card);

	return article;
}

{
	/* <article class="col">
	<div class="card">
		<img src="" alt="" class="card-img-top" />
		<div class="card-body">
			<div>
				<h5 class="card-title">Poulet coco réunionnais</h5>
				<div>
					<i class="bi bi-stopwatch"></i>
					<span>80'</span>
				</div>
			</div>
			<div>
				<ul>
					<li>Ingrédient</li>
					<li>Ingrédient</li>
					<li>Ingrédient</li>
					<li>Ingrédient</li>
					<li>Ingrédient</li>
				</ul>
				<p class="card-text">
					"Découper le poulet en morceaux, les faire dorer dans une cocotte avec
					de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en
					ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate,
					le lait de coco ainsi que le poivron et l'oignon découpés en morceaux.
					Laisser cuisiner 30 minutes de plus. Servir avec du riz",
				</p>
			</div>
		</div>
	</div>
</article>; */
}
