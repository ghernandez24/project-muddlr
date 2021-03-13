import React from 'react';
import './App.css';
import logo from './Logo/logo.png'
import  { Route, Link } from 'react-router-dom';

// Components 
import Home from './Components/Home/Home';
import DrinkDetails from './Components/DrinkDetails';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About';


function App() {

  return (
    <div className="App">

<nav>
      <Link to='/'> <img src={logo} alt='logo'/> </Link>
      <h1>Muddl'r</h1>
</nav>

      <Navigation />

    <main>

      <Route path='/' exact component={Home} />

      <Route path='/about' component={About} />
      
      <Route path='/drink/:idDrink' component={DrinkDetails} />

    </main>

    </div>
  );
}

export default App;
