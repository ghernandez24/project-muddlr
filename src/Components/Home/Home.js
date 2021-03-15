import React from 'react';
import './Home.css';

// Drink Components
import WhiskeyHome from './WhiskeyHome';
import TequilaHome from './TequilaHome';
import VodkaHome from './VodkaHome';

function Home() {
	return (
		<div className='home-list'>
			<TequilaHome />

			<WhiskeyHome />

			<VodkaHome />
		</div>
	);
}

export default Home;
