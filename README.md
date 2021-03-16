# Project Muddl'r
Cocktail based app - utilizing React and CocktailDB

## About App
🍸 🍹 🥃<br>
Muddl'r is a modern front end application utilizing React and a third party API-CocktailDB. The app is compiled of several different components for functionality and progressive use. The reason for this project was to highlight some favorite cocktail that a user can look up the recipe for or even try a new random cocktail with the random feature I incorporated into this app. Being a former bartender, I wanted to create an app with easy functionality and navigation for the user.

### From the beginning to the end

#### Initial wireframe
<p align='center'>
<img src='https://media.git.generalassemb.ly/user/34081/files/ff5baf80-85ac-11eb-972f-bb9aa6f202bb'>
</p>

#### End Results
<p align='center'>
<img width='520px' height='340px' src='https://media.git.generalassemb.ly/user/34081/files/a8af9f00-85c7-11eb-8fd2-6d8b57acd0b6'>
</p>

### Technologies used 🖥️
- React 
- ReactRouter 
- CSS Flex/Grid
- VS Code Editor
- CocktailDB - API

### Installation instructions
All code is provided for. Simply enjoy and try out some coktails!

### References Used 
- https://reactjs.org/docs/getting-started.html
- https://www.w3schools.com/react/
- https://css-tricks.com/snippets/css/complete-guide-grid/

## User Stories 👩‍💻👨‍💻
- As a user, I want to be able to look the recipe for a chosen cocktail.
- As a user, I want to be able to see the image an ingredients needed to make a cocktail.
- As a user, I want easy functionality and navigation from each cocktail back home. 

### MVP 🏆 🏆 🏆
- Created a full working, interactive React application.
- Succesfully integrated a third party API and made fecth calls for my components.
- Currently there are 10 different components on this app for easy navigation and rendering in the future as I continue to build out this app. 
- Utilized both CSS grid and flex on my styling. 

#### Bronze 🥉 
- Implemented random drink feature button
- Dynamic CSS styling. Hoover styling in random drink button. 

#### Planned Features 
This porject I will continue to develop by: 
- Adding CSS styling components.
- Addding a search drink feature.

### Hurdles 
This being my first of many React applications utilizing a third party API, I learned how important it is to sift through the API and see if the goals are able to meet with planning and production. While working with my API the measurements and ingredients compiled as individual objects. As well when I searched for a drink by spirit all I got back was a definition for that spirit.

#### Code Snippet (proud moment)
Combining the drink measurements and ingredients.
```	let recipe = [];
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
```

### Insperational Quote 
"The secret of chnage is to foucs all of your energy , not on fighting the old, but on building the new" - Socrates