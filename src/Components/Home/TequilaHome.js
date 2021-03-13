import React from 'react';
import { Link } from 'react-router-dom';

const TequilaHome = () => {
    return (
			<div>
				<h2>Tequila Drinks</h2>
				<div className='drink-container'>
                    
					<ul>
                        
						<li>
							<Link to='/drink/11007'>
								<span>Margarita</span>
								<img
									width='175px'
									src='https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
									alt='margarita served in martini'
								/>
							</Link>
						</li>
                        
                        
						<li>
							<Link to='/drink/11118'>
								<span>Blue Margarita</span>
								<img
									width='175px'
									src='https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'
									alt='blue margarita with lime rim'
								/>
							</Link>
						</li>
                    
						<li>
							<Link to='/drink/17216'>
								<span>Tommy's Margarita</span>
								<img
									width='175px'
									src='https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
									alt='orange margarita'
								/>
							</Link>
						</li>

						<li>
							<Link to='/drink/16158'>
								<span>Whitecap Margarita</span>
								<img
									width='175px'
									src='https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg'
									alt='coconut margarita with orange garnish'
								/>
							</Link>
						</li>

						<li>
							<Link to='/drink/178332'>
								<span>Smashed Melon Margarita</span>
								<img
									width='175px'
									src='https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg'
									alt='watermelon margarita'
								/>
							</Link>
						</li>

					</ul>

				</div>
			</div>
		);
};

export default TequilaHome;