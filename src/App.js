import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import StarWarsShips from './components/StarWarsShips'
import StarshipInfo from './components/StarshipInfo'
import './App.css';

function App() {
  const [ships, setShips] = useState([])

  const handleSubmit = () => {
   
    const url = `https://swapi.dev/api/starships/`
    axios.get(url).then(res => {
      setShips(res.data.results)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    handleSubmit()
  }, []) 

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <p>Star Wars Ships</p>
      </header>
      <div>
        <Switch>
          <Route exact path="/" render={(routeInfo) =>{return <StarWarsShips starships={ships} routeInfo={routeInfo} />}} />

          <Route exact path="/starships" render={(routeInfo) => {return <StarshipInfo shipInfo={routeInfo} starships={ships}/>}} />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;