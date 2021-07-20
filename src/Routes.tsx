import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './screens/Home'

const Routes = (): React.ReactElement => (
    <Router>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
)

export default Routes;