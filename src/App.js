import './App.css';
import Home from './Components/Home';
import DrinkDetails from './Components/DrinkDetails'
import  { Route } from 'react-router-dom';

// const cocktailURL = 


function App() {
  return (
    <div className="App">

      <h2>Muddl'r</h2>

    <main className='container'>

      <Route path='/' exact component={Home} />
      
      <Route path='/drink' component={DrinkDetails} />

    </main>


    </div>
  );
}

export default App;
