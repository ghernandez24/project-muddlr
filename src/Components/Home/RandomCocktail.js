import React, { useEffect } from 'react';

const RandomCocktail = ({ random, setRandom, getRandom }) => {
	useEffect(() => {
		getRandom();
	}, []);

	if (!random) {
		return null;
	}

	return (
		<section className='drink-details'>
			<img width='300px' src={random.strDrinkThumb} alt={random.strCcategory} />
			<h2>{random.strDrink}</h2>
			<h4>Ingredients</h4>
			<ul>
				{random.recipe.map(function (item) {
					return <li key={item}>{item}</li>;
				})}
			</ul>

			<h4> Recipe </h4>
			<p>{random.strInstructions}</p>
		</section>
	);
};

export default RandomCocktail;
