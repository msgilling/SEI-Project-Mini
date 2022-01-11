import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import MovieIndex from './components/MovieIndex'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieShow from './components/MovieShow'
import Favourites from './components/Favourites'
import Shuffle from './components/Shuffle'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies" component={MovieIndex}/>
        <Route exact path="/movies/:id" component={MovieShow}/>
        <Route exact path="/favourites" component={Favourites}/>
        <Route exact path="/shuffle" component={Shuffle}/>

      </Switch>
    </BrowserRouter>

    
  )
}
export default App