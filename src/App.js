import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Search from './modules/Search/Search'
import Home from './modules/Home/Home'

import './App.css'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
