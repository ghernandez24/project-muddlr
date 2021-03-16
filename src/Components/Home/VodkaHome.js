import React from 'react';
import { Link } from 'react-router-dom';

const VodkaHome = () => {
	return (
		<div>
			<h2>Vodka Drinks</h2>
			<div className='drink-container'>
				<ul>
					<li>
						<Link to='/drink/11113'>
							<span>Bloody Mary</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg'
								alt='tomato juice with vodka'
							/>
						</Link>
					</li>

					<li>
						<Link to='/drink/17252'>
							<span>Greyhound</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/g5upn41513706732.jpg'
								alt='grapefruit juice with vodka'
							/>
						</Link>
					</li>

					<li>
						<Link to='/drink/17204'>
							<span>Long Island Iced Tea</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg'
								alt='long island iced tea'
							/>
						</Link>
					</li>

					<li>
						<Link to='/drink/17214'>
							<span>Russian Spring Punch</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/ctt20s1504373488.jpg'
								alt='red drink with lemon wheel'
							/>
						</Link>
					</li>

					<li>
						<Link to='/drink/17212'>
							<span>Espresso Martini</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg'
								alt='coffee with vodka'
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VodkaHome;
