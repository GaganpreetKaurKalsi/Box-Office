import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <Starred />
        </Route>
        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
