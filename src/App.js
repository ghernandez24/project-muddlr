import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './Logo/logo.png';
import { Route, Link } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import DrinkDetails from './Components/DrinkDetails';
import RandomCocktail from './Components/Home/RandomCocktail';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About';

function App() {
	const [random, setRandom] = useState(null);

	const cocktailURL2 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

	useEffect(() => {}, []);

	function getRandomCocktail() {
		fetch(cocktailURL2)
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
				setRandom(res.drinks[0]);
			})

			.catch(console.error);
	}

	return (
		<div className='App'>
			<nav>
				<div>
					<Link to='/'>
						{' '}
						<img src={logo} alt='logo' />
					</Link>
					<h1>Muddl'r</h1>
				</div>
				<Link to='/random'>
					<button onClick={getRandomCocktail}>
						Night Out?<br></br> Try this new drink
					</button>
				</Link>
			</nav>

			<Navigation />

			<main>
				<Route path='/' exact component={Home} />

				<Route
					path='/random'
					render={() => (
						<RandomCocktail
							random={random}
							setRandom={setRandom}
							getRandom={getRandomCocktail}
						/>
					)}
				/>

				<Route path='/about' component={About} />

				<Route path='/drink/:idDrink' component={DrinkDetails} />
			</main>
		</div>
	);
}

export default App;
