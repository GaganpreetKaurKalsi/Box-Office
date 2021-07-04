import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';


const theme = {
    mainColors: {
        blue: '#2400ff',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};


function App() {
  return (
      <div>
          <ThemeProvider theme = {theme}>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route exact path="/starred">
                      <Starred />
                  </Route>
                  <Route exact path="/show/:id">
                      <Show />
                  </Route>
                  <Route>
                      <h2>Page not found</h2>
                  </Route>
              </Switch>
          </ThemeProvider>
      </div>
  );
}

export default App;
