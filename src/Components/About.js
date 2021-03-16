import React from 'react';

function About(props) {
	return (
		<div className='about-page'>
			<h1>Welcome to Muddl'r</h1>
			<h3>What can we get you?</h3>
			<article>
				<h3>About</h3>
				<p>Welcome to Muddl'r. This app was created for those who enjoy the labors of a fresh made cocktail. Wether enjoying a night out or looking to host an evening with friends, Muddl'r is your go to app to try a new cocktail or simply get the recipe lighting fast. </p>
			</article>
			<article>
				<h3>Contributors</h3>
				<p>My name is Guillermo Hernandez. I am a former bartender and sales professional diving into the world of software enginnering. As I bartender I always enjoyed crafting cocktails to guests. I added a random feature where you can get a random drink to ask your bartender next time you are out in the town or looking to improve your bartending craft! Enjoy the site app and remember</p>
				<h4>...Drink Responsibly!</h4>
			</article>
			<img
				width='50%'
				src='https://media.giphy.com/media/sEH3lMz5hMBEc/giphy.gif'
				alt='dog shaking cocktail'
			/>
		</div>
	);
}

export default About;
