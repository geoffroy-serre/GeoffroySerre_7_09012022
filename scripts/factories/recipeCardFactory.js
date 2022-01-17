export function recipeCard(recipe) {
	const article = document.createElement('article');
	const card = document.createElement('div');
	const image = document.createElement('img');
	const cardBody = document.createElement('div');
	const bodyFirst = document.createElement('div');
	const cardTitle = document.createElement('h5');
	const timerContainer = document.createElement('div');
	const timerIcon = document.createElement('i');
	const timerValue = document.createElement('span');
	const bodySecond = document.createElement('div');
	const ingredientsList = document.createElement('ul');
	const recipeText = document.createElement('p');

	bodyFirst.classList = 'd-flex justify-content-between';
	article.classList = 'col';
	card.classList = 'card';
	cardBody.classList = 'card-body';
	image.classList = 'card-img-top';
	cardTitle.classList = 'card-title recipe-title';
	timerIcon.classList = 'bi bi-stopwatch fw-bold';
	recipeText.classList = 'card-text';

	cardTitle.textContent = recipe.name;
	timerValue.textContent = ` ${recipe.time}'`;
	recipeText.textContent = recipe.description;

	for (let i = 0; i < recipe.ingredients.length; i++) {
		const ingredientLi = document.createElement('li');
		const nameSpan = document.createElement('span');
		nameSpan.classList = 'fw-bold';
		const quantitySpan = document.createElement('span');
		const unit = !recipe.ingredients[i].unit ? '' : recipe.ingredients[i].unit;
		nameSpan.textContent = `${recipe.ingredients[i].ingredient}: `;
		quantitySpan.textContent = `${recipe.ingredients[i].quantity} ${unit}`;

		ingredientLi.append(nameSpan, quantitySpan);
		ingredientsList.append(ingredientLi);
	}

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
