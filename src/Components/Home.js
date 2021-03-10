import React from 'react';
import DrinkCard from './DrinkCard'

function Home(props) {
    return (
        <div>
			<div className ='drink-card1'><DrinkCard /></div>
			<div className ='drink-card2'><DrinkCard /></div>
			<div className ='drink-card3'><DrinkCard /></div>
			<div className ='drink-card4'><DrinkCard /></div>
			<div className ='drink-card5'><DrinkCard /></div>
		</div>			
		);
}

export default Home;