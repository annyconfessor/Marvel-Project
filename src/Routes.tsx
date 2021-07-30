import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Details from "./screens/Details";
import Home from './screens/Home'
import My404Page from "./screens/My404Page";

const Routes = (): React.ReactElement => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="*" component={My404Page}/>
        </Switch>
    </Router>
)

export default Routes;