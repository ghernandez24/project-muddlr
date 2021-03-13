import React from 'react';
import './App.css';
import  { Route } from 'react-router-dom';

// Components 
import Home from './Components/Home/Home';
import DrinkDetails from './Components/DrinkDetails';
import SearchBar from './Components/SearchBar';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About';


function App() {

  return (
    <div className="App">

<nav>
      <h1>Muddl'r</h1>  
</nav>

      <Navigation />

    <main>

      <SearchBar />

      <Route path='/' exact component={Home} />

      <Route path='/about' component={About} />
      
      <Route path='/drink/:idDrink' component={DrinkDetails} />

    </main>

    </div>
  );
}

export default App;
