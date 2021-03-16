import React from 'react';
import { Link } from 'react-router-dom';

const GinHome = () => {
	return (
		<div>
			<h2>Gin Drinks</h2>
			<div className='drink-container'>
				<ul>
					<li>
						<Link to='/drink/11014'>
							<span>Alexander</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg'
								alt='cocktail in martini glass'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11149'>
							<span>Boxcar</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg'
								alt='cocktail in martini'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11224'>
							<span>Casino Royale</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/3qpv121504366699.jpg'
								alt='yellow drink in rock glass'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11417'>
							<span>Gin Sour</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg'
								alt='cocktail with lemon twist'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/12402'>
							<span>Tom Collins</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/7cll921606854636.jpg'
								alt='Cocktail in a pint'
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default GinHome;
