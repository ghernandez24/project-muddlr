import React, { useState, useEffect } from 'react';

const DrinkDetails = ({ match }) => {

	const [cocktailData, setCocktailData] = useState(null);

	const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.idDrink}`;

	useEffect(() => {
		fetch(cocktailURL)
			.then((res) => res.json())
			.then((res) => {

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
				setCocktailData(res.drinks[0]);
			})

			.catch(console.error);

	}, []);

	if (!cocktailData) {
		return null;
	}

	return (
		<section className='drink-details' key={cocktailData.idDrink}>
			<img
				width='300px'
				src={cocktailData.strDrinkThumb}
				alt={cocktailData.strCcategory}
			/>
			<h2>{cocktailData.strDrink}</h2>
			<h4>Ingredients</h4>
			<ul>
				{cocktailData.recipe.map(function (item) {
					return <li key={item}>{item}</li>;
				})}
			</ul>

			<h4> Recipe </h4>
			<p>{cocktailData.strInstructions}</p>
		</section>
	);
};

export default DrinkDetails;
