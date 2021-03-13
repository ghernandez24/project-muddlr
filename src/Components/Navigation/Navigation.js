import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
    <div>
        <ul className='nav-links'>

            <Link to ='/'>
                <li>Home</li>
            </Link>

            <Link to='/about'>
                <li>About</li>
            </Link>
        </ul>
    </div>
    )
}

export default Navigation;