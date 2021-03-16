import React from 'react';
import './Home.css';

// Drink Components
import WhiskeyHome from './WhiskeyHome';
import TequilaHome from './TequilaHome';
import VodkaHome from './VodkaHome';
import GinHome from './GinHome';

function Home() {
	return (
		<div className='home-list'>
			<WhiskeyHome />
			
			<TequilaHome />
			
			<VodkaHome />

			<GinHome />
		</div>
	);
}

export default Home;
