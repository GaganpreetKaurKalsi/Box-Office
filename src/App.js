import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import { useTheme } from './misc/custom-hooks';

const theme = {
    mainColors: {
        blue: '#2400ff',
        gray: '#c6c6c6',
        dark: '#353535',
        darkthemeblue: '#153dff',
        lightgray: '#E4E4E7',
        darktheme: '#000000',
        coolgray: '#D1D5DB',
        truegray: '#A3A3A3',
        white: '#FAFAFA',
    },
};

function App() {
    const [themePage, toggle] = useTheme();

    return (
        <div className = {themePage?'light':'dark-theme-background'}>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/">
                        <Home theme={themePage} toggle={toggle} />
                    </Route>
                    <Route exact path="/starred">
                        <Starred theme={themePage} toggle={toggle} />
                    </Route>
                    <Route exact path="/show/:id">
                        <Show theme={themePage} />
                    </Route>
                    <Route>
                        <h2 className="loader">Error 404 - Page not found</h2>
                    </Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;
