import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from "react-router-config";

import routes from './routes';

const routing = (
    <Router>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
