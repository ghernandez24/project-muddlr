import React, { useState, useEffect } from 'react';

const RandomCocktail = () => {
	// console.log(match.params.idDrink)

	const [random, setRandom] = useState(null);

	const cocktailURL2 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

	useEffect(() => {
		fetch(cocktailURL2)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);

				let recipe = [];
				for (let i = 1; i < 15; i++) {
					// create a string for the measure and the ingredient
					if (res.drinks[0]['strMeasure' + i]) {
						// and push into recipe
						let ingredient =
							res.drinks[0]['strMeasure' + i] +
							' ' +
							res.drinks[0]['strIngredient' + i];
						recipe.push(ingredient);
					}
					// if the current measure exist
				}
				res.drinks[0].recipe = recipe;
				setRandom(res.drinks[0]);
			})

			.catch(console.error);
	}, []);

	if (!random) {
		return null;
	}

	return (
		<section className='drink-details'>
			<img
				width='300px'
				src={random.strDrinkThumb}
				alt={random.strCcategory}
			/>
			<h2>{random.strDrink}</h2>
			<h4>Ingredients</h4>
			<ul>
				{random.recipe.map(function (item) {
					return <li>{item}</li>;
				})}
			</ul>

			<h4> Recipe </h4>
			<p>{random.strInstructions}</p>
		</section>
	);
};

export default RandomCocktail;
