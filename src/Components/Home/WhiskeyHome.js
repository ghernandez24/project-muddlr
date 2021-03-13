import React from 'react';
import { Link } from 'react-router-dom'

const WhiskeyHome = () => {
    return (
            <div>
				<h2>Whiskey Drinks</h2>
			<div className='drink-container'>
				<ul>
					<li>
						<Link to='/drink/11001'>
							<span>Old Fashioned</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg'
								alt='old fashioned'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11004'>
							<span>Whiskey Sour</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg'
								alt='whiskey sour'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11844'>
							<span>New York Sour</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg'
								alt='new york sour'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11129'>
							<span>Boston Sour</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/kxlgbi1504366100.jpg'
								alt='boston sour'
							/>
						</Link>
					</li>
					<li>
						<Link to='/drink/11205'>
							<span>California Lemonade</span>
							<img
								width='175px'
								src='https://www.thecocktaildb.com/images/media/drink/q5z4841582484168.jpg'
								alt='california lemonade'
							/>
						</Link>
					</li>
				</ul>
			</div>
            </div>
		);
};

export default WhiskeyHome;