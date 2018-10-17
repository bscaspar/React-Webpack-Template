import React from 'react';
import { BrowserRouter, Route, IndexRoute, Switch } from 'react-router-dom';

import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import AboutMe from './components/AboutMe';

const Routes = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
};

export default Routes;