import './App.css';
import Home from './Components/Home';
import DrinkDetails from './Components/DrinkDetails';
import SearchBar from './Components/SearchBar';
import Navigation from './Components/Navigation';
import About from './Components/About';
import  { Route } from 'react-router-dom';

// const cocktailURL = 


function App() {
  return (
    <div className="App">

<header>
    <div className='logo'>Logo </div>
      <h2>Muddl'r</h2>  
</header>

      <Navigation />

    <main className='container'>

      <SearchBar />

      <Route path='/' exact component={Home} />

      <Route path='/about' component={About} />
      
      <Route path='/drink' component={DrinkDetails} />

    </main>


    </div>
  );
}

export default App;
